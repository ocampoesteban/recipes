import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from "../commons/utils";
import styles from './styles';

const _AnimatedIcon = Animatable.createAnimatableComponent(Icon);

export default class AnimatedIcon extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      liked: false
    }
  }

  handleAnimatedIconRef = (ref) => {
    this.animatedIcon = ref
  }

  handleOnPressLike = () => {
    this.animatedIcon.bounceIn()
    this.setState(prevState => ({ liked: !prevState.liked }))
  }

  getIconPosition = (iconPosition) => {
    switch (iconPosition) {
      case 'animatedIconContainerRightTop':
        return styles.animatedIconContainerRightTop;
        break;
      case 'animatedIconContainerRightTop':
        return styles;
        break;
      case 'animatedIconContainerRightTop':
        break;
      case 'animatedIconContainerRightTop':
        break;
      case 'animatedIconContainerRightTop':
        break;
    }
     
  }

  render() {
    const { liked } = this.state;
    const { initialIcon, secondIcon, positionIcon } = this.props;

    return (
      <TouchableOpacity
        activeOpacity = { 1 }
        style = {[
          styles.animatedIconContainer,
          this.getIconPosition(positionIcon)
        ]}
      >
        <_AnimatedIcon
          ref = { this.handleAnimatedIconRef }
          name = { liked ? initialIcon : secondIcon }
          color = { colors.primary }
          size = { 30 }
          style = { styles.icon }
            onPress = { this.handleOnPressLike }
        />
      </TouchableOpacity>
    )
  }
}