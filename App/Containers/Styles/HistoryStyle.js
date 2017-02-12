// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    padding: 20,
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  text: {
    color: Colors.snow,
    fontSize: 32,
    textAlign: 'center',
  }
})
