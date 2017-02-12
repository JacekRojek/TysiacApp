// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding,
  },
  text: {
    textAlign: "center",
    fontSize: 35,
    color: Colors.snow,
    padding: 10
  }
})
