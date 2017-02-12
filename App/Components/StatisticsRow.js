// @flow

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/StatisticsRowStyle'
import Collapsible from 'react-native-collapsible';

export default class StatisticsRow extends React.Component {
 constructor(props) {
    super(props);
    this.state = {collapsed: true}
  }
  render () {
    props = this.props;
    return (
      <View style={styles.row}>
        <TouchableOpacity onPress={() => this.setState({collapsed: !this.state.collapsed})} >
          <Text style={styles.boldLabel}>{props.title}</Text>
          <Text style={styles.label}>{"Winner: "+ props.description}</Text>
        </TouchableOpacity>
        <Collapsible key collapsed={this.state.collapsed} style={styles.collapsible}>
            <Text style={styles.boldLabel}>{"Date:" + props.title}</Text>
            <Text style={styles.label}>{"Winner: "+ props.description + "    "+ props.points + " Points"}</Text>
        </Collapsible>
      </View>
    )
  }
}

// // Prop type warnings
// StatisticsRow.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// StatisticsRow.defaultProps = {
//   someSetting: false
// }
