import React from 'react';
import { withNavigation, SafeAreaView, NavigationActions } from 'react-navigation';
import { Text } from 'react-native';
import { Button, WhiteSpace } from 'antd-mobile';
import styles from './style';
import withConsumer from "./withConsumer";
import { clearNotifications } from "./notification";

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
      clearNotifications()
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
          <Text style={styles.question}>{deck.questions[current-1].answer}</Text>
          : <Text style={styles.question}>{deck.questions[current-1].question}</Text>
        }
        <Text style={styles.testButton} onPress={() => {
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




export default withConsumer(withNavigation(Quiz));
