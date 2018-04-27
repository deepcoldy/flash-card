import React from 'react';
import { AsyncStorage } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import DeckList from "./src/DeckList";
import IndividualDeck from "./src/IndividualDeck";
import AddQuestion from "./src/AddQuestion";
import Quiz from "./src/Quiz";
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
  Quiz: {
    screen: Quiz,
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
        AsyncStorage.setItem('decksData', JSON.stringify(decks))
      },
      getAllDecks: async () => {
        const decks = JSON.parse(await AsyncStorage.getItem('decksData'))
        console.log(decks)
        if (decks) {
          this.setState({
            decks,
          })
        } else {
          this.state.updateDecks([])
        }
      },
      addDeck: (title) => {
        const newDecks = [
          ...this.state.decks,
          {
            id: this.state.decks.length + 1,
            title,
            questions: []
          }
        ]
        this.state.updateDecks(newDecks)
      },
      clearAllDecks: () => {
        this.setState({
          decksData: []
        })
        AsyncStorage.clear()
      },
      addQuestion: ({ id, question, answer}) => {
        const newDecks = this.state.decks.map(item => {
          console.log('item', item)
          if (item.id === id) {
            item.questions.push({
              question,
              answer
            })
          }
          return item
        });
        console.log(newDecks)
        this.state.updateDecks(newDecks)
      },
    }
    this.state.getAllDecks()
  }
  render() {
    return (
      <Provider value={this.state}>
        <Navigator/>
      </Provider>
    );
  }
}