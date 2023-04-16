import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Hawa } from "../assets";
import { Attractions } from "../assets";
import { Restaurants } from "../assets";
import { Hotels } from "../assets";
import { NotFound } from "../assets";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";
import { getPlacesData } from "../api";

const Discover = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      //    headerTitle: "travel hello",
      headerShown: false,
    });
  }, []);
  const [loading, setLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [text, onChangeText] = useState("");
  useEffect(() => {
    setLoading(true);
    getPlacesData().then(({ Typeahead_autocomplete }) => {
      setMainData(Typeahead_autocomplete.results);
      setInterval(() => {
        setLoading(false);
      }, 2000);
    });
  }, []);

  // console.log(text)
  console.log(mainData);
  return (
    <SafeAreaView className="flex-1 relative mt-10 bg-white">
      <View className="px-6 flex-row justify-between items-center">
        <View>
          <Text className="text-4xl text-[#3C6072] font-bold">Discover</Text>
          <Text className="text-3xl text-[#527283]">the beauty today</Text>
        </View>

        <View className="w-12 h-12 bg-gray-100 rounded-md items-center justify-center">
          <Image
            source={Avatar}
            className="h-full w-full rounded-md object-cover"
          />
        </View>
      </View>
      <View
        className="flex-row items-center bg-white mx-4 mt-4 rounded-xl
     py-1 px-4 shadow-lg border border-gray-200"
      >
        {/* <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "AIzaSyDWpuvw2apN-XgX3gmrzsHrZgr1AG4sCxQ",
            language: "en",
          }}
        /> */}
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="Search"
        />
      </View>
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B6468" />
        </View>
      ) : (
        <ScrollView>
          <View className="px-6 mt-8 flex-row items-center justify-evenly">
            <MenuContainer src={Hotels} title="Hotels" />
            <MenuContainer src={Attractions} title="Attractions" />
            <MenuContainer src={Restaurants} title="Restaurants" />
          </View>
          <View className="flex-row justify-between items-center px-4 mt-8">
            <Text className="text-2xl text-[#3C6072] font-bold">Top Tips</Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
              <Text className="text-l text-[#A0C4C7] font-bold">Explore</Text>
              <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
            </TouchableOpacity>
          </View>
          <View className="px-4 mt-8 flex-row justify-evenly items-center flex-wrap">
            {mainData?.length > 0 ? (
              <>
                {mainData?.map((data, i) => (
                  <ItemCardContainer
                    key={i}
                    src={Hawa}
                    title={data?.text}
                    location="jaipur"
                    type={data?.buCategory}
                    data={data}
                  />
                ))}
              </>
            ) : (
              <>
                <View className="w-full h-[400px] items-center space-y-8 justify-center">
                  <Image source={NotFound} className="w-24 h-24 object-cover" />
                  <Text className="text-xl text-[#428288] font-semibold">
                    Opps...No Data Found
                  </Text>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
