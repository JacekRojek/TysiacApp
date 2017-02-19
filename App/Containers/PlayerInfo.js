// @flow

import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import RoundedButton from '../Components/RoundedButton'
import PlayersActions from '../Redux/PlayersRedux'

// Styles
import styles from './Styles/PlayerInfoStyle'

// I18n
import I18n from 'react-native-i18n'

class PlayerInfo extends React.Component { 
  render () {
    const { player } = this.props
    return (
      <View style={styles.container}>
          <Text style={styles.text}>{player.name}</Text>
          <Text style={styles.text}>{"Total wins: "+ player.wins}</Text>
          <RoundedButton
          onPress={() => console.warn('Player Updated')}
          text="Update"
        />
        <RoundedButton
          onPress={() => {
            this.props.deletePlayer(player.id)
            NavigationActions.players()
            }
          }
          text="Delete"
        />
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    player: state.players.selectedPlayer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePlayer: (id) => dispatch(PlayersActions.deletePlayer(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo)
