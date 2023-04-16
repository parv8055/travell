import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const MenuContainer = ({ src, title }) => {
  return (
    <TouchableOpacity className='items-center justify-center space-y-2'>
      <View className="w-24 h-24 shadow-sm rounded-full items-center justify-center">
        <Image source={src} className="w-full h-full object-contain" />
      </View>
      <Text className="text-[#00BCC9] text-l font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
