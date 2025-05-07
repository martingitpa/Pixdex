import React from "react";
import { View, Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';

type CajaIndicadoraAccionesProps = {
    text: string;
}

function CajaIndicadoraAcciones({ text }: CajaIndicadoraAccionesProps){
    return (
        <Text
          style={{
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
          }}
        >
          <Feather name="settings" size={14} color="white" /> {text}
        </Text>
    );
}

export { CajaIndicadoraAcciones };