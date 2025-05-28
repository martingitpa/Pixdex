import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import colors from "@/src/constants/colors";

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
    backgroundColor: colors.fondo,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 2,
    borderTopColor: colors.purpuraClaro,
    borderBottomColor: colors.purpuraOscuro,
    borderLeftColor: colors.purpuraClaro,
    borderRightColor: colors.purpuraOscuro,
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
