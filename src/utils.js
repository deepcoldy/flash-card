import { AsyncStorage } from 'react-native';

export default {
  getDecks() {
    return new Promise(async (resolve, reject) => {
      const deckData = JSON.parse(await AsyncStorage.getItem('deckData'))
      if (deckData) {
        resolve(deckData)
      } else {
        AsyncStorage.setItem('deckData', JSON.stringify([]))
        resolve([])
      }
    })
  },
  getDeck(id) {
    return new Promise(async (resolve, reject) => {
      const deckData = JSON.parse(await AsyncStorage.getItem('deckData'))
      if (deckData) {
        resolve(deckData)
      } else {
        AsyncStorage.setItem('deckData', JSON.stringify([]))
        resolve([])
      }
    })
  },
  saveDeckTitle() { },
  addCardToDeck() {},
}