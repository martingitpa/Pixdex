import { FlatList, StyleSheet } from "react-native";
import { ContenidoCard } from "./ContenidoCard";
import { Link } from "expo-router";
import { ROUTES } from "@/src/navigation/routes";
import colors from "@/src/constants/colors";

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
            backgroundColor:   colors.gris,
            width: "30%",
            padding: 10,
            gap: 10,
            borderWidth: 1,
            borderRightColor:  colors.grisClaro,
            borderBottomColor: colors.grisClaro,
            borderTopColor:    colors.grisOscuro,
            borderLeftColor:   colors.grisOscuro,
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