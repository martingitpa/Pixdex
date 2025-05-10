import { ScrollView, StyleSheet, View, Text } from "react-native";
import { ContenidoList} from "@/src/screens/components/ContenidoList";
import { CajaJuegos } from "@/src/screens/components/CajaJuegos";
import { CajaCategoriaFlatList } from "@/src/screens/components/CajaCategoriaFlatList";
import { CajaIndicadoraAcciones } from "@/src/screens/components/CajaIndicadoraAcciones";
import colors from "@/src/constants/colors";
import { useFonts } from "expo-font";

import { useRouter } from 'expo-router';

export function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'PixelFont': require("@/assets/fonts/PressStart2P-Regular.ttf"), 
  });
  
  return (
    <ScrollView
      style={[styles.screenContainer, { backgroundColor: colors.fondo }]}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 18,
              color: colors.purpura,
              fontWeight: "bold",
              fontFamily: "PixelFont",
            }}
          >
            {" "}
            Pixdex{" "}
          </Text>
          <CajaIndicadoraAcciones text="FILTRAR"></CajaIndicadoraAcciones>
        </View>

        <View style={{ flexDirection: "row", gap: 20, marginBottom: 20 }}>
          {/* Tarjeta 1 */}
          <CajaJuegos
            backgroundColor={colors.purpura}
            text="Desafío del Ahorcado"
            descripcion="Adivina los títulos letra por letra. ¿Cuántos puedes identificar?"
          ></CajaJuegos>

          {/* Tarjeta 2 */}
          <CajaJuegos
            backgroundColor={colors.verde}
            text="Pixel Reveal"
            descripcion="Identifica títulos desde imágenes pixeladas. ¡Pon a prueba tu memoria visual!"
          ></CajaJuegos>
        </View>

        <CajaCategoriaFlatList text="SERIES">
          <View style={styles.separator} />
          <ContenidoList />
        </CajaCategoriaFlatList>

        <CajaCategoriaFlatList text="PELICULAS">
          <View style={styles.separator} />
          <ContenidoList />
        </CajaCategoriaFlatList>

        <CajaCategoriaFlatList text="ANIME">
          <View style={styles.separator} />
          <ContenidoList />
        </CajaCategoriaFlatList>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1},
  separator: { height: 20 },
});