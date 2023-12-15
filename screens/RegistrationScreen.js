
import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, Dimensions } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Логіка входу тут
    console.log('Logging in...');

    navigation.navigate('Trading');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Username" style={styles.input} />
          <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        </View>
        <Button title="Login" onPress={handleLogin} />

        {/* Кнопка для забутого пароля */}
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.linkText}>Forget Password?</Text>
        </TouchableOpacity>

        {/* Кнопка для реєстрації */}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  inputContainer: {
    width: '40%', 
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: '100%',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default LoginScreen;
