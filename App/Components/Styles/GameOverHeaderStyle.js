// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding*2,

  },
  text: {
    color: Colors.snow,
    fontSize: 30,
    textAlign: "center",
  }
})
