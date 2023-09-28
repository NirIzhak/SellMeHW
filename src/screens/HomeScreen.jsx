import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SellMeContext } from "../context/SellMeContext";
import Modal from "react-native-modal";


const HomeScreen = ({ navigation }) => {
  const {
    currentShoes,
    currentPants,
    currentShirt,
    currentSet,
    setAllSets,
    allSets,
    setCurrentPants,
    setCurrentShirt,
    setCurrentShoes,
  } = useContext(SellMeContext);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          marginTop: 15,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Application
      </Text>
      <Text style={styles.status}>
        סטטוס:{" "}
        {(currentPants ? 1 : 0) +
          (currentShirt ? 1 : 0) +
          (currentShoes ? 1 : 0)}
        /3
      </Text>
      <Text
        style={{
          backgroundColor: currentShoes ? "green" : "red",
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        נעליים: {currentShoes ? "V" : "X"}
      </Text>
      <Text
        style={{
          backgroundColor: currentPants ? "green" : "red",
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        מכנסיים: {currentPants ? "V" : "X"}
      </Text>
      <Text
        style={{
          backgroundColor: currentShirt ? "green" : "red",
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        חולצה: {currentShirt ? "V" : "X"}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={{ width: "30%" }}
          onPress={() => navigation.navigate("Shoes")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 3,
            }}
          >
            בחירת נעל
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "30%" }}
          onPress={() => navigation.navigate("Pants")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 3,
            }}
          >
            בחירת מכנסיים
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "30%" }}
          onPress={() => navigation.navigate("Shirts")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 3,
            }}
          >
            בחירת חולצה
          </Text>
        </TouchableOpacity>
      </View>
      {currentPants && currentShirt && currentShoes && (
        <>
        <TouchableOpacity
          style={{ marginTop: 150 }}
          onPress={() => {
            setModalVisible(true); // Open the modal
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 26,
              borderColor: "green",
              borderWidth: 1,
              borderRadius: 3,
              padding: 10,
            }}
          >
            שמור סט
          </Text>
        </TouchableOpacity>
        <Modal style={{backgroundColor: 'whitesmoke', borderRadius: 9, marginTop: 145, marginBottom: 145}} isVisible={isModalVisible}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{marginTop: 15}}>Sheos</Text>
        <Text>
          {currentShoes.item.name} - {currentShoes.item.brand}
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Selected Color:</Text>
          <Text
            style={{
              backgroundColor: currentShoes.selectedColor,
              width: "10%",
            }}
          ></Text>
        </View>
        <Text>Size: {currentShoes.selectedSize}</Text>
        <Text style={{marginTop: 15}}>Pants</Text>
        <Text>
          {currentPants.item.name} - {currentPants.item.brand}
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Selected Color:</Text>
          <Text
            style={{
              backgroundColor: currentPants.selectedColor,
              width: "10%",
            }}
          ></Text>
        </View>
        <Text>Size: {currentPants.selectedSize}</Text>
        <Text style={{marginTop: 15}}>Shirt</Text>
        <Text>
          {currentShirt.item.name} - {currentShirt.item.brand}
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Selected Color:</Text>
          <Text
            style={{
              backgroundColor: currentShirt.selectedColor,
              width: "10%",
            }}
          ></Text>
        </View>
        <Text>Size: {currentShirt.selectedSize}</Text>


          <View style={{display: 'flex', flexDirection: 'row', marginTop: 200, justifyContent:'space-evenly', width:'100%'}}>
          <Button title="שמור סט" onPress={() => {
            allSets.push(currentSet);
            setCurrentShoes(null);
            setCurrentPants(null);
            setCurrentShirt(null);
            navigation.navigate("Sets");
            toggleModal(); 
          }} />
          <Button title="ביטול" onPress={toggleModal} />
          <Button title="העתק" onPress={()=>{console.log("dsa")}} />
          </View>
        </View>
      </Modal>
</>
      )}

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  status: {
    fontSize: 24,
    marginBottom: 35,
    marginTop: 35,
  },
  progress: {},
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 15,
  },
});

export default HomeScreen;
