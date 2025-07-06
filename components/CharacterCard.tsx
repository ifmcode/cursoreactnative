import { Image, Text, View, StyleSheet } from "react-native";

export function CharacterCard({ character }) {
  return (
    <View key={character.id} style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.status}>{character.status}</Text>
      <Text style={styles.species}>{character.species}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: "#333",
    borderRadius: 10,
    alignItems: "center",
    width: 320,
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
