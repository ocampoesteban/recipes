import React from 'react';
import { Button } from 'galio-framework';
import {
    View,  
    TextInput,
    Text,
  } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      icon: 'eye-slash',
      hidePassword: true
    }
    this.user = React.createRef();
    this.password = React.createRef();
  }

  changeIcon = () => {
    this.state.icon !== "eye-slash" ?
      this.setState({ 
        icon: "eye-slash",
        hidePassword: true
      }) :
      this.setState({ 
        icon: "eye",
        hidePassword: false
      })
  }

  onPressLogin = () => {
    this.user.current.clear();
    this.password.current.clear();
    this.props.navigation.navigate('Home');
  };

  render() {
    const { user, password, hidePassword, icon } = this.state;
    const isEnabled =  user.length > 0 &&  password.length > 0;
    return (
      <View style={styles.authContainer}>
        <View style={styles.textInputContainer}>
            <TextInput
              name="user"
              style={styles.textInput}
              placeholder="User"
              placeholderTextColor="#6363638a"
              onChangeText = {evt => {
                this.setState({ user: evt });
              }}
              ref={this.user}
              maxLength={30}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                name="password"
                style={styles.textInputPassword}
                placeholder="Password"
                secureTextEntry={hidePassword}
                placeholderTextColor="#6363638a"
                onChangeText = {evt => {
                  this.setState({ password: evt });
                }}
                maxLength={30}
                ref={this.password}
              />
              <Icon 
                style={styles.icon} 
                name={icon} 
                size={30} 
                onPress={() => this.changeIcon()} 
              />
            </View>
        </View>
        <Button underlayColor='transparent' 
          style = { 
            !isEnabled ? 
            styles.btnDisabled : 
            styles.btn 
          }
          shadowless 
          onPress={() => this.onPressLogin()}
          disabled={!isEnabled}
        >
          <Text 
            style={
              !isEnabled ? 
              styles.loginBtnTextDisabled: 
              styles.loginBtnText 
            }
          >
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