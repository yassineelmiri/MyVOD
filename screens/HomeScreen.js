import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../services/api';
import { setFilms } from '../redux/slices/filmSlice';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const films = useSelector(state => state.films.films);

  useEffect(() => {
    const loadFilms = async () => {
      const response = await fetchFilms();
      dispatch(setFilms(response.data));
    };
    loadFilms();
  }, []);

  return (
    <View>
      <Text>Liste des Films :</Text>
      <FlatList
        data={films}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FilmDetail', { film: item })}>
            <Text>{item.title} - {item.genre}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
