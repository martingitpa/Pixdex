import { ROUTES } from "@/src/navigation/routes";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import colors from "@/src/constants/colors";

export default function ContenidoSlugRoute() {
  const { slug } = useLocalSearchParams(); // ← Accede a /detail/LOQUESEA

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle de: {slug}</Text>
      {/* Aquí podrías buscar los datos según el slug */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.fondo,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
  },
});