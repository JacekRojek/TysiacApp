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
  },
  textInput: {
    padding: 10,
    margin: 10,
    height: 50,
    color: Colors.snow
  }
})
