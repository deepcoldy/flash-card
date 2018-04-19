import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import DeckList from "./src/DeckList";
import IndividualDeck from "./src/IndividualDeck";
import styles from "./src/style";

import { StackNavigator } from 'react-navigation';
import { SafeAreaView } from 'react-navigation';



export default StackNavigator({
  DeckList: {
    screen: DeckList,
  },
  IndividualDeck: {
    screen: IndividualDeck,
  },
});