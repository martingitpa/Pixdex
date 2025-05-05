import { FlatList, StyleSheet } from "react-native";
import { ContenidoCard } from "./ContenidoCard";
import { Link } from "expo-router";
import { ROUTES } from "@/src/navigation/routes";

export function ContenidoList() {
  const coffeeItems = [
    {
      name: "Flat White",
      category: "Espresso",
      prettyPrice: "$ 3,53",
      rate: 4.8,
      image: "https://place-hold.it/170x150",
    },
  ];

  return (
    <FlatList
      data={coffeeItems}
      renderItem={({ item }) => (
        <Link
          href={ROUTES.CONTENIDO}
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            width: "45%",
            padding: 10,
            gap: 10,
          }}
        >
          <ContenidoCard {...item} />
        </Link>
      )}
      keyExtractor={(item) => item.name}
      numColumns={2}
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