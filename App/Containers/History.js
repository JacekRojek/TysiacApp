// @flow

import React, { PropTypes } from 'react'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// For empty lists
import StatisticsRow from '../Components/StatisticsRow'

// Styles
import styles from './Styles/HistoryStyle'
import RoundedButton from '../Components/RoundedButton'

class History extends React.Component {

  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(this.props.history)
    }
  }
  renderRow (rowData) {
    return (
      <StatisticsRow name={rowData.name} date={rowData.date} players={rowData.players}/>
    )
  }

  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  // Render a footer.
  renderFooter = () => {
    return (
      <Text> - Footer - </Text>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Statistics</Text>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderFooter={this.renderFooter}
          enableEmptySections
          pageSize={10}
        />
         <RoundedButton
            onPress={() => NavigationActions.landing()}
            text="Play"
          />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.players.history,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
