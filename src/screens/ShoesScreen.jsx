import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React, { useContext } from "react";
import { SellMeContext } from "../context/SellMeContext";
import ItemCard from "../components/ItemCard";

export default function ShoesScreen() {
  const { allShoes } = useContext(SellMeContext);
  console.log(allShoes);

  return (
    <SafeAreaView style={styles.container}>
      <Text>ShoesScreen</Text>
      <Text>Items = {allShoes.length}</Text>
      <FlatList
      data={allShoes}
      renderItem={({ item }) => <ItemCard item={item} />}
      keyExtractor={(item, index) => index.toString()}
      style={{ marginTop: 30 }}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
display: 'flex'
  },
});
