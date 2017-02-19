// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  row: {
    padding: 10,
    height: 70,
    backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: Colors.snow,
  },
  textContainer: {
    flex: 4,
    flexDirection: 'column'
  },
  boldLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.snow,
    textAlign: 'left',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'left',
    color: Colors.snow
  },
})
