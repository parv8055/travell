import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemCardContainer = ({ src, location, title ,type,data}) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      //    headerTitle: "travel hello",
      headerShown: false,
    });
  }, []);
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('itemscreen',{param:data})}
      className="rounded-md border
     border-gray-300 space-y-2
    px-3 py-2 bg-white w-44 my-2"
    >
      <Image
        source={src}
        className="w-full h-40 rounded object-cover"
      />
      <Text className='text-[#428288] text-base font-bold'>
        {title?.length > 14 ? `${title.slice(0,14)}..`:title}
      </Text>
      <View className='flex-row items-center space-x-2'>
<FontAwesome name='map-marker' size={20} color='black' />
      <Text className='text-[#428288] text-base font-bold'>
        {location?.length > 18 ? `${location.slice(0,18)}..`:location}
      </Text>
      </View>
      <Text className='text-[#428288] text-xs font-bold'>
        {type?.length > 18 ? `${type.slice(0,18)}..`:type}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
