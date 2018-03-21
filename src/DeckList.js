import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import styles from "./style";

import { SafeAreaView } from 'react-navigation';
function Card({ data }) {
  console.log(data)
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {data.title}
      </Text>
      <Text style={styles.number}>
        {data.count} cards
      </Text>
    </View>
  )
}

class DeckList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={[{
            key: 'a',
            title: 'text',
            count: '5'
          }]}
          renderItem={(item) => {
            console.log(item)
            return (
              <Card data={item.item} />
            )
          }}
        ></FlatList>
        
        <Text>
          1 Screen
        </Text>
        {/* <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Screen2')}
        /> */}
      </SafeAreaView>
    );
  }
}

export default withNavigation(DeckList);
