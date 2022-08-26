import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Style from '../styles/Style';

const HomePage = ({ navigation }) => {

  const [username, setUsername] = useState("")

  function handleSearch() {
    navigation.navigate("Perfil", { username })
  }

  return (
    <View style={Style.container}>
      <Text style={Style.title}>GitNative</Text>
      <TextInput style={Style.input} value={username} onChangeText={text => setUsername(text)}></TextInput>
      <Button title='Buscar' disabled={(username.length <= 0)} onPress={() => handleSearch()} />
    </View>
  );
}



export default HomePage;