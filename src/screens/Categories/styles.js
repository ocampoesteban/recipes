import { StyleSheet } from 'react-native';
import { fontWeights } from "../../components/commons/utils";
import { Utils } from '../../AppStyles';

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    height: 160,
  },
  textContainer: {
    position: 'absolute'
  },
  textContainerLeft: {
    left: 20,
  },
  textContainerRight: {
    right: 20,
    alignItems: 'flex-end',
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
  category: Utils.textShadow,
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
