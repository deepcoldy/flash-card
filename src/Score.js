import React from 'react';
import {Text} from 'react-native';
import { withNavigation, SafeAreaView } from 'react-navigation';
import styles from './style';

class Score extends React.Component {
  constructor({navigation}) {
    super();
    this.state = {
      score: navigation.state.params.score,
    };
  }

  static navigationOptions = () => ({
    title: 'score',
  });

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <Text style={styles.title}>
          Your score is {this.state.score}
        </Text>
      </SafeAreaView>
    );
  }
}

export default withNavigation(Score);
