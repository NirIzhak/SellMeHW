import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ItemCard({ item }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizes, setShowSizes] = useState(false);

  const toggleSizes = () => {
    setShowSizes(!showSizes);
  };

  const handleColorPress = (color) => {
    setSelectedColor(color);
    setSelectedSize(null);
    toggleSizes();
  };

  const handleSizePress = (size) => {
    setSelectedSize(size);
  };

  return (
    <View style={{ 
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: '85%',
      marginRight: 'auto',
      marginLeft: 'auto',
      margin: 15
    }}>
      <Text style={{ 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 10,
      }}>{item.brand} - {item.name}</Text>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
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
              borderColor: selectedColor === color ? '#000' : 'transparent'
            }}
            onPress={() => handleColorPress(color)}
          />
        ))}
      </View>
      {showSizes && (
        <View>
          <Text style={{ 
            fontSize: 16, 
            fontWeight: 'bold', 
            marginBottom: 10,
          }}>Available Sizes:</Text>
          {item.sizes.map((size, index) => (
            <TouchableOpacity
              key={index}
              style={{
                borderWidth: 2,
                borderColor: selectedSize === size ? '#000' : 'transparent',
                marginBottom: 5,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 5
              }}
              onPress={() => handleSizePress(size)}
            >
              <Text style={{ fontSize: 14 }}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
