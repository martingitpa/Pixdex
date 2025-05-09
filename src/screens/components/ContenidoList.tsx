import { FlatList, StyleSheet, View } from "react-native";
import { ContenidoCard } from "./ContenidoCard";
import { Link } from "expo-router";
import { ROUTES } from "@/src/navigation/routes";
import { contenidosAudiovisuales } from "@/src/data/contenidosAudiovisuales";

export function ContenidoList() {
  return (
    <FlatList
      data={contenidosAudiovisuales}
      renderItem={({ item }) => (
        <Link
          href={ROUTES.DETAIL}
          style={styles.cardContainer}
        >
          <ContenidoCard {...item} />
        </Link>
      )}
      keyExtractor={(item) => item.nombre}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
    gap: 10,
  },
  cardContainer: {
    backgroundColor: "#8E9196",
    width: "30%",
    padding: 10,
    gap: 10,
  },
});
