import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from "../Commons/utils";

const styles = StyleSheet.create({
  carouselContainer: { 
      width: SCREEN_WIDTH - 30,
      flexDirection:'row', 
      justifyContent: 'center',
      marginRight: 1,
      marginTop: 10,
      borderRadius: 20,
      elevation: 3
  },

  carouselItem: {
    borderColor: '#cccccc',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderWidth: 0.5,
    borderRadius: 25,
  }
});

export default styles;
