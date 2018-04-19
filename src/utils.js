import { AsyncStorage } from 'react-native';

export default {
  async getDecks() {
    // return new Promise(async (resolve, reject) => {
    //   const decksData = JSON.parse(await AsyncStorage.getItem('decksData'))
    //   if (decksData) {
    //     resolve(decksData)
    //   } else {
    //     AsyncStorage.setItem('decksData', JSON.stringify([]))
    //     resolve([])
    //   }
    // })
    const get = async () => {
      const decksData = JSON.parse(await AsyncStorage.getItem('decksData'))
      if (decksData) {
        return decksData
      } else {
        AsyncStorage.setItem('decksData', JSON.stringify([]))
        return []
      }
    }
    const result = await get()
    return result
  },
  getDeck(id) {
    return new Promise(async (resolve, reject) => {
      const decksData = JSON.parse(await AsyncStorage.getItem('decksData'))
      if (decksData) {
        resolve(decksData)
      } else {
        AsyncStorage.setItem('decksData', JSON.stringify([]))
        resolve([])
      }
    })
  },
  saveDeckTitle() { },
  addCardToDeck() {},
}