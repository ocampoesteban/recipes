import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  authContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textInputContainer:{
    marginBottom: 80,
  },
  textContainer: {
    marginTop: 33.3
  },
  textInput: {
    borderBottomColor: '#6363635c',
    borderBottomWidth: 1,
    fontSize: 20,
    height: 50,
    marginBottom: 20,
    letterSpacing:3,
    width: 270,
  },
  textInputPassword: {
    borderBottomColor: '#6363635c',
    borderBottomWidth: 1,
    fontSize: 20,
    height: 50,
    marginBottom: 20,
    letterSpacing:3,
    width: 270,
  },
  icon: {
    color: '#504E4E',
    position: 'absolute',
    top: 12,
    right: 0
  },
  btn: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#2cd18a',
    borderRadius: 100,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    width: 270,
  },
  btnDisabled: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#6363635c',
    borderRadius: 100,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    width: 270,
  },
  loginBtnTextDisabled: {
    color: '#6363635c',
  },
  loginBtnText: {
    color: '#2cd18a',
  },
  text: {
    alignItems: 'center', 
    color:'#636363c9',
    justifyContent: 'center',
    marginBottom: 10
  },
  createText: {
    color: '#2cd18a',
    fontWeight: "bold",
    paddingLeft:3,
  },
});

export default styles;
