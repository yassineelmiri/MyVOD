import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/slices/userSlice';
import { login } from '../services/api';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      dispatch(loginSuccess(response.data));
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erreur de connexion', error);
    }
  };

  return (
    <View>
      <Text>Email :</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Mot de passe :</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
}
