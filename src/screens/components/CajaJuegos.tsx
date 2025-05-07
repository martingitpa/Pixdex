import React from "react";
import { View, Text } from "react-native";

type CajaJuegosProps = {
  backgroundColor: string;
  text: string;
  descripcion: string;
};

function CajaJuegos({ backgroundColor, text, descripcion }: CajaJuegosProps) {
  return (
    <View>
      <View
        style={{
          backgroundColor: backgroundColor,
          borderColor: "#4A3D70",
          borderWidth: 2,
          padding: 10,
          width: 180,
          height: 85,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "white",
            fontFamily: "PixelFont",
          }}
        >
          {text}
        </Text>
        <Text style={{ color: "white", fontSize: 8 }}>{descripcion}</Text>
        <Text
          style={{
            color: "white",
            fontSize: 8,
            fontFamily: "PixelFont",
            alignSelf: "flex-end",
          }}
        >
          Jugar
        </Text>
      </View>
    </View>
  );
}

export { CajaJuegos };