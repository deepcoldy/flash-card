import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from "./style";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(props) {
    return(
      <View style = { styles.card } >
        <Text style={styles.title} onPress={() => {
          Alert.alert('You tapped the button!');
          this.props.navigation.navigate('IndividualDeck', {
            deckId: this.props.data.id
          })
        }}>
          {this.props.data.title}
        </Text>
        <Text style={styles.number}>
          {this.props.data.count} cards
        </Text>
      </View>
    )
  }
}

export default withNavigation(Card);