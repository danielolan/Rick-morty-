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

export default function Characters(props) {
  console.log(props);
  const { characters, setCharacters } = props;

  const resetCharacters = () => {
    console.log("reseteando");
    setCharacters(null);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}> Personajes</Text>
        <TouchableOpacity
          onPress={resetCharacters}
          style={styles.backHomeContainer}
        >
          <Icon name="keyboard-return" size={30} color="#00ffea" />
          <Text style={styles.backHomeText}> Volver a la home</Text>
        </TouchableOpacity>
        <View style={styles.charactersContainer}>
          {characters.map((character, index) => (
            <View style={styles.characterContainer} key={index}>
              <Image
                style={styles.characterImage}
                source={{ uri: character.image }}
              />
              <View>
                <Text style={styles.characterName}>{character.name}</Text>
                <Text style={styles.characterStatus}>
                  {character.status === "Alive" ? (
                    <>
                      <View style={styles.statusIndicatorAlive} />
                      Vivo
                    </>
                  ) : (
                    <>
                      <View style={styles.statusIndicatorDead} />
                      Muerto
                    </>
                  )}
                </Text>
                <Text>
                  <Text style={styles.textGrey}>Episodios: </Text>
                  <Text>{character.episode.length}</Text>
                </Text>
                <Text>
                  <Text style={styles.textGrey}>Especie: </Text>
                  <Text>{character.species}</Text>
                </Text>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity
          onPress={resetCharacters}
          style={styles.backHomeContainer}
        >
          <Icon name="keyboard-return" size={30} color="#00ffea" />
          <Text style={styles.backHomeText}> Volver a la home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
  },
  backHome: {
    color: "#00ffea",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 22,
  },
  backHomeContainer: {
    flexDirection: 'row', // Alinea los elementos (ícono y texto) horizontalmente
    justifyContent: 'center', // Centra el contenido en el contenedor
    alignItems: 'center', // Alinea verticalmente
    marginTop: 10,
    marginBottom: 10,
  },
  backHomeText: {
    color: '#00ffea',
    textAlign: 'center', // Asegura que el texto esté centrado si se usa en otro contexto
    fontSize: 22,
  },
  charactersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  characterContainer: {
    width: "48%", // Aproximadamente para que quepan dos en una fila
    marginBottom: 20,
  },
  characterImage: {
    width: "100%",
    height: 200, // Ajusta la altura según necesites
    resizeMode: "cover",
    borderRadius: 20,
  },
  characterName: {
    fontWeight: "bold",
  },
  characterStatus: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusIndicatorAlive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "green",
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
