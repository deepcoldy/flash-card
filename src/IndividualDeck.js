import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import styles from "./style";

import { SafeAreaView } from 'react-navigation';

class IndividualDeck extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="red"
        />
        <Text style={styles.paragraph}>
          Dark Screen
        </Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('DeckList')}
        />
      </SafeAreaView>
    );
  }
}

export default withNavigation(IndividualDeck);
