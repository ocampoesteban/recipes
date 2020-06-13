import { StyleSheet } from 'react-native';
import { RecipeCard, GLOBALS } from '../../AppStyles';

const styles = StyleSheet.create({
  containerCentered: GLOBALS.containerCentered,
  sectionTitle: GLOBALS.sectionTitle,
  lastAddedContainer: {
    justifyContent: 'space-between' // fix
  },
  cardContainer: RecipeCard.container,
  containerLeft: RecipeCard.containerLeft,
  containerRight: RecipeCard.containerRight,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category
});

export default styles;
