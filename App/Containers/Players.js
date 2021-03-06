// @flow

import React, { PropTypes } from 'react'
import { View, Text, ListView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
// import { Actions as NavigationActions } from 'react-native-router-flux'
// For empty lists
import AlertMessage from '../Components/AlertMessage'
import PlayersHeader from '../Components/PlayersHeader'
import PlayerRow from '../Components/PlayerRow'
import PlayersActions from '../Redux/PlayersRedux'
// Styles
import styles from './Styles/PlayersStyle'

class Players extends React.Component {

  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)
    // If you need scroll to bottom, consider http://bit.ly/2bMQ2BZ

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    this.ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: this.ds.cloneWithRows(props.players)
    }
  }

   componentWillReceiveProps (newProps) {
    this.setState({dataSource: this.ds.cloneWithRows(newProps.players)})
    // this.forceUpdate()
  }
  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (rowData) {
    return (
      <PlayerRow title={rowData.name} description={rowData.wins} id={rowData.id}/>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  // Render a footer.
  renderFooter = () => {
    return (
      <Text></Text>
    )
  }

  render () {
      return (
      <View style={styles.container}>
        <PlayersHeader />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderFooter={this.renderFooter}
          enableEmptySections
          pageSize={15}
          style={{flex: 1}}
        />
        <RoundedButton
          onPress={() => {
            this.props.submitPlayers()
            NavigationActions.scoreInput()
            }}
          text="Start"
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players.players,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitPlayers: () => dispatch(PlayersActions.submitPlayers())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Players)
