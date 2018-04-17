import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import { SafeAreaView } from 'react-navigation';
import { Modal, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import styles from "./style";
import Card from "./DeckCard";
import api from "./utils";

const prompt = Modal.prompt;
const alert = Modal.alert;
// AsyncStorage.clear()

_keyExtractor = (item, index) => item.id;
class DeckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deckData: [],
    }
    api.getDecks().then((deckData) => {
      this.setState({
        deckData,
      })
    })
  }
  render() {
    return (
      <SafeAreaView style={{ minHeight: '100%' }}>
        <FlatList
          data={this.state.deckData}
          keyExtractor={_keyExtractor}
          renderItem={(item) => {
            return (
              <Card data={item.item} />
            )
          }}
        ></FlatList>
        <WhiteSpace size="lg" />
        <Button onClick={() => prompt('Please Input a Deck Name', false, [
          { text: 'Cancel' },
          { text: 'Add',
            onPress: async value => {
              if(value) {
                console.log(value)
                await this.setState({
                  deckData: [
                    ...this.state.deckData,
                    {
                      id: this.state.deckData.length + 1,
                      title: value,
                      count: 0
                    }
                  ]
                });
                AsyncStorage.setItem('deckData', JSON.stringify(this.state.deckData))
              }
            }
          },
        ])}
        >Add Deck</Button>
        <Button onClick={
          () => alert('Delete all Deck', 'Are you sure???', [
            { text: 'Cancel', onPress: () => console.log('cancel') },
            { text: 'Ok', onPress: () => {
              this.setState({
                deckData: []
              })
              AsyncStorage.clear()
            } },
          ])
        }>Delete all Deck</Button>
      </SafeAreaView>
    );
  }
}

export default withNavigation(DeckList);
