// @flow

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/PlayerRowStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import PlayersActions from '../Redux/PlayersRedux'

class PlayerRow extends React.Component {
  _handlePlayerSelected = () => {
    this.props.selectPlayer(this.props.id)
    NavigationActions.playerInfo()
  }

  render () {
    props = this.props
    return (
      <TouchableOpacity  style={styles.row} onPress={this._handlePlayerSelected}>
        <Text style={styles.boldLabel}>{props.title}</Text>
        <Text style={styles.label}>{'Total wins: '+props.description}</Text>
      </TouchableOpacity >
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
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return {
     selectPlayer: (id) => dispatch(PlayersActions.selectPlayer(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerRow)
