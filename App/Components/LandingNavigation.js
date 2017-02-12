// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/LandingNavigationStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'

import RoundedButton from '../Components/RoundedButton'

export default class LandingNavigation extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <RoundedButton
          onPress={NavigationActions.landing}
          text="  Start  "
        />
        <RoundedButton
          onPress={NavigationActions.landing}
          text="  History  "
          color="#841584"
        />
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
