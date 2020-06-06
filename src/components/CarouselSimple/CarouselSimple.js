import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class CarouselSimple extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"ITEM 1",
              text: "TEXT 1",
          },
          {
              title:"ITEM 2",
              text: "TEXT 2",
          },
          {
              title:"ITEM 3",
              text: "TEXT 3",
          },
          {
              title:"ITEM 4",
              text: "TEXT 4",
          },
          {
              title:"ITEM 5",
              text: "TEXT 5",
          },
        ]
      }
    }

    renderItem({item}){
        return (
          <View style={{
            backgroundColor:'floralwhite',
            borderRadius: 25,
            height: 150,
            paddingTop: 20,
            paddingLeft: 90,
            marginLeft: 10
          }}>
            <Text style={{fontSize: 50}}>{item.title}</Text>
            <Text style={{fontSize: 25}}>{item.text}</Text>
          </View>
        )
    }

    render() {
        return (
          <View
            style={{  flexDirection:'row', justifyContent: 'center', }}
          >
            <Carousel
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.state.carouselItems}
                sliderWidth={360}
                itemWidth={360}
                renderItem={this.renderItem}
                onSnapToItem = { index => this.setState({activeIndex:index}) } />
          </View>
        );
    }
}

