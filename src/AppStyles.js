import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH , fontWeights} from './components/Commons/utils';

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 25;

// 2 photos per width
 const RecipeCard = StyleSheet.create({ // TODO: Create RecipeCard component
  container: {
    alignItems: 'center',
    marginTop: 15,
    width: (SCREEN_WIDTH - (recipeNumColums + 0.5) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  containerLeft: {
    marginLeft: 10,
  },
  containerRight: {
    marginRight: 10,
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 0.5) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 8
  }
});

const GLOBALS = StyleSheet.create({
  sectionTitle: {
    color: '#444444',
    fontSize: 26,
    fontWeight: fontWeights.Heavy,
    marginTop: 20,
    textTransform: 'uppercase',
  },
  containerCentered: {
    alignItems: 'center'
  }
})

const UTILS = StyleSheet.create({
  textShadow: {
    color: '#fff',
    letterSpacing: 2,
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
    textShadowColor: '#000',
  },
  borderShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  }
})

export {
  GLOBALS,
  UTILS,
  RecipeCard
}
