import * as React from 'react';
import {
  Image,
  Text, 
  View 
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import { VIEW_PORT_WIDTH } from '../Commons/utils';
export default class CarouselSimple extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex: 0
      }
    }

    renderItem({item}) {
      return (
        <View style={styles.carouselItem}>
          <Image source={{ uri: item.photo_url, width:  (VIEW_PORT_WIDTH -70) , height: 145 }} />
        </View>
      )
    }
    
    render() {
      const { data } = this.props;
      return (
        <View
          style={styles.carouselContainer}
        >
        <Carousel
          layout={"default"}
          ref={ref => this.carousel = ref}
          data={data}
          sliderWidth={VIEW_PORT_WIDTH - 70}
          itemWidth={VIEW_PORT_WIDTH - 70}
          renderItem={this.renderItem}
          onSnapToItem = { index => this.setState({activeIndex: index}) } />
        </View>
      );
    }
}

