// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/PlayersHeaderStyle'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
export default class PlayersHeader extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.header} >Players</Text>
          <RoundedButton
            onPress={this.props.onPress}
            text="Add | +"
          />
      </View>
    )
  }
}

// // Prop type warnings
// PlayersHeader.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// PlayersHeader.defaultProps = {
//   someSetting: false
// }
