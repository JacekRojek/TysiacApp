// @flow

import React from 'react'
import { View, KeyboardAvoidingView, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import ScoreInputHeader from '../Components/ScoreInputHeader'
import PlayersActions from '../Redux/PlayersRedux'
import RoundedButton from '../Components/RoundedButton'
// Styles
import styles from './Styles/ScoreInputStyle'

// I18n
import I18n from 'react-native-i18n'

class ScoreInput extends React.Component {
  state = {
    curText: '<No Event>',
    prevText: '<No Event>',
    prev2Text: '<No Event>',
    prev3Text: '<No Event>',
  };
  constructor(props) {
    super(props);
    this.state = {selectedPlayer: props.players[props.index]};
  }

  updateText = (text) => {
    this.setState((state) => {
      return {
        curText: text,
        prevText: state.curText,
        prev2Text: state.prevText,
        prev3Text: state.prev2Text,
      };
    });
  };
  _handleSave() {
    const curentScore = this.state.selectedPlayer.score
    const score = this.state.curText + curentScore
    this.props.updateScore(this.state.selectedPlayer.id, score)
    NavigationActions.scoreInput()
    // NavigationActions.gameOver()
  }
  render () {
    const {name, score} = this.state.selectedPlayer
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ScoreInputHeader name={name} score={score}/>
        <View style={{flex:1}}> 
          <TextInput
            keyboardType="numeric" 
            autoCapitalize="none"
            placeholder="Score"
            placeholderTextColor="white"
            autoCorrect={false}
            onFocus={() => this.updateText('onFocus')}
            onBlur={() => this.updateText('onBlur')}
            onChange={(event) => this.updateText(
              'onChange text: ' + event.nativeEvent.text
            )}
            onEndEditing={(event) => this.updateText(
              'onEndEditing text: ' + event.nativeEvent.text
            )}
            onSubmitEditing={(event) => this.updateText(
              'onSubmitEditing text: ' + event.nativeEvent.text
            )}
            onSelectionChange={(event) => this.updateText(
              'onSelectionChange range: ' +
                event.nativeEvent.selection.start + ',' +
                event.nativeEvent.selection.end
            )}
            onKeyPress={(event) => {
              this.updateText('onKeyPress key: ' + event.nativeEvent.key);
            }}
            style={styles.textInput}
          />
          <RoundedButton
            onPress={this._handleSave}
            text="Save"
          />
        </View>
      </KeyboardAvoidingView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    index: store.players.selectedPlayerIndex,
    players: store.players.selectedPlayers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateScore: (id, score) => dispatch(PlayersActions.updateScore(id, score))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreInput)
