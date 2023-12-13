
import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Crypto Exchanger App</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Registration')} // Предполагается, что у вас есть экран Home
      />
    </View>
  );
};

export default WelcomeScreen;
