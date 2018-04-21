import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, AsyncStorage } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import styles from "./style";
import api from "./utils";
import { Button } from 'antd-mobile';

import { SafeAreaView } from 'react-navigation';

class IndividualDeck extends React.Component {
  
  constructor(props) {
    super()
    // const { params } = props.navigation.state;
  }
  static navigationOptions = ({ navigation }) => {
    console.log(navigation)
    return {
      title: navigation.state.params.deck.title
    }
  }
  
  render() {
    return (
      <SafeAreaView style={[styles.individualDeck]}>
        <Text style={styles.deckName}>{this.props.navigation.state.params.deck.title}</Text>
        <Text style={styles.questionNumber}>{this.props.navigation.state.params.deck.count} cards</Text>
        <Button type="ghost" style={styles.button}>Add Card</Button>
        <Button type="primary" style={styles.button}>Start Quiz</Button>

      </SafeAreaView>
    );
  }
}

export default withNavigation(IndividualDeck);
