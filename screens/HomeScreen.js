// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Characters from '../components/Characters'; // Asegúrate de que la ruta sea correcta
import ImageRickMorty from '../assets/rick-morty.png'; // Asegúrate de que la ruta sea correcta

function HomeScreen({ navigation }) {
  const [characters, setCharacters] = useState(null);

  const fetchCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.app}>
      <View style={styles.appHeader}>
        <Text style={styles.title}>Rick & Morty</Text>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} navigation={navigation} />
        ) : (
          <>
            <Image source={ImageRickMorty} style={styles.homeImage} />
            <TouchableOpacity style={styles.searchButton} onPress={fetchCharacters}>
              <Text style={styles.buttonText}>Buscar Personajes</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    app: {
      flex: 1,
      backgroundColor: '#282c34',
    },
    appHeader: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    homeImage: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
    },
    searchButton: {
      backgroundColor: '#1ba94c',
      padding: 10,
      marginTop: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
  });

export default HomeScreen;
