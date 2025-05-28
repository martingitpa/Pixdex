import { ScrollView, StyleSheet, View, Text } from "react-native";
import { ContenidoList } from "@/components/ContenidoList";
import { CajaJuegos } from "@/components/CajaJuegos";
import { CajaCategoriaFlatList } from "@/components/CajaCategoriaFlatList";
import { CajaIndicadoraAcciones } from "@/components/CajaIndicadoraAcciones";
import colors from "@/src/constants/colors";

export function HomeScreen() {
  
  return (
    <ScrollView style={[styles.screenContainer]}>
      <View style={styles.mainContent}>
        <View style={styles.headerRow}>
          <Text style={styles.logoText}> Pixdex </Text>
          <CajaIndicadoraAcciones text="FILTRAR"></CajaIndicadoraAcciones>
        </View>

        <View style={styles.gamesRow}>
          {/* Tarjeta 1 */}
          <View style={styles.gameBox}>
            <CajaJuegos
              backgroundColor={colors.purpura}
              text="Desafío del Ahorcado"
              descripcion="Adivina los títulos letra por letra. ¿Cuántos puedes identificar?"
            ></CajaJuegos>
          </View>

          {/* Tarjeta 2 */}
          <View style={styles.gameBox}>
            <CajaJuegos
              backgroundColor={colors.verde}
              text="Pixel Reveal"
              descripcion="Identifica títulos desde imágenes pixeladas. ¡Pon a prueba tu memoria visual!"
            ></CajaJuegos>
          </View>
        </View>
      </View>

      <CajaCategoriaFlatList text="SERIES">
        <ContenidoList tipoId={1}/>
      </CajaCategoriaFlatList>
      <CajaCategoriaFlatList text="PELICULAS">
        <ContenidoList tipoId={2}/>
      </CajaCategoriaFlatList>
      <CajaCategoriaFlatList text="ANIME">
        <ContenidoList tipoId={3}/>
      </CajaCategoriaFlatList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1},
  mainContent: {
    padding: 20,
    gap: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoText: {
    fontSize: 24,
    color: colors.purpura,
    fontFamily: "PixelFont",
    fontWeight: "bold",
  },
  gamesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  gameBox: {
    flex: 1,
  },
});