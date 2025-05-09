import { Octicons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

type TContenidoCardProps = {
  id: number;
  nombre: string;
  descripcion: string;
  generos: number[];
  tipoId: number;
  imageUrl: string;

};
export function ContenidoCard({
  id,
  nombre,
  descripcion,
  generos,
  tipoId,
  imageUrl,
}: TContenidoCardProps) {
  return (
    <View style={styles.card}>
      <ImageBackground source={imageUrl}>
      </ImageBackground>
      <View>
        <Text style={styles.titleText}>{nombre}</Text>
      </View>
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
  titleText: {
    fontWeight: "bold",
    fontSize: 18 ,
  },
});
