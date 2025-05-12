import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

type CajaIndicadoraAccionesProps = {
  text: string;
};

function CajaIndicadoraAcciones({ text }: CajaIndicadoraAccionesProps) {
  return (
    <View style={styles.button}>
      <Feather name="settings" size={14} color="white" style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6E59A5",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 2,
    borderTopColor: "#9B87F5",
    borderBottomColor: "#4A3D70",
    borderLeftColor: "#9B87F5",
    borderRightColor: "#4A3D70",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 10,
    color: "white",
    fontFamily: "PixelFont",
    paddingTop: 5,
  },
});

export { CajaIndicadoraAcciones };
