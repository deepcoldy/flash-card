import React from 'react';
import { withNavigation, SafeAreaView, NavigationActions } from 'react-navigation';
import { Text } from 'react-native';
import { Consumer } from './context/decks';
import { Button, WhiteSpace } from 'antd-mobile';
import styles from './style';

function Page(props) {
  return (
    <Text style={styles.page}>{`${props.current}/${props.total}`}</Text>
  );
}


class Quiz extends React.Component {
  constructor({navigation, store}) {
    super();
    const deck = store.decks.find((item) => {
      if (item.id === navigation.state.params.id) return true;
    });
    this.state = {
      deck,
      current: 1,
      showAnswer: false,
      correct: 0,
    };
    const setParamsAction = NavigationActions.setParams({
      params: {
        title: `Quiz: ${this.state.deck.title}`,
      },
      key: navigation.state.key,
    });
    navigation.dispatch(setParamsAction);
  }

  async recordResult(result) {
    if (result) {
      await this.setState({
        correct: this.state.correct + 1,
      });
    }
    if (this.state.current !== this.state.deck.questions.length) {
      this.setState({
        current: this.state.current + 1,
      });
    } else if (this.state.current === this.state.deck.questions.length) {
      this.props.navigation.replace('Score', {
        score: (((this.state.correct) / this.state.deck.questions.length) * 100).toFixed(2),
      });
    }
  }

  render() {
    const {deck, current, showAnswer} = this.state;
    return (
      <SafeAreaView style={styles.wrapper}>
        <Page current={current} total={deck.questions.length}/>
        {
          showAnswer ?
          <Text style={styles.title}>{deck.questions[current-1].answer}</Text>
          : <Text style={styles.title}>{deck.questions[current-1].question}</Text>
        }
        <Text onPress={() => {
          this.setState({
            showAnswer: !showAnswer,
          });
        }}>{showAnswer ? 'Answer' : 'Question' }</Text>
        <WhiteSpace size="xl"/>
        <Button type="primary" style={styles.button} onClick={() => {
          this.recordResult(true);
        }}>Correct</Button>
        <Button type="warning" style={styles.button} onClick={() => {
          this.recordResult(false);
        }}>Incorrect</Button>
      </SafeAreaView>
    );
  }
}

function withDeck(WrappedComponent) {
  return class withDeck extends React.Component {
    constructor(props) {
      super(props);
    }

    static navigationOptions = ({navigation: {state}}, props) => {
      return {
        title: state.params.title || '',
      };
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <Consumer>
        {(store) => <WrappedComponent {...this.props} store={store} />}
      </Consumer>;
    }
  };
}


export default withDeck(withNavigation(Quiz));
