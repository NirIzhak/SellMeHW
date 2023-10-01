import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

export default function SavedSet({ item }) {
  return (
    <SafeAreaView>
      <View
        style={{
          borderColor: "black",
          width: "90%",
          marginRight: "auto",
          marginLeft: "auto",
          borderWidth: 2,
          padding: 10,
          margin: 15,
          borderRadius: 8,
        }}
      >
        <Text style={styles.miniTitle}>Sheos</Text>
        <Text>
          {item.currentShoes.item.name} - {item.currentShoes.item.brand}
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Selected Color:</Text>
          <Text
            style={{
              backgroundColor: item.currentShoes.selectedColor,
              width: "10%",
            }}
          ></Text>
        </View>
        <Text>Size: {item.currentShoes.selectedSize}</Text>

        <Text style={styles.miniTitle}>Pants</Text>
        <Text>
          {item.currentPants.item.name} - {item.currentPants.item.brand}
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Selected Color:</Text>
          <Text
            style={{
              backgroundColor: item.currentPants.selectedColor,
              width: "10%",
            }}
          ></Text>
        </View>
        <Text>Size: {item.currentPants.selectedSize}</Text>

        <Text style={styles.miniTitle}>Shirt</Text>
        <Text>
          {item.currentShirt.item.name} - {item.currentShirt.item.brand}
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Selected Color:</Text>
          <Text
            style={{
              backgroundColor: item.currentShirt.selectedColor,
              width: "10%",
            }}
          ></Text>
        </View>
        <Text>Size: {item.currentShirt.selectedSize}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  miniTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
    marginTop: 5,
    textDecorationLine: "underline",
  },
  itemContainer: {
    display: "flex",
  },
});
