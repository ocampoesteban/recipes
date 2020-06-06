import { FlatList, Text, View, TouchableHighlight, Image, SafeAreaView } from 'react-native';
import React from 'react';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import { getCategoryName } from '../../data/MockDataAPI';
import MenuImage from '../../components/MenuImage/MenuImage';
import AnimatedIcon from '../../components/AnimatedIcon/AnimatedIcon';
import CarouselSimple from '../../components/CarouselSimple/CarouselSimple';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    )
  });

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  changeAnimatedIcon = () => {

  }

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='transparent' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <AnimatedIcon 
          initialIcon = 'heart'
          secondIcon = 'hearto'
          positionIcon = 'animatedIconContainerRightTop'
        />
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (

      <View>
        <CarouselSimple />
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
