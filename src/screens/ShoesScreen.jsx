import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React, { useContext } from "react";
import { SellMeContext } from "../context/SellMeContext";
import ItemCard from "../components/ItemCard";

export default function ShoesScreen({ navigation }) {
  const { allShoes } = useContext(SellMeContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text  style={{
          textAlign: "center",
          marginTop: 15,
          fontSize: 30,
          fontWeight: "bold",
        }}>נעליים</Text>
      <Text style={{
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 20
      }}>פריטים זמינים = {allShoes.length}</Text>
      <FlatList
        data={allShoes}
        renderItem={({ item }) => (
          <ItemCard item={item} navigation={navigation} />
        )}
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
    display: "flex",
  },
});
