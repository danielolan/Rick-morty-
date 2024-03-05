import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function CharacterDetailsScreen({ route }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      {/* Agrega más detalles aquí según necesites */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Estilos adicionales para otros detalles
});

export default CharacterDetailsScreen;
