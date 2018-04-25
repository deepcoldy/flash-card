import React from 'react';
import { StyleSheet, Text, StatusBar, AsyncStorage, TextInput, TouchableOpacity } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import styles from "./style";
import api from "./utils";
import { Button, List, InputItem } from 'antd-mobile';
import { SafeAreaView } from 'react-navigation';

class AddQuestion extends React.Component {
  constructor(props) {
    super()
    this.state = {
      question: '',
      answer: ''
    }
    // const { params } = props.navigation.state;
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.deck.title,
      headerLeft: (
        <TouchableOpacity onPress={() => {
          navigation.goBack('IndividualDeck', {
            deck: navigation.state.params.deck
          })
        }}><Text>back</Text></TouchableOpacity>
      )
    }
  }
  question = (value) => {
    if(value) {
      this.setState({
        question: value
      })
    }
  }
  answer = (value) => {
    if (value) {
      this.setState({
        answer: value
      })
    }
  }
  render() {
    const deck = this.props.navigation.state.params.deck;
    return (
      <SafeAreaView>
        <List>
          <InputItem
            placeholder="Please input a question"
            clear
            moneyKeyboardAlign="left"
            labelNumber="4.5"
            onChange={this.question}
            value={this.state.question}
          >Question:</InputItem>
          <InputItem
            placeholder="Please input a answer"
            clear
            moneyKeyboardAlign="left"
            labelNumber="4.5"
            onChange={this.answer}
            value={this.state.answer}
          >Answer:</InputItem>
        </List>
        <List.Item>
          <Button
            onClick={() => {
              api.saveQuestion({
                id: deck.id,
                question: this.state.question,
                answer: this.state.answer
              }).then(() => {
                
              })
            }}
          >
            Submit
          </Button>
        </List.Item>
      </SafeAreaView>
    );
  }
}

export default withNavigation(AddQuestion);
