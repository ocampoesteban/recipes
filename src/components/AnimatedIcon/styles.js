import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  animatedIconContainer: {
    position: 'absolute',
    zIndex: 1,
  },
  animatedIconContainerRightTop: {
    marginTop: 10,
    marginRight: 10,
    right: 0,
    top: 0,
  },
  animatedIconContainerRightBottom: {
    marginBottom: 10,
    marginRight: 10,
    right: 0,
    bottom: 0,
  },
  animatedIconContainerLeftTop: {
    marginTop: 10,
    marginRight: 10,
    left: 0,
    top: 0,
  },
  animatedIconContainerLeftBottom: {
    marginBottom: 10,
    marginLeft: 10,
    left: 0,
    bottom: 0,
  },
  icon: {
    fontSize: 30,
  }
});

export default styles;
