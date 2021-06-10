import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EB5757',
    alignItems: 'center'
  },

  text: {
    marginTop: 50,
    fontFamily: 'Roboto_500Medium',
    fontSize: 30,
    color: '#F2F2F2'
  },

  buttom: {
    width: 300,
    height: 300,
    marginTop: 150,
    borderRadius: 150,
    backgroundColor: '#F52626',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BDBDBD',
    borderWidth: 25
  },

  image: {
    marginBottom: 25,
    width: 180,
    height: 180,
  }
})