import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as GoogleSignIn from 'expo-google-app-auth';


const LoginScreen = ({ navigation }) => {
  const handleGoogleSignIn = async () => {
    // Логіка Google Sign In
  };

  const handleRegularSignIn = () => {
    // Логіка Regular Sign In
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <Button title="Regular Login" onPress={handleRegularSignIn} style={styles.button} />

      <Text style={styles.orText}>Or</Text>

      <Button title="Google Sign In" onPress={handleGoogleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%', // Ширина поля введення
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%', // Ширина кнопки
  },
  orText: {
    marginVertical: 20,
  },
});

export default LoginScreen;

