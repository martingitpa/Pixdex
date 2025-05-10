import { ROUTES } from "@/src/navigation/routes";
import { Link,useRouter, useNavigation } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import colors from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { contenidosAudiovisuales } from "@/src/data/contenidosAudiovisuales";
import { generosContenidoAudiovisual } from "@/src/data/generosContenidoAudiovisual";
import { tiposContenidoAudiovisual } from "@/src/data/tiposContenidoAudiovisual";

export default function ContenidoSlugRoute() {
   const [fontsLoaded] = useFonts({
      'PixelFont': require("@/assets/fonts/PressStart2P-Regular.ttf"), 
    });
  const { slug } = useLocalSearchParams(); // ← Accede a /detail/LOQUESEA
  const router = useRouter();
  const navigation = useNavigation();

  const handleBack = () => {
    if (navigation.canGoBack()) {
      router.back();
    } else {
      router.replace("/"); 
    }
  };

  const contenido = contenidosAudiovisuales.find((item) => item.nombre === slug);

  const generos = contenido?.generos.map(
    (id) => generosContenidoAudiovisual.find((g) => g.id === id)?.nombre
  );

  const tipo = tiposContenidoAudiovisual.find((t) => t.id === contenido?.tipoId)?.singular;

  return (
    <View style={styles.container}>
        <View style ={{alignSelf:"flex-start", marginLeft:"-25%"}}>
          <TouchableOpacity onPress={handleBack}>
            <Text style={styles.botonBack}>
              <Ionicons name="arrow-back" size={14} color="white" /> BACK
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.borde}>
          <View style={styles.imagePlaceholder}>
            <Text style={{ color: "#000", textAlign: "center" }}>{slug}</Text>
          </View>
        
        <Text style={styles.slugTitle}>{contenido?.nombre}</Text>
        
        <View style={styles.tag}>
          <Text style={styles.tagText}>{tipo}</Text>
        </View>

        <Text style={styles.description}>{contenido?.descripcion}</Text>
        
        <Text style={styles.genresTitle}>Genres</Text>
        <View style={styles.genreList}>
          {generos?.map((genero, index) => (
            <Text key={index} style={styles.genre}>{genero}</Text>
          ))}
        </View>

        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.fondo,
  },
  title: {
    color: "#fff",
    fontSize: 24,
  },
  borde:{
    alignSelf:"center",
    height:700, 
    width:390, 
    borderWidth:3, 
    borderColor:"#4A3D70", 
    marginTop:30
  },
  botonBack:{
    fontSize: 12,
    color: "white",
    fontFamily: "PixelFont",
    padding: 5,
    backgroundColor: "#6E59A5",
    marginLeft: 100,
    borderWidth: 3,
    borderTopColor: "#9B87F5",
    borderBottomColor: "#4A3D70",
    borderLeftColor: "#9B87F5",
    borderRightColor: "#4A3D70",
  },
  imagePlaceholder: {
    height: "60%",
    width: 340,
    marginLeft:20,
    marginTop:20,
    backgroundColor: "#BEBEBE",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  slugTitle: {
    fontSize: 20,
    color: "#9B87F5",
    fontFamily: "PixelFont",
    marginBottom: 10,
    lineHeight: 24,
    marginLeft:20,
  },
  tag: {
    backgroundColor: "#403E43",
    padding:5,
    width:35,
    alignSelf: "flex-start",
    marginLeft:20,
    marginBottom: 15,
  },
  tagText: {
    color: "#fff",
    fontSize: 10,
    alignSelf:"center"
  },
  description: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
    marginLeft:20,
    marginRight:20,
  },
  genresTitle: {
    color: "#5FD068",
    fontSize: 14,
    fontFamily: "PixelFont",
    marginBottom: 10,
    marginLeft:20,
  },
  genreList: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    marginLeft:20,
  },
  genre: {
    backgroundColor: "#403E43",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 10,
  },
});