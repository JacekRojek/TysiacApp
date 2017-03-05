// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/LandingNavigationStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import PlayersActions from '../Redux/PlayersRedux'

import RoundedButton from '../Components/RoundedButton'

class LandingNavigation extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <RoundedButton
          onPress={NavigationActions.players}
          text="Start"
        />
        <RoundedButton
          onPress={this.props.reset}
          text="History"
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

const mapStateToProps = (state) => {
  return {
    players: state.players.players,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     reset: () => dispatch(PlayersActions.resetPlayer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingNavigation)
