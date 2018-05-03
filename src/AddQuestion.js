import React from 'react';
// import { StackNavigator } from 'react-navigation';
import {withNavigation} from 'react-navigation';
import {Button, List, InputItem, Toast} from 'antd-mobile';
import {SafeAreaView} from 'react-navigation';
import {Consumer} from './context/decks';

class AddQuestion extends React.Component {
  constructor(props) {
    super();
    this.state = {
      question: '',
      answer: '',
      onSubmit: false,
    };
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params.deck.title,
    };
  }
  question = (value) => {
    this.setState({
      question: value,
      onSubmit: false,
    });
  }
  answer = (value) => {
    this.setState({
      answer: value,
      onSubmit: false,
    });
  }

  render() {
    const deck = this.props.navigation.state.params.deck;
    return (
      <Consumer>
        {
          (store) => <SafeAreaView>
            <List>
              <InputItem
                placeholder="Please input a question"
                clear
                moneyKeyboardAlign="left"
                labelNumber="4.5"
                onChange={this.question}
                value={this.state.question}
                error={!this.state.question && this.state.onSubmit}
              >Question:</InputItem>
              <InputItem
                placeholder="Please input a answer"
                clear
                moneyKeyboardAlign="left"
                labelNumber="4.5"
                onChange={this.answer}
                value={this.state.answer}
                error={!this.state.answer && this.state.onSubmit}
              >Answer:</InputItem>
            </List>
            <List.Item>
              <Button
                onClick={() => {
                  this.setState({
                    onSubmit: true
                  })
                  if (this.state.question && this.state.answer){
                    store.addQuestion({
                      id: deck.id,
                      question: this.state.question,
                      answer: this.state.answer,
                    });
                    this.setState({
                      question: '',
                      answer: '',
                    });
                    Toast.success('Add Question Success!', 2, false, false);
                    this.setState({
                      onSubmit: false
                    })
                  } else {
                    Toast.fail('Please complete the form', 2, false, false);                    
                  }
                }}
              >
                Submit
              </Button>
            </List.Item>
          </SafeAreaView>
        }
      </Consumer>
    );
  }
}

export default withNavigation(AddQuestion);
