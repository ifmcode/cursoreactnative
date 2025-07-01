import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

import icon from "./assets/icon.png";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Image
        blurRadius={3}
        source={icon}
        style={{
          width: 200,
          height: 100,
          resizeMode: "contain",
        }}
      />
      <Image
        source={{
          uri: "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/c9/TotK_Princess_Zelda_Artwork.png/revision/latest?cb=20240929143055",
        }}
        style={{
          width: 200,
          height: 100,
          marginVertical: 20,
          resizeMode: "contain",
        }}
      />
      <Text style={{ color: "white", marginBottom: 20 }}>
        Chiquita app mi niño!
      </Text>
      <Button
        title="pulsa aqui"
        color={"green"}
        onPress={() => alert("hola")}
      />
      <TouchableHighlight
        underlayColor={"yellow"}
        onPress={() => alert("hola")}
        style={{
          width: "auto",
          height: "auto",
          paddingVertical: 4,
          paddingHorizontal: 8,
          borderRadius: 8,
          backgroundColor: "blue",
          cursor: "pointer",
        }}
      >
        <Text style={{ color: "white" }}>
          Pulsa en este boton personalizado
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
