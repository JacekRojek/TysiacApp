// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/LandingHeaderStyle'
import I18n from 'react-native-i18n'

export default class LandingHeader extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.landingHeaderText}>{I18n.t('landingHeader')}</Text>
      </View>
    )
  }
}

// // Prop type warnings
// LandingHeader.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// LandingHeader.defaultProps = {
//   someSetting: false
// }
