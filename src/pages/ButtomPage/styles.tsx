import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a71d31',
    alignItems: 'center'
  },

  text: {
    marginTop: 50,
    fontFamily: 'Roboto_500Medium',
    fontSize: 30,
    color: '#d7d6d6'
  },

  buttom: {
    width: 300,
    height: 300,
    marginTop: 150,
    borderRadius: 150,
    backgroundColor: '#96031a',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#a20021',
    borderWidth: 25
  },

  image: {
    marginBottom: 25,
    width: 180,
    height: 180,
  }
})