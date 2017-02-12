// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 0.5,
    paddingHorizontal: Metrics.titlePadding,
    paddingTop: 10,
  },
  header: {
    fontSize: 40,
    color: "white",
    textAlign: "center",
  }
})
