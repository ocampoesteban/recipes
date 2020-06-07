import { StyleSheet } from 'react-native';
import { fontWeights, SCREEN_WIDTH } from "../../components/commons/utils";
import { Utils } from '../../AppStyles';

// item size
const CATEGORY_COLUMN = 1;
const CATEGORY_HEIGHT = 150;
const CATEGORY_MARGIN = 20;

const styles = StyleSheet.create({
  category: Utils.textShadow,
  categoriesItemContainer: {
    alignSelf: "center",
    flex: 1,
    width: (SCREEN_WIDTH - (CATEGORY_COLUMN + 1) * CATEGORY_MARGIN) / CATEGORY_COLUMN,
    marginTop: CATEGORY_MARGIN,
    height: CATEGORY_HEIGHT,
  },
  categoriesItemContainerCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesItemContainerLeft: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  categoriesItemContainerRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textContainer: {
    position: 'absolute'
  },
  textContainerLeft: {
    left: 15,
  },
  textContainerRight: {
    right: 15,
    alignItems: 'flex-end',
  },
  categoriesPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 20,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  categoriesName: {
    fontSize: 39,
    fontWeight: fontWeights.Black,
  },
  categoriesInfo: {
    fontSize: 29,
    fontWeight: fontWeights.Bold,
  }
});

export default styles;
