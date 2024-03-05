import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Characters({ characters, setCharacters, navigation }) {
  // Función para resetear la lista de personajes y volver a la pantalla inicial
  const resetCharacters = () => {
    setCharacters(null);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Personajes</Text>
        <TouchableOpacity
          onPress={resetCharacters}
          style={styles.backHomeContainer}
        >
          <Icon name="keyboard-return" size={30} color="#00ffea" />
          <Text style={styles.backHomeText}>Volver a la home</Text>
        </TouchableOpacity>
        <View style={styles.charactersContainer}>
          {characters.map((character, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.characterContainer} 
              onPress={() => navigation.navigate('CharacterDetails', { character })}
            >
              <Image
                style={styles.characterImage}
                source={{ uri: character.image }}
              />
              <View>
                <Text style={styles.characterName}>{character.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={character.status === "Alive" ? styles.statusIndicatorAlive : styles.statusIndicatorDead} />
                  <Text style={styles.characterStatus}>{character.status}</Text>
                </View>
                <Text>
                  <Text style={styles.textGrey}>Episodios: </Text>
                  <Text>{character.episode.length}</Text>
                </Text>
                <Text>
                  <Text style={styles.textGrey}>Especie: </Text>
                  <Text>{character.species}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          onPress={resetCharacters}
          style={styles.backHomeContainer}
        >
          <Icon name="keyboard-return" size={30} color="#00ffea" />
          <Text style={styles.backHomeText}>Volver a la home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Estilos actualizados para incluir mejoras visuales y feedback táctil
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: 20,
  },
  backHomeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  backHomeText: {
    color: '#00ffea',
    textAlign: 'center',
    fontSize: 22,
    marginLeft: 10, // Espaciado después del icono para mejorar la legibilidad
  },
  charactersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  characterContainer: {
    width: "48%",
    marginBottom: 20,
    borderRadius: 10, // Bordes redondeados para las tarjetas
    overflow: 'hidden', // Asegura que la imagen respete los bordes redondeados
    backgroundColor: '#f0f0f0', // Fondo para las tarjetas
    elevation: 3, // Sombra para dar efecto elevado
  },
  characterImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  characterName: {
    fontWeight: "bold",
    padding: 10,
    paddingBottom: 5, // Reducir espacio antes de los detalles
  },
  characterStatus: {
    paddingLeft: 10,
    paddingBottom: 10, // Espacio antes de cerrar la tarjeta
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
  },
});
