// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/LandingNavigationStyle'

export default class LandingNavigation extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>LandingNavigation Component</Text>
      </View>
    )
  }
}

// // Prop type warnings
// LandingNavigation.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// LandingNavigation.defaultProps = {
//   someSetting: false
// }
