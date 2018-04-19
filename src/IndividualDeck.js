import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar, AsyncStorage } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import styles from "./style";
import api from "./utils";

import { SafeAreaView } from 'react-navigation';

class IndividualDeck extends React.Component {
  
  constructor(props) {
    super()
    // const { params } = props.navigation.state;
  }
  static navigationOptions = ({ navigation }) => {
    console.log(navigation)
    return {
      title: navigation.state.params.deck.title.toString()
    }
  }
  
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <Text>123</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('DeckList')}
        />
      </SafeAreaView>
    );
  }
}

export default withNavigation(IndividualDeck);
