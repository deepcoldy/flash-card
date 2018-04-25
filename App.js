import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import DeckList from "./src/DeckList";
import IndividualDeck from "./src/IndividualDeck";
import AddQuestion from "./src/AddQuestion";
import styles from "./src/style";
import { Provider, Consumer } from "./src/context/decks";
import { StackNavigator } from 'react-navigation';
import { SafeAreaView } from 'react-navigation';

const Navigator = StackNavigator({
  DeckList: {
    screen: DeckList,
  },
  IndividualDeck: {
    screen: IndividualDeck,
  },
  AddQuestion: {
    screen: AddQuestion,
  },
});

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      decks: [],
      updateDecks: (decks) => {
        this.setState({
          decks,
        })
      }
    }
  }
  render() {
    return (
      <Provider value={this.state.decks}>
        <Navigator/>
      </Provider>
    );
  }
}