// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    paddingTop: Metrics.navBarHeight,
    backgroundColor: Colors.background,
    paddingHorizontal: Metrics.navBarHeight,
  },
  text: {
    textAlign: 'left',
    fontSize: 32,
    color: Colors.snow,
  }
})
