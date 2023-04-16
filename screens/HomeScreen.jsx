import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      //    headerTitle: "travel hello",
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 relative mt-10 bg-white">
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>

        <Text className="text-3xl text-[#2A2B4B] font-semibold">Travel</Text>
      </View>
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-4xl text-[#3C6072]">Enjoy the trip with</Text>
        <Text className="text-3xl text-[#00BCC9] font-bold">Good Moments</Text>
        <Text className="text-xs text-[#3C6072]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          mollitia in repellat ipsam dolores eius nemo quo quasi sint enim
          consequuntur,
        </Text>
      </View>
      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>
      <View className="flex-1 justify-center items-center">
        <Image 
        // source={{
        //     uri:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
        // }}
        source={HeroImage}
        className="w-full h-full object-cover mt-20"

        />
       <View className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-b-0 border-[#00BCC9] rounded-full items-center justify-center ">
         <TouchableOpacity onPress={()=>navigation.navigate('discover')}>
         <Animatable.View animation='pulse' easing='ease-in-out' iterationCount={'infinite'}  className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
            <Text className="text-gray-50 text-[40px] font-semibold">Go</Text>
          </Animatable.View>
         </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
