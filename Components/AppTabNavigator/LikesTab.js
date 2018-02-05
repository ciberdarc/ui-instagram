/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { Icon } from 'native-base'

export default class LikesTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-heart"
        style={{color: tintColor}}
      />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>I'm the LikesTab component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
