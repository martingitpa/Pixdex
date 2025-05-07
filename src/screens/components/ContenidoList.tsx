import { FlatList, StyleSheet } from "react-native";
import { ContenidoCard } from "./ContenidoCard";
import { Link } from "expo-router";
import { ROUTES } from "@/src/navigation/routes";

export function ContenidoList() {
  const contenidoItems = [
    {
      name: "Stranger Things",
      image: "https://place-hold.it/170x150",
      slug: "stranger-things",
      categories: ["Drama", "Fantasy"],
      type: "Serie",
    },
    {
      name: "Breaking Bad",
      image: "https://place-hold.it/170x150",
      slug: "breaking-bad",
      categories: ["Crime", "Drama"],
      type: "Serie",
    },
    {
      name: "The Office",
      image: "https://place-hold.it/170x150",
      slug: "the-office",
      categories: ["Comedy"],
      type: "Serie",
    },
  ];

  return (
    <FlatList
      data={contenidoItems}
      renderItem={({ item }) => (
        <Link
          href={ROUTES.DETAIL}
          style={{
            backgroundColor: "#403E43",
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