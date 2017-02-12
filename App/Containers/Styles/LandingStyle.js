// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  landingPage: {
      backgroundColor: Colors.bloodOrange,
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
})
