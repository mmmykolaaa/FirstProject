 import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet, TouchableWithoutFeedback, Keyboard, Picker } from 'react-native';

const TradingScreen = ({ navigation }) => {
  // Дані для прикладу
  const priceData = [100, 120, 90, 110, 130, 105, 115];
  const openTrades = [{ id: '1', symbol: 'BTC', amount: 0.5, entryPrice: 120 }, { id: '2', symbol: 'ETH', amount: 2, entryPrice: 50 }];

  // Функція для виконання торгівельної угоди
  const executeTrade = (symbol, amount, tradeType) => {
    // Логіка виконання угоди тут
    console.log(`Executing ${tradeType} order for ${amount} ${symbol}`);
  };

  const [tradeType, setTradeType] = useState('Buy');
  const [tradeAmount, setTradeAmount] = useState('');
  const [currency1, setCurrency1] = useState('BTC');
  const [currency2, setCurrency2] = useState('ETH');

  const handleExchange = () => {
    // Логіка обміну тут
    console.log(`Exchanging ${currency1} to ${currency2}`);
    navigation.navigate('ExchangeResult', { currency1, currency2 });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.chartContainer}>
          {/* Додати графіки цін криптовалют */}
          <Text>Price Chart Goes Here</Text>
        </View>
        <View style={styles.tradeContainer}>
          <Text style={styles.sectionTitle}>Open Trades</Text>
          <FlatList
            data={openTrades}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.tradeItem}>
                <Text>{item.symbol}</Text>
                <Text>Amount: {item.amount}</Text>
                <Text>Entry Price: {item.entryPrice}</Text>
              </View>
            )}
          />
          <Text style={styles.sectionTitle}>Trade Actions</Text>
          {/* Замініти кнопки на поля вводу та кнопку для виконання угоди */}
          <TextInput
            placeholder="Amount"
            value={tradeAmount}
            onChangeText={setTradeAmount}
            keyboardType="numeric"
            style={styles.input}
          />
          <Text>Select Currency 1:</Text>
          <Picker
            selectedValue={currency1}
            onValueChange={(itemValue) => setCurrency1(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="BTC" value="BTC" />
            <Picker.Item label="ETH" value="ETH" />
            {/* Додайти інші валюти за необхідністю */}
          </Picker>
          <Text>Select Currency 2:</Text>
          <Picker
            selectedValue={currency2}
            onValueChange={(itemValue) => setCurrency2(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="BTC" value="BTC" />
            <Picker.Item label="ETH" value="ETH" />
            {/* Додайти інші валюти за необхідністю тут теж */}
          </Picker>
          <Button title="Exchange" onPress={handleExchange} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 16,
  },
  tradeContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  tradeItem: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 4,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: '80%',
  },
  picker: {
    height: 40,
    width: '80%',
    marginBottom: 10,
  },
});

export default TradingScreen;
