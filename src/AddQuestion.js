import React from 'react';
import { StyleSheet, Text, StatusBar, AsyncStorage, TextInput } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import styles from "./style";
import api from "./utils";
import { Button, List, InputItem } from 'antd-mobile';
import { SafeAreaView } from 'react-navigation';

class AddQuestion extends React.Component {
  constructor(props) {
    super()
    // const { params } = props.navigation.state;
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.deck.title
    }
  }
  
  render() {
    return (
      <SafeAreaView>
        <List>
          <InputItem
            placeholder="Please input a question"
            clear
            moneyKeyboardAlign="left"
            labelNumber="4.5"
          >Question:</InputItem>
          <InputItem
            placeholder="Please input a answer"
            clear
            moneyKeyboardAlign="left"
            labelNumber="4.5"
          >Answer:</InputItem>
        </List>
        <List.Item>
          <Button
            onClick={() => this.customFocusInst.focus()}
          >
            Submit
          </Button>
        </List.Item>
      </SafeAreaView>
    );
  }
}

export default withNavigation(AddQuestion);
