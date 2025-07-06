import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { getAllCharacters } from "./lib/metacritic";
import Main from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then((characters) => {
        setCharacters(characters);
        console.log("Characters fetched:", characters.length);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main characters={characters} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});
