import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Hawa } from "../assets";
import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      //    headerTitle: "travel hello",
      headerShown: false,
    });
  }, []);
  // console.log(data);
  return (
    <SafeAreaView className="flex-1 bg-white relative mt-10">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image
            source={Hawa}
            className="w-full h-72 object-cover rounded-2xl"
          />

          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate("discover")}
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
            >
              <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>

            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
              <FontAwesome5 name="heartbeat" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            <View className="flex-row space-x-2 items-center">
              <Text className="text-[12px] font-bold text-gray-100">$$$$</Text>
              <Text className="text-[32px] font-bold text-gray-100">
                $10-$150
              </Text>
            </View>

            <View className="px-2 py-1 rounded-md bg-teal-100 justify-center items-center">
              <Text>Closed Now</Text>
            </View>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">
            {data?.text}
          </Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome5 name="map-marker" size={25} color="#8C9EA6" />
            <Text className="text-[#8C9EA6] text-[20px] font-bold">Jaipur</Text>
          </View>
        </View>

        <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          exercitationem neque sunt distinctio architecto possimus pariatur odit
          reiciendis, quae reprehenderit laborum officiis atque quis eveniet
          saepe? Suscipit numquam atque distinctio.
        </Text>

        <View className=" space-y-2 bg-gray-100 rounded-2xl px-4 py-2 mt-20">
          <View className="items-center flex-row justify-between">
            <FontAwesome name="phone" size={16} color="#428288" />
            <Text className="text-base">1234567890</Text>
          </View>
          <View className="items-center flex-row justify-between">
            <FontAwesome name="envelope" size={16} color="#428288" />
            <Text className="text-base">info.rajgov@gmail.com</Text>
          </View>
          <View className="items-center flex-row justify-between">
            <FontAwesome name="map-pin" size={16} color="#428288" />
            <Text className="text-base">Bakers Street,jaipur,rajasthan</Text>
          </View>
          <View className="mt-4 px-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12">
            <Text className="text-xl font-semibold uppercase tracking-wider text-gray-100">
              Book Now
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
