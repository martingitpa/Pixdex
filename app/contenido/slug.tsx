import { ROUTES } from "@/src/navigation/routes";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ContenidoSlugRoute() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Contenido</Text>
      <Link href={ROUTES.CATEGORIA}>CATEGORIA</Link>
    </View>
  );
}
