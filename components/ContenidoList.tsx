import { FlatList, StyleSheet, View } from "react-native";
import { ContenidoCard } from "./ContenidoCard";
import { Link, useRouter } from "expo-router";
import { ROUTES } from "@/src/navigation/routes";
import { contenidosAudiovisuales } from "@/src/data/contenidosAudiovisuales";

type ContenidoListProps = {
  tipoId: number;
};

export function ContenidoList({tipoId} : ContenidoListProps) {
  const router = useRouter();

  const filtrado = contenidosAudiovisuales.filter(
    (contenido) => contenido.tipoId === tipoId
  );

  return (
    <FlatList
      data={filtrado}
      renderItem={({ item }) => (
        <Link
          href={{
            pathname: ROUTES.DETAIL,
            params: { slug: item.nombre },
          }}
          style={styles.cardLink}
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
  },
  cardLink: {
    // sin padding ni margen vertical
  },
});
