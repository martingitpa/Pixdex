import { StyleSheet,Text, View } from "react-native";
import {useFonts} from "expo-font"
import Feather from '@expo/vector-icons/Feather';
import { ContenidoCard } from "@/src/screens/components/ContenidoCard";
import { ContenidoList} from "@/src/screens/components/ContenidoList";

export default function Index() {
  const [fontsLoaded] = useFonts({
    'PixelFont': require('../assets/fonts/PressStart2P-Regular.ttf'), 
  });
  
  
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor:"#1A1F2C",
        paddingTop:20,
      }}
    >

      <View  style={{ flexDirection:"row", marginBottom:20}}>
        <Text style ={{fontSize:18,color:"#635193", fontWeight:"bold", fontFamily:"PixelFont"}}> Pixdex </Text>
        <Text style ={{
          fontSize:12,
          color:"white", 
          fontFamily:"PixelFont", 
          padding:5, 
          backgroundColor:"#6E59A5", 
          marginLeft:100,
          borderWidth:3,
          borderTopColor:"#9B87F5",
          borderBottomColor:"#4A3D70",
          borderLeftColor:"#9B87F5",
          borderRightColor:"#4A3D70",
        }}
        > 
          <Feather name="settings" size={14} color="white" /> FILTRAR </Text>
      </View>

      <View style={{ flexDirection: "row", gap: 20, marginBottom: 20 }}>
        
        {/* Tarjeta 1 */}
        <View style={{
          backgroundColor: "#6E59A5",
          borderColor: "#4A3D70",
          borderWidth: 2,
          padding: 10,
          width: 180,
          height: 85,
          justifyContent: "space-between"
        }}>
          <Text style={{ color: "white", fontSize: 14, fontFamily: "PixelFont" }}>
            Desafío del Ahorcado
          </Text>
          <Text style={{ color: "white", fontSize: 8}}>
            Adivina los títulos letra por letra. ¿Cuántos puedes identificar?
          </Text>
          <Text style={{
            color: "white",
            fontSize: 8,
            fontFamily: "PixelFont",
            alignSelf: "flex-end"
          }}>
            Jugar
          </Text>
        </View>

        {/* Tarjeta 2 */}
        <View style={{
          backgroundColor: "#5FD068",
          borderColor: "#4A3D70",
          borderWidth: 2,
          padding: 10,
          width: 180,
          height: 85,
          justifyContent: "space-between"
        }}>
          <Text style={{ color: "white", fontSize: 14, fontFamily: "PixelFont" }}>
            Pixel Reveal
          </Text>
          <Text style={{ color: "white", fontSize: 8}}>
            Identifica títulos desde imágenes pixeladas. ¡Pon a prueba tu memoria visual!
          </Text>
          <Text style={{
            color: "white",
            fontSize: 8,
            fontFamily: "PixelFont",
            alignSelf: "flex-end"
          }}>
            Jugar
          </Text>
        </View>
      </View>
     
      <View style={{height:200, width:390, borderWidth:3, borderColor:"#403E43", marginBottom:20, position: "relative"}}>
        {/* Etiqueta superior izquierda */}
        <View style={{
          position: "absolute",
          top: -10,
          left: 10,
          backgroundColor: "#6E59A5",
          paddingHorizontal: 10,
          paddingVertical: 2,
          borderWidth:2,
          borderColor:"#9B87F5",
          zIndex: 1,
        }}>
          <Text style={{ color: "white", fontFamily:"PixelFont", fontSize: 7 }}>SERIES</Text>
        </View>

        <View style={styles.separator} />
        <ContenidoList />
      </View>

      <View style={{height:200, width:390, borderWidth:3, borderColor:"#403E43", marginBottom:20, position: "relative"}}>
        {/* Etiqueta superior izquierda */}
        <View style={{
          position: "absolute",
          top: -10,
          left: 10,
          backgroundColor: "#6E59A5", 
          paddingHorizontal: 10,
          paddingVertical: 2,
          borderWidth:2,
          borderColor:"#9B87F5",
          zIndex: 1,
        }}>
          <Text style={{ color: "white", fontFamily:"PixelFont", fontSize: 7 }}>PELÍCULAS</Text>
        </View>

        <View style={styles.separator} />
          <ContenidoList />
      </View>
      
      <View style={{height:200, width:390, borderWidth:3, borderColor:"#403E43", marginBottom:20, position: "relative"}}>
        {/* Etiqueta superior izquierda */}
        <View style={{
          position: "absolute",
          top: -10,
          left: 10,
          backgroundColor: "#6E59A5", 
          paddingHorizontal: 10,
          paddingVertical: 2,
          borderWidth:2,
          borderColor:"#9B87F5",
          zIndex: 1,
        }}>
          <Text style={{ color: "white", fontFamily:"PixelFont", fontSize: 7 }}>ANIME</Text>
        </View>

        <View style={styles.separator} />
          <ContenidoList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1},
  separator: { height: 20 },
});