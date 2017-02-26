// @flow

import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import ScoreInput from './ScoreInput'
// Styles
import styles from './Styles/ScoreViewsContainerStyle'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import DefaultTabBar  from '../Components/DefaultTabBar'

class ScoreViewsContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {players: props.players}
  }

  componentWillReceiveProps(nexProps) {
    this.setState({players: nexProps.players})
      if(this.tabView){
       this.tabView.goToPage(nexProps.index)
      }
  }
  render () {
    var { players } = this.state
    return (
       <ScrollableTabView ref={(tabView) => { this.tabView = tabView; }}>
       {this.state.players.map(player => <ScoreInput key={player.id} player={player} tabLabel={player.name} />)}
      </ScrollableTabView>
    )}
  }

const mapStateToProps = (state) => {
  return {
    index: state.players.selectedPlayerIndex,
    players: state.players.selectedPlayers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreViewsContainer)
