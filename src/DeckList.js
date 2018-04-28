import React from 'react';
import {FlatList} from 'react-native';
import {withNavigation} from 'react-navigation';
import {SafeAreaView} from 'react-navigation';
import {Modal, Button, WhiteSpace} from 'antd-mobile';
import Card from './DeckCard';
import {Consumer} from './context/decks';

const prompt = Modal.prompt;
const alert = Modal.alert;

const _keyExtractor = (item, index) => item.id.toString();
class DeckList extends React.Component {
  constructor() {
    super();
  }
  static navigationOptions = () => ({
    title: 'Decks',
  });
  render() {
    return (
      <Consumer>
        {(store) => <SafeAreaView style={{minHeight: '100%'}}>
          <FlatList
            data={store.decks}
            keyExtractor={_keyExtractor}
            renderItem={(item) => {
              return (
                <Card data={item.item} />
              );
            }}
          ></FlatList>
          <WhiteSpace size="lg" />
          <Button onClick={() => prompt('Please Input a Deck Name', false, [
            {text: 'Cancel'},
            {
              text: 'Add',
              onPress: (value) => {
                if (value) {
                  store.saveDeckTitle(value);
                }
              },
            },
          ])}
          >Add Deck</Button>
          <Button onClick={
            () => alert('Delete all Deck', 'Are you sure???', [
              {text: 'Cancel', onPress: () => console.log('cancel')},
              {
                text: 'Ok', onPress: () => {
                  store.clearAllDecks();
                },
              },
            ])
          }>Delete all Deck</Button>
        </SafeAreaView>}
      </Consumer>
    );
  }
}

export default withNavigation(DeckList);
