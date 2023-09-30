import React, { useContext, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList, TextInput } from "react-native";
import { SellMeContext } from "../context/SellMeContext";
import ItemCard from "../components/ItemCard";

export default function ShirtsScreen({ navigation }) {
  const { allShirts } = useContext(SellMeContext);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredShirts = allShirts.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          marginTop: 15,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        חולצות
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "500",
          fontSize: 20,
        }}
      >
        פריטים זמינים = {filteredShirts.length}
      </Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredShirts}
        renderItem={({ item }) => (
          <ItemCard item={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
  itemContainer: {
    display: "flex",
  },
});
