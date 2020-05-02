import React from 'react';
import { Button } from 'galio-framework';
import {
    View,  
    TouchableWithoutFeedback, 
    TextInput,
    Text, 
  } from 'react-native';
import styles from './styles';


export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressLogin = () => {
    this.props.navigation.navigate('Home');
  };

  handleUser = (val) => {
    console.log(val)
  }

  render() {
    return (
      <View style={styles.authContainer}>
        <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="User"
              placeholderTextColor="#6363638a"
              onChangeText = {this.handleUser}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#6363638a"
              onChangeText = {this.handlePassword}
            />
        </View>
        <Button underlayColor='transparent' 
          style={styles.bttn} 
          shadowless 
          onPress={() => this.onPressLogin()} 
        >
          <Text style={styles.loginBttnText}>
            Login
          </Text>
        </Button>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Forgot your Password?
          </Text>
          <Text style={styles.text}>
            Not account yet? <Text style={styles.createText}>Create</Text>
          </Text>
        </View>
      </View>
    );
  }
}
