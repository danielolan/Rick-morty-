import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function CharacterDetailsScreen({ route }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      
  
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={character.status === "Alive" ? styles.statusIndicatorAlive : styles.statusIndicatorDead} />
                  <Text style={styles.characterStatus}>{character.status}</Text>
                </View>
                <Text>
                  <Text style={styles.textGrey}>Episodios: </Text>
                  <Text style={styles.textWhite}>{character.episode.length}</Text>
                </Text>
                <Text>
                <Text style={styles.textGrey}>Especie: </Text>
                  <Text style={styles.textWhite}>{character.species}</Text>
                </Text>
              
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282c34'
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 20
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color : "white"
  },
  statusIndicatorAlive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "green",
    marginLeft: 10, // Alineación con el texto
  },
  statusIndicatorDead: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "red",
  },
  textGrey: {
    color: "grey",
    fontSize: 20,
  },
  characterStatus: {
    paddingLeft: 10,
    paddingBottom: 10, // Espacio antes de cerrar la tarjeta
    color: "white",
  },
  characterStatus: {
    paddingLeft: 10,
     // Espacio antes de cerrar la tarjeta
    color: "white",
  },
  textWhite: {
    color: "white",
    fontSize: 18,
  },
  // Estilos adicionales para otros detalles
});

export default CharacterDetailsScreen;
