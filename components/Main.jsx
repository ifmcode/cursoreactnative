import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CharacterCard } from "./CharacterCard";

export default function Main({ characters }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text style={styles.title}>Rick and Morty Characters</Text>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={styles.lista}
      >
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
});
