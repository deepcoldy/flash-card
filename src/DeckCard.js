import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from "./style";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <TouchableOpacity onPress={() => {
        this.props.navigation.navigate('IndividualDeck', {
          deck: this.props.data
        })
      }}>
        <View style={styles.card}>
          <Text style={styles.title}>
            {this.props.data.title}
          </Text>
          <Text style={styles.number}>
            {this.props.data.count} cards
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default withNavigation(Card);