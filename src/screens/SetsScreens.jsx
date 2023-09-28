import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { SellMeContext } from "../context/SellMeContext";
import SavedSet from "../components/SavedSet";

export default function SetsScreens({ navigation }) {
  const { allSets } = useContext(SellMeContext);
  console.log(allSets);
  return (
    <SafeAreaView>
      <Text
        style={{
          textAlign: "center",
          marginTop: 15,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        סטים שנשמרו - סה"כ {allSets.length}{" "}
      </Text>

      {allSets.length != 0 ? (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={{ marginTop: 10 }}
          >
            <Text
              style={{
                textAlign: "center",
                borderColor: "black",
                borderWidth: 1,
                width: "30%",
                marginLeft: "auto",
                marginRight: "auto",
                padding: 5,
              }}
            >
              בחר סט חדש
            </Text>
          </TouchableOpacity>
          <FlatList
            data={allSets}
            renderItem={({ item }) => (
              <SavedSet item={item} navigation={navigation} />
            )}
            keyExtractor={(item, index) => index.toString()}
            style={{ marginTop: 30 }}
          />
        </View>
      ) : (
        <>
          <Text style={{ textAlign: "center", marginTop: 100, fontSize: 26 }}>
            לא הרכבת עדיין אף סט :(
          </Text>
          <TouchableOpacity
            style={{ marginTop: 100 }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text
              style={{
                textAlign: "center",
                borderColor: "black",
                borderWidth: 1,
                width: "50%",
                marginLeft: "auto",
                marginRight: "auto",
                padding: 5,
                fontSize: 32,
                borderRadius: 3,
              }}
            >
              לחץ כאן להרכבה
            </Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}
