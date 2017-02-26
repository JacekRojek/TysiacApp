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
  };
  constructor(props) {
    super(props);
    this.state = {selectedPlayer: props.player};
  }

  updateText = (text) => {
    this.setState((state) => {
      return {
        curText: text,
      };
    });
  };

  componentWillReceiveProps(nexProps) {
    this.setState({selectedPlayer: nexProps.player})
    if(nexProps.player.score >= 1000) {
      NavigationActions.gameOver()
    }
  }

  _handleSave() {
    const curentScore = this.state.selectedPlayer.score
    const score = parseInt(this.state.curText) + curentScore
    this.props.updateScore(this.state.selectedPlayer.id, score)
  }
  render () {
    const {name, score} = this.state.selectedPlayer
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ScoreInputHeader name={name} score={score}/>
        <View style={{flex:1, marginHorizontal: 50}}> 
          <TextInput
            keyboardType="numeric" 
            autoCapitalize="none"
            placeholder="Score"
            placeholderTextColor="white"
            autoCorrect={false}
            onFocus={() => this.updateText('onFocus')}
            onBlur={() => this.updateText('onBlur')}
            onChange={(event) => this.updateText(
              event.nativeEvent.text
            )}
            onEndEditing={(event) => this.updateText(
              event.nativeEvent.text
            )}
            onSubmitEditing={(event) => this.updateText(
              event.nativeEvent.text
            )}
            style={styles.textInput}
            underlineColorAndroid={'white'}
          />
          <RoundedButton
            onPress={() => this._handleSave()}
            text="Save"
          />
        </View>
      </KeyboardAvoidingView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateScore: (id, score) => dispatch(PlayersActions.updateScore(id, score))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreInput)
