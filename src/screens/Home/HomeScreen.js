import { FlatList, Text, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import { getCategoryName } from '../../data/MockDataAPI';
import MenuImage from '../../components/MenuImage/MenuImage';
import AnimatedIcon from '../../components/AnimatedIcon/AnimatedIcon';
import CarouselSimple from '../../components/CarouselSimple/CarouselSimple';
import { categories } from "../../data/dataArrays";

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

  changeAnimatedIcon = () => { }

  renderRecipes = ({ item, index }) => (
    // TODO: Create RecipeCard component 
    <TouchableHighlight 
      underlayColor='transparent' 
      onPress={() => this.onPressRecipe(item)}
    >
      {/* RecipesCardContainer */}
      <View style={[
        styles.cardContainer,
        index % 2 ?
        styles.containerLeft:
        styles.containerRight
      ]}>
        <AnimatedIcon 
          initialIcon = 'heart'
          secondIcon = 'hearto'
          value={item.favorite}
          iconPosition = 'animatedIconContainerRightTop'
        />
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <ScrollView 
        showsVerticalScrollIndicator={false}
      > 
        {/* Container */}
        <View style={styles.containerCentered}>

          {/* DiscoverMoreContainer */}
          <View style={styles.discoverMoreContainer}>
            <Text style={styles.sectionTitle}>
              Discover more
            </Text>
           
            <CarouselSimple 
              data={categories}
            />
          </View>

          {/* LastAddedContainer */}
          <View style={styles.lastAddedContainer}>
            <Text style={styles.sectionTitle}>
              Last added
            </Text>
            <FlatList
              vertical
              numColumns={2}
              data={recipes}
              renderItem={this.renderRecipes}
              keyExtractor={item => `${item.recipeId}`}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
