// @flow

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/PlayerRowStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import PlayersActions from '../Redux/PlayersRedux'
import Icon from 'react-native-vector-icons/FontAwesome';

class PlayerRow extends React.Component {
  constructor(props) {
    super(props);
    this.player = props.players.find(o => o.id === props.id)
    this.state = {selected: this.player.selected};
  }

  _handlePlayerSelected = () => {
    this.props.selectPlayer(this.props.id)
    NavigationActions.playerInfo()
  }

  _handlePlayerChoosen = () => {
    this.props.choosePlayer(this.props.id)
  }

  componentWillReceiveProps (newProps) {
    this.setState({selected: newProps.players.find(o => o.id === newProps.id).selected})
    // this.forceUpdate()
  }

  render () {
    props = this.props
    const iconColor = this.state.selected === true ? "green" : "#900"
    return (
      <View style={styles.row}>
        <TouchableOpacity  style={styles.textContainer} onPress={this._handlePlayerSelected}>
          <Text style={styles.boldLabel}>{props.title}</Text>
          <Text style={styles.label}>{'Total wins: '+props.description}</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.iconContainer} onPress={this._handlePlayerChoosen}>
          <Icon name="check" size={30} color = {iconColor} />
        </TouchableOpacity >
      </View>
    )
  }
}

// // Prop type warnings
// PlayerRow.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// PlayerRow.defaultProps = {
//   someSetting: false
// }
const mapStateToProps = (state) => {
  return { 
    players: state.players.players,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     selectPlayer: (id) => dispatch(PlayersActions.selectPlayer(id)),
     choosePlayer: (id) => dispatch(PlayersActions.choosePlayer(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerRow)
