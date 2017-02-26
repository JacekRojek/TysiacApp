// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/ScoreInputHeaderStyle'

export default class ScoreInputHeader extends React.Component {

  render () {
    const {name, score} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Enter Score</Text>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>Total Score: {score}</Text>
      </View>
    )
  }
}

// // Prop type warnings
// ScoreInputHeader.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// ScoreInputHeader.defaultProps = {
//   someSetting: false
// }
