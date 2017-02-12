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
    return (
      <View style={styles.container}>
        <GameOverHeader />
        <View style={{flex: 1}}>
          <RoundedButton
            onPress={NavigationActions.landing}
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOver)
