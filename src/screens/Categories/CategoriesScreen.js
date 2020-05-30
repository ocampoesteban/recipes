import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { categories } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';

export default class CategoriesScreen extends React.Component {
  static navigationOptions = {
    title: 'Categories'
  };

  constructor(props) {
    super(props);
  }

  onPressCategory = item => {
    const title = item.name;
    const category = item;
    this.props.navigation.navigate('RecipesList', { category, title });
  };

  renderCategory = ( item, key ) => (
    <TouchableHighlight 
      underlayColor='transparent' 
      onPress={() => this.onPressCategory(item)}
    >
      <View style={[
        styles.categoriesItemContainer,
        styles.categoriesItemContainerLeft
      ]}>
        <Image 
          style={styles.categoriesPhoto} 
          source={{ uri: item.photo_url }} />
          <View 
            style={[
              styles.textContainer,
              key % 2 === 0 ?
              styles.textContainerRight:
              styles.textContainerLeft
            ]}>
            <Text style={[styles.category, styles.categoriesName]}>{item.name}</Text>
            <Text style={[styles.category, styles.categoriesInfo]}>{getNumberOfRecipes(item.id)} recipes</Text>
          </View>
        </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={({item, index}) => this.renderCategory(item,index)}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}
