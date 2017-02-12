// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding,
    paddingHorizontal: Metrics.titlePadding/2,
    paddingBottom: Metrics.titlePadding/2,
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  landingHeaderText: {
    fontSize: 45,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textAlign: 'center',
  }
})
