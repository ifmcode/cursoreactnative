import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { getAllCharacters } from "./lib/metacritic";

export default function App() {
  const [characters, setGames] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then((characters) => {
        setGames(characters);
        console.log("Characters fetched:", characters.length);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []);
  return (
    <View style={styles.app}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.title}>Rick and Morty Characters</Text>
        <ScrollView style={styles.lista}>
          {characters.map((character) => (
            <View key={character.id} style={styles.card}>
              <Image source={{ uri: character.image }} style={styles.image} />
              <Text style={styles.name}>{character.name}</Text>
              <Text style={styles.status}>{character.status}</Text>
              <Text style={styles.species}>{character.species}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  lista: {
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  card: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: "#333",
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  image: { width: 100, height: 150, borderRadius: 10 },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  status: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
  },
  species: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
});
