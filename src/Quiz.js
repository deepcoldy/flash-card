import React from "react";
import { withNavigation, SafeAreaView, NavigationActions } from "react-navigation";
import { Text } from "react-native";
import { Consumer } from "./context/decks";
import { Button } from "antd-mobile";

function Page(props) {
  console.log(props)
  return (
    <Text>{`${props.current}/${props.total}`}</Text>
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
    return (
      <SafeAreaView>
        <Page current={this.state.current} total={this.state.deck.questions.length}/>
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