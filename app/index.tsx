import { Text, View } from "react-native";
import {useFonts} from "expo-font"
import Feather from '@expo/vector-icons/Feather';

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

      <View style={{flexDirection:"row", marginBottom:20}}>
        <Text style= {{fontSize:14, color:"white",fontFamily:"PixelFont",backgroundColor:"#6E59A5",borderColor:"#4A3D70", padding:10}}>Desafío del Ahorcado </Text>
        <Text style= {{fontSize:14, color:"white",fontFamily:"PixelFont", backgroundColor:"#5FD068",borderColor:"#4A3D70", padding:10}}>Pixel Reveal </Text>
      </View>
     
      <View style={{height:200, width:390, borderWidth:3, borderColor:"#4A3D70", marginBottom:20}}>
      </View>
      <View style={{height:200, width:390, borderWidth:3, borderColor:"#4A3D70", marginBottom:20}}>
      </View>
      <View style={{height:200, width:390, borderWidth:3, borderColor:"#4A3D70", marginBottom:20}}>
      </View>
    </View>
  );
}
