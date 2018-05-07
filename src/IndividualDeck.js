import React from 'react';
import { Text } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import {withNavigation, SafeAreaView} from 'react-navigation';
import styles from './style';
import {Button, Modal} from 'antd-mobile';
import {Consumer} from './context/decks';
import { clearNotifications } from "./notification";

const alert = Modal.alert;

class IndividualDeck extends React.Component {
  constructor(props) {
    super();
  }
  
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params.deck.title,
    };
  }

  render() {
    return (
      <Consumer>
        {
          (store) =>
          <SafeAreaView style={[styles.wrapper]}>
            <Text style={styles.deckName}>{this.props.navigation.state.params.deck.title}</Text>
            <Text style={styles.questionNumber}>{this.props.navigation.state.params.deck.questions.length} cards</Text>
            <Button type="ghost" style={styles.button} onClick={() => {
              this.props.navigation.navigate('AddQuestion', {
                deck: this.props.navigation.state.params.deck,
              });
            }}>Add Card</Button>
            <Button type="primary" style={styles.button} onClick={() => {
              if (this.props.navigation.state.params.deck.questions.length < 1) {
                alert('', 'Please add a question first', [
                  {text: 'OK', onPress: () => console.log('ok')},
                ]);
                return;
              }
              clearNotifications()
              this.props.navigation.navigate('Quiz', {
                id: this.props.navigation.state.params.deck.id,
              });
            }}>Start Quiz</Button>

          </SafeAreaView>
        }
      </Consumer>
    );
  }
}

export default withNavigation(IndividualDeck);
