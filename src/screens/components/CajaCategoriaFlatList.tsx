import React from "react";
import { View, Text } from "react-native";
import colors from "@/src/constants/colors";

type CajaCategoriaFlatListProps = {
  text: string;
  children?: React.ReactNode;
};

function CajaCategoriaFlatList({ text, children }: CajaCategoriaFlatListProps) {
    return (
      <View>
        <View
          style={{
            height: 200,
            width: 390,
            borderWidth: 3,
            borderColor: colors.grisOscuro,
            marginBottom: 20,
            position: "relative",
          }}
        >
          <View style={{ position: "relative" }}>
            <View
              style={{
                position: "absolute",
                top: -10,
                left: 10,
                backgroundColor: colors.purpura,
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderWidth: 2,
                borderColor: colors.purpuraClaro,
                zIndex: 1,
              }}
            >
              <Text
                style={{ color: "white", fontFamily: "PixelFont", fontSize: 7 }}
              >
                {text}
              </Text>
            </View>
            {children}
          </View>
        </View>
      </View>
    );
}

export { CajaCategoriaFlatList };