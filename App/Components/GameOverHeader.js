// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/GameOverHeaderStyle'

export default class GameOverHeader extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Winner:</Text>
        <Text style={styles.text}>{this.props.player.name}</Text>
        <Text style={styles.text}>Congratulations!</Text>
      </View>
    )
  }
}

// // Prop type warnings
// GameOverHeader.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// GameOverHeader.defaultProps = {
//   someSetting: false
// }
