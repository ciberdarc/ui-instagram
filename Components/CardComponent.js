/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base'

export default class CardComponent extends Component {
  render () {
    const images = {
      '1': require('../assets/feed_images/1.jpg'),
      '2': require('../assets/feed_images/2.jpg'),
      '3': require('../assets/feed_images/3.jpg')
    }

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/me.png')} />
            <Body>
              <Text>Alexis Araujo</Text>
              <Text note>Feb 05, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={images[this.props.imageSource]}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>
        <CardItem style={{height: 45}}>
          <Left>
            <Button transparent>
              <Icon name='ios-heart-outline'
                style={{color: 'black'}}
              />
            </Button>
            <Button transparent>
              <Icon name='ios-chatbubbles-outline'
                style={{color: 'black'}}
              />
            </Button>
            <Button transparent>
              <Icon name='ios-send-outline'
                style={{color: 'black'}}
              />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{height: 20}}>
          <Text>{this.props.likes}</Text>
        </CardItem>
        <CardItem>
          <Text>
            <Text style={{fontWeight: '900'}}>
              Alexis Araujo{' '}
            </Text>
            Lorem ipsum dolor amet normcore letterpress activated charcoal thundercats mlkshk plaid cardigan sustainable air plant biodiesel iPhone. Actually street art marfa craft beer taiyaki cray. IPhone narwhal mumblecore normcore, polaroid kitsch microdosing hammock kinfolk direct trade. Pabst franzen heirloom occupy subway tile pop-up.
          </Text>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
