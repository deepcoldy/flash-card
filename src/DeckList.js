import React from 'react';
import {FlatList, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {SafeAreaView} from 'react-navigation';
import {Modal, Button, WhiteSpace} from 'antd-mobile';
import Card from './DeckCard';
// import {Consumer} from './context/decks';
import withConsumer from "./consumer";
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
    const _keyExtractor = (item) => {
      return item.id+''
    }
    return (
      <View style={{ minHeight: '100%' }}>
        <FlatList
          data={this.props.store.decks}
          extraData={this.props.store}
          keyExtractor={_keyExtractor}
          renderItem={({ item, index }) => {
            return (
              <View>
                <Card data={item} />
                {
                  this.props.store.decks.length - 1 === index ?
                  (
                    <View>
                      <WhiteSpace size="xl"/>
                      <WhiteSpace size="xl"/>
                      <WhiteSpace size="xl"/>
                      <WhiteSpace size="xl"/>
                      <WhiteSpace size="xl"/>
                    </View>
                  )
                  : ''
                }
              </View>
            );
          }}
        />
        <View style={styles.fixButtonGroup}>
          <Button onClick={() => prompt('Please Input a Deck Name', false, [
            { text: 'Cancel' },
            {
              text: 'Add',
              onPress: (value) => {
                if (value) {
                  this.props.store.saveDeckTitle(value);
                }
              },
            },
          ])}
          >Add Deck</Button>
          <Button onClick={
            () => alert('Delete all Deck', 'Are you sure???', [
              { text: 'Cancel', onPress: () => console.log('cancel') },
              {
                text: 'Ok', onPress: () => {
                  this.props.store.clearAllDecks();
                },
              },
            ])
          }>Delete all Deck</Button>
        </View>
      </View>
    );
  }
}

export default withConsumer(withNavigation(DeckList));
