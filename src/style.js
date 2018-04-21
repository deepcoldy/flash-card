import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
  },
  number: {
    fontSize: 14,
    color: '#bbbbbb'
  },
  button: {
    marginBottom: 10,
    width: 200,
  },
  individualDeck: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  deckName: {
    fontSize: 30,
    textAlign: 'center'
  },
  questionNumber: {
    fontSize: 18,
    color: 'grey',
    marginBottom: 200,
  }
});