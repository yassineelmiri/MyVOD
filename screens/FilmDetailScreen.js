import React from 'react';
import { View, Text, Button } from 'react-native';

export default function FilmDetailScreen({ route }) {
  const { film } = route.params;

  return (
    <View>
      <Text>Titre: {film.title}</Text>
      <Text>Genre: {film.genre}</Text>
      <Text>Date de sortie: {film.releaseDate}</Text>
      <Text>Description: {film.description}</Text>
      <Button title="Ajouter aux Favoris" onPress={() => alert('Ajouté aux favoris !')} />
    </View>
  );
}
