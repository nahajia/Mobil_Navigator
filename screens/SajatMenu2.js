import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SajaMenu2({ navigation, route }) {
  const {id}=route.params
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sajamenu 2</Text>
      <Text>{id}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}