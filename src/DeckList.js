import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import { SafeAreaView } from 'react-navigation';
import styles from "./style";

function Card({ data }) {
  // console.log(data)
  return (
    <View style={styles.card}>
      <Text style={styles.title}  onPress={() => {
      Alert.alert('You tapped the button!');
      // this.props.navigation.navigate('IndividualDeck')
    }}>
        {data.title}
      </Text>
      <Text style={styles.number}>
        {data.count} cards
      </Text>
    </View>
  )
}

const deckData = [{
  key: 1,
  title: '1',
  count: '2'
},{
  key: 2,
  title: '2',
  count: '3'
},{
  key: 3,
  title: '3',
  count: '5'
}]
class DeckList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ minHeight: '100%' }}>
        <FlatList
          data={deckData}
          renderItem={(item) => {
            console.log(item)
            return (
              <Card data={item.item} />
            )
          }}
        ></FlatList>
        {/* <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Screen2')}
        /> */}
      </SafeAreaView>
    );
  }
}

export default withNavigation(DeckList);
