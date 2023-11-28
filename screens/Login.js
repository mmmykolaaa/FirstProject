import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Тут можна додати логіку для перевірки введеного логіну та паролю
    // Наприклад, звертайтеся до сервера для автентифікації

    // Приклад перевірки просто для демонстрації
    if (username === 'admin' && password === 'password') {
      // Якщо вірні дані, виконуємо вхід
      console.log('Успішний вхід!');
    } else {
      // Якщо дані невірні, показуємо повідомлення про помилку
      console.log('Невірний логін або пароль');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ім'я користувача"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Увійти" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;

