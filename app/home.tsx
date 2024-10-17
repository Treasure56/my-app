import { View, Text, Image } from "react-native";
import React from "react";
import { Feather, FontAwesome5, FontAwesome6, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import { router } from "expo-router";
import Card from "@/components/Card";
import { cls } from "@/utils/cls";

export default function Home() {
  return (
    <View className="bg-light-bgOpposite flex-1">
      <View className=" flex justify-between items-center flex-row pt-12 mx-4">
        <FontAwesome6 name="bars-staggered" size={24} color="#ffff" />
        <Image
          source={require("@/assets/images/profile1.jpeg")}
          className={`${cls.image.avatarClass}`}
        />
      </View>
      <View className="mx-4 pt-12">
        <Text className=" text-3xl text-white">Hi Ghulam</Text>
        <Text className="text-white">6 Tasks are pending</Text>

        <View className=" bg-light-primary rounded-lg p-4 mt-9">
          <View className=" gap-3">
            <View>
              <Text className="text-white text-xl">Mobile App Design</Text>
              <Text className="text-white text-sm">Mike and anita</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <View className=" relative">
                <Image
                  source={require("@/assets/images/profile1.jpeg")}
                  className={`${cls.image.avatarClass}`}
                />
                <Image
                  source={require("@/assets/images/profile2.jpeg")}
                  className={`${cls.image.avatarClass} absolute top-0 translate-x-8`}
                />
              </View>
              <Text className="text-white mt-4 text-sm">Now</Text>
            </View>
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-9">
          <Text className="text-white font-bold text-xl">
            Monthly Review
          </Text>
          {/* <Text className="w-10 h-10 rounded-full bg-light-primary items-center justify-center flex"> */}
            <Feather className="mt-4" name="archive" size={18} color="white" />
          {/* </Text> */}
        </View>

        <View className="pt-11  flex-row justify-around items-center">
            <View className="gap-4 flex-1">
               <Card title="22" subtitle="Done" className="h-44" />
                <Card title="10" subtitle="Ongoing" className="h-32" />
            </View>
            <View className="px-2"/>
            <View className="gap-4 flex-1">
                <Card title="7" subtitle="In progress" className="h-32"/>
                <Card title="12" subtitle="Waiting for review" className="h-44"/>
            </View>

        </View>

        <View className="flex-row mt-28 justify-around">
        <MaterialCommunityIcons onPress={() => router.back()} name="home-account" size={30} color="white" />
        <FontAwesome5 onPress={() => router.push("/task")} name="file-contract" size={24} color="white" />
        <FontAwesome6 name="user-large" size={24} color="white" />
        <MaterialIcons name="notifications" size={24} color="white" />
        </View>
      </View>
    </View>
  );
}
