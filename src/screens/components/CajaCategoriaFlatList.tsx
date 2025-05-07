import React from "react";
import { View, Text } from "react-native";

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
            borderColor: "#403E43",
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
                backgroundColor: "#6E59A5",
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderWidth: 2,
                borderColor: "#9B87F5",
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