// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: Colors.background,
  },
  textInput: {
    padding: 10,
    margin: 10,
    height: 50,
    color: Colors.snow,
    borderColor: 'white',
  }
})
