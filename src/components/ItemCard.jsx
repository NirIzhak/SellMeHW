import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SellMeContext } from "../context/SellMeContext";

export default function ItemCard({ item, navigation }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizes, setShowSizes] = useState(false);
  const [showProceedButton, setShowProceedButton] = useState(false);
  const {
    currentShirt,
    currentPants,
    currentShoes,
    setCurrentPants,
    setCurrentShirt,
    setCurrentShoes,
    setCurrentSet,
  } = useContext(SellMeContext);

  const toggleSizes = () => {
    setShowSizes(!showSizes);
  };

  const handleColorPress = (color) => {
    setSelectedColor(color);
    setSelectedSize(null);
    toggleSizes();
    setShowProceedButton(false);
  };

  const handleSizePress = (size) => {
    setSelectedSize(size);
    setShowProceedButton(true);
  };

  useEffect(() => {
    if (currentShoes && currentPants && currentShirt) {
      const newSet = {
        currentShoes,
        currentPants,
        currentShirt,
      };
      setCurrentSet(newSet);
    }
  }, [currentShoes, currentPants, currentShirt]);

  const handleProceedPress = () => {
    const selectedItem = { item, selectedColor, selectedSize };

    switch (item.type) {
      case "shoes":
        setCurrentShoes(selectedItem);
        break;
      case "pants":
        setCurrentPants(selectedItem);
        break;
      case "shirt":
        setCurrentShirt(selectedItem);
        break;
      default:
        break;
    }

    navigation.navigate("Home");
    setShowSizes(false);
    setShowProceedButton(false);
    setSelectedColor(null);
  };

  return (
    <View
      style={{
        backgroundColor: "whitesmoke",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: "85%",
        marginRight: "auto",
        marginLeft: "auto",
        margin: 15,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        {item.brand} - {item.name}
      </Text>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        {item.colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              marginRight: 10,
              backgroundColor: color,
              borderWidth: 2,
              borderColor: selectedColor === color ? "#000" : "transparent",
            }}
            onPress={() => handleColorPress(color)}
          />
        ))}
      </View>
      {showSizes && (
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Available Sizes:
          </Text>
          {item.sizes.map((size, index) => (
            <TouchableOpacity
              key={index}
              style={{
                borderWidth: 2,
                borderColor: selectedSize === size ? "#000" : "transparent",
                marginBottom: 5,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 5,
              }}
              onPress={() => handleSizePress(size)}
            >
              <Text style={{ fontSize: 14 }}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {showProceedButton && (
        <TouchableOpacity
          style={{
            backgroundColor: "#007BFF",
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
            marginTop: 10,
          }}
          onPress={handleProceedPress}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>בחירה</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
