// @flow

import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/PlayersHeaderStyle'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Collapsible from 'react-native-collapsible';
import PlayersActions from '../Redux/PlayersRedux'

class PlayersHeader extends React.Component {
  state = {
    curText: '<No Event>'
  };
  constructor(props) {
    super(props);
    this.state = {collapsed: true}
  }

  updateText = (text) => {
    this.setState((state) => {
      return {
        curText: text,

      };
    });
  };

  render () {
    return (
      <View style={styles.container}>
        <Collapsible key={1} collapsed={!this.state.collapsed}>
          <Text style={styles.header} >Players</Text>
            <RoundedButton
              onPress={() => this.setState({collapsed: !this.state.collapsed})}
              text="Add Player | +"
            />
        </Collapsible>
          <Collapsible key collapsed={this.state.collapsed} style={styles.collapsible}>
            <View style={{flex:1}}> 
              <TextInput
                autoCapitalize="none"
                placeholder="Name"
                placeholderTextColor="white"
                autoCorrect={false}
                onEndEditing={(event) => this.updateText(
                  event.nativeEvent.text
                )}
                onSubmitEditing={(event) => this.updateText(
                  event.nativeEvent.text
                )}
                style={styles.textInput}
              />
              <RoundedButton
                onPress={() => {
                  const id = Math.floor((Math.random() * 1000) + 1); 
                  this.props.addPlayer({name: this.state.curText, wins: 0, 'id': id, score: 0, selected: true})
                  this.setState({collapsed: !this.state.collapsed})
                }}
                text="Save"
              />
            </View>
        </Collapsible>
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
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     addPlayer: (player) => dispatch(PlayersActions.addPlayer(player))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersHeader)
