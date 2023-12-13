
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = () => {
    // Логіка відновлення паролю тут
    console.log('Sending password reset email...');
  };

  return (
    <View style={styles.container}>
      <Text>Forget Password Screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <Button title="Reset Password" onPress={handleForgetPassword} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: '80%',
  },
});

export default ForgetPasswordScreen;
