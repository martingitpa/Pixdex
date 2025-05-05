import { Octicons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

type TContenidoCardProps = {
  name: string;
  image: string;
};
export function ContenidoCard({
  name,
  image,
}: TContenidoCardProps) {
  return (
    <View style={styles.card}>
      <ImageBackground source={image}>
      </ImageBackground>
    </View>
  );
}

//------------------
// Styles
//------------------
const styles = StyleSheet.create({
  card: {
    height:120,
  },
});
