import React from 'react';
import {Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './style';

class Score extends React.Component {
  constructor({navigation}) {
    super();
    console.log(navigation);
    this.state = {
      score: navigation.state.params.score,
    };
  }

  static navigationOptions = () => ({
    title: 'score',
  });

  render() {
    return (
      <Text style={styles.wrapper}>
        Your score is {this.state.score}
      </Text>
    );
  }
}

export default withNavigation(Score);
