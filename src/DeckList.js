import React from 'react';
import {FlatList, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {SafeAreaView} from 'react-navigation';
import {Modal, Button, WhiteSpace} from 'antd-mobile';
import Card from './DeckCard';
import {Consumer} from './context/decks';
import styles from "./style";

const prompt = Modal.prompt;
const alert = Modal.alert;

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
        {(store) => {
          const _keyExtractor = (item) => {
            console.log(item)
            return item.title + item.id
          }
          return (
            <View style={{minHeight: '100%'}}>
              <FlatList
                data={store.decks}
                // extraData={store}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => {
                  console.log('item', item)
                  return (
                    <View>
                      <Card data={item} />

                    </View>
                  );
                }}
              />
              
              <View style={styles.fixButtonGroup}>
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
              </View>
            </View>
          )
        }
        }
      </Consumer>
    );
  }
}

export default withNavigation(DeckList);
