import { Dimensions } from 'react-native';

export const fontWeights = {
    Thin: '100',
    UltraLight: '200',
    Light: '300',
    Regular: '400',
    Medium: '500',
    Semibold: '600',
    Bold: '700',
    Heavy: '800',
    Black: '900'
};

export const colors = {
    primary: '#2cd18a',
    secondary: '#2cd18a', // TODO: update
}

export const { 
    width: VIEW_PORT_WIDTH, 
    height: VIEW_PORT_HEIGHT  
} = Dimensions.get('window');

// screen sizing
// orientation must fixed
export const SCREEN_WIDTH = VIEW_PORT_WIDTH < VIEW_PORT_HEIGHT ? VIEW_PORT_WIDTH : VIEW_PORT_HEIGHT;