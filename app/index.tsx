import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

export default function index() {
  return (
    <View className="bg-light-bg flex-1 justify-between p-16">
     <View className="flex-1 justify-start items-start flex-row">
       <Image
          source={require("@/assets/images/hero.png")}
          className="aspect-[492/560] flex-1"
          resizeMode="contain"
        />
     </View>
     <View className="flex-1 pt-44 gap-2">
      <Text className="text-5xl font-bold text-light-bgOpposite mb-8">Manage your daily tasks</Text>
      <Text className="text-xl text-light-bgOpposite mb-10">Team and project management with solution providing App</Text>

      <View className=" relative">
        <View
        
         className=" w-14 h-14 bg-white rounded-full" style={{
          shadowColor:"#11111111",
          elevation: 1,
          shadowOffset: {
            height: 8,
            width: 8
          },
          shadowOpacity: 1,
          shadowRadius: 20
        }}></View>
        <Text onPress={()=>router.push("/home")} className="text-2xl font-semibold text-light-bgOpposite absolute top-4 left-4">Get started</Text>
      </View>

     </View>
     
    </View>
  );
}
