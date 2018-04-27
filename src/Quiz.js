import React from "react";
import { withNavigation, SafeAreaView, NavigationActions } from "react-navigation";
import { Text, View } from "react-native";
import { Consumer } from "./context/decks";
import { Button, WhiteSpace } from "antd-mobile";
import styles from "./style";

function Page(props) {
  console.log(props)
  return (
    <Text style={styles.page}>{`${props.current}/${props.total}`}</Text>
  )
}


class Quiz extends React.Component{
  constructor({ navigation, store }) {
    super()
    const deck = store.decks.find((item) => {
      if(item.id === navigation.state.params.id) return true;
    })
    this.state = {
      deck,
      current: 1
    }
    const setParamsAction = NavigationActions.setParams({
      params: {
        title: `Quiz: ${this.state.deck.title}`,
      },
      key: navigation.state.key,
    });
    navigation.dispatch(setParamsAction)
  }
  
  showQuestion() {

  }

  render() {
    const { deck, current } = this.state
    return (
      <SafeAreaView style={styles.wrapper}>
        <Page current={current} total={deck.questions.length}/>
        <Text style={styles.title}>{deck.questions[current-1].question}</Text>
        <WhiteSpace size="xl"/>
        <Button type="primary" style={styles.button}>Correct</Button>
        <Button type="warning" style={styles.button}>Incorrect</Button>
      </SafeAreaView>
    )
  }
}

// function withDeck (props) {
//   return (
//     <Consumer>
//       {store => <Quiz {...props} store={store}/>}
//     </Consumer>
//   )
// }

function withDeck(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    static navigationOptions = ({ navigation: { state } }, props) => {
      return {
        title: state.params.title || ''
      }
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <Consumer>
        {store => <WrappedComponent {...this.props} store={store} />}
      </Consumer>
    }
  };
}


export default withDeck(withNavigation(Quiz));