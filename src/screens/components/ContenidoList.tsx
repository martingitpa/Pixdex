import { FlatList, StyleSheet } from "react-native";
import { ContenidoCard } from "./ContenidoCard";
import { Link } from "expo-router";
import { ROUTES } from "@/src/navigation/routes";

export function ContenidoList() {
  const contenidoItems = [
    {
      name: "Contenido 1",
      image: "https://place-hold.it/170x150",
    },
    {
      name: "Contenido 2",
      image: "https://place-hold.it/170x150",
    },
    {
      name: "Contenido 3",
      image: "https://place-hold.it/170x150",
    },
  ];

  return (
    <FlatList
      data={contenidoItems}
      renderItem={({ item }) => (
        <Link
          href={ROUTES.CONTENIDO}
          style={{
            backgroundColor: "#403E43",
            borderRadius: 20,
            width: "30%",
            padding: 10,
            gap: 10,
          }}
        >
          <ContenidoCard {...item} />
        </Link>
      )}
      keyExtractor={(item) => item.name}
      numColumns={3}
      contentContainerStyle={styles.contentSeparator}
      columnWrapperStyle={styles.contentSeparator}
    />
  );
}

//------------------
// Styles
//------------------
const styles = StyleSheet.create({
  contentSeparator: { justifyContent: "center", gap: 10 },
});