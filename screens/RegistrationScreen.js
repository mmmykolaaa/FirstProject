import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      // Відправте код на електронну пошту для підтвердження, якщо потрібно
      await userCredential.user.sendEmailVerification();
      Alert.alert('Registration successful', 'Please verify your email.');
      // Перехід на інший екран або додаткові дії
      // navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('Registration failed', 'Please check your credentials and try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Register" onPress={handleRegistration} style={styles.button} />

      <Text style={styles.orText}>Or</Text>

      {/* Додайте кнопку для входу, якщо користувач вже має акаунт */}
      <Button
        title="Already have an account? Login"
        onPress={() => navigation.navigate('LoginScreen')}
      />
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
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
  },
  orText: {
    marginVertical: 20,
  },
});

export default RegistrationScreen;
