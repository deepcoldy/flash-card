import React from 'react';
import { AsyncStorage } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import DeckList from "./src/DeckList";
import IndividualDeck from "./src/IndividualDeck";
import AddQuestion from "./src/AddQuestion";
import Quiz from "./src/Quiz";
import Score from "./src/Score";
import { Provider } from "./src/context/decks";
import { StackNavigator } from 'react-navigation';
import { setNotifications } from "./src/notification";

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
  Score: {
    screen: Score,
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
        if(decks.length){
          console.log('set')
          setNotifications()
        }
      },
      getDecks: async () => {
        const decks = await AsyncStorage.getItem('decksData') ? JSON.parse(await AsyncStorage.getItem('decksData')) : []
        this.state.updateDecks(decks)
      },
      saveDeckTitle: (title) => {
        const newDecks = [
          ...this.state.decks,
          {
            id: this.state.decks.length + 1,
            title,
            questions: []
          }
        ]
        // const decks = this.state.decks
        // decks.push({
        //   id: this.state.decks.length + 1,
        //   title,
        //   questions: []
        // })
        // this.setState({
        //   decks
        // })

        // this.setState((prevState) => ({
        //   decks: [
        //     ...prevState.decks,
        //     {
        //       id: prevState.decks.length + 1,
        //       title,
        //       questions: []
        //     }
        //   ]
        // }), () => {

        //   console.log('123')
        // })
        this.state.updateDecks(newDecks)
      },
      clearAllDecks: () => {
        this.setState({
          decks: []
        })
        AsyncStorage.clear()
      },
      addQuestion: ({ id, question, answer}) => {
        const newDecks = this.state.decks.map(item => {
          if (item.id === id) {
            item.questions.push({
              question,
              answer
            })
          }
          return item
        });
        this.state.updateDecks(newDecks)
      },
    }
    this.state.getDecks()
  }
  render() {
    return (
      <Provider value={this.state}>
        <Navigator/>
      </Provider>
    );
  }
}