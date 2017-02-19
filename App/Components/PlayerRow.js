// @flow

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/PlayerRowStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class PlayerRow extends React.Component {

  render () {
    props = this.props
    return (
      <TouchableOpacity  style={styles.row} onPress={NavigationActions.playerInfo}>
        <Text style={styles.boldLabel}>{props.title}</Text>
        <Text style={styles.label}>{props.description}</Text>
      </TouchableOpacity >
    )
  }
}

// // Prop type warnings
// PlayerRow.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// PlayerRow.defaultProps = {
//   someSetting: false
// }
