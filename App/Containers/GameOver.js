// @flow

import React from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import GameOverHeader from '../Components/GameOverHeader'

// Styles
import styles from './Styles/GameOverStyle'

// I18n
import I18n from 'react-native-i18n'

class GameOver extends React.Component {
  render () {
    const player = this.props.players.find(o => o.score >=1000 )
    console.warn("Player", player)
    return (
      <View style={styles.container}>
        <GameOverHeader player={player}/>
        <View style={{flex: 1}}>
          <RoundedButton
            onPress={NavigationActions.history}
            text="History"
            color="#841584"
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players:  state.players.selectedPlayers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOver)
