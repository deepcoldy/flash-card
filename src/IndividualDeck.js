import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import styles from "./style";

import { SafeAreaView } from 'react-navigation';

class IndividualDeck extends React.Component {
  constructor(props) {
    super()
    const { params } = props.navigation.state;
    console.log(params)
  }
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <Text></Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('DeckList')}
        />
      </SafeAreaView>
    );
  }
}

export default withNavigation(IndividualDeck);
