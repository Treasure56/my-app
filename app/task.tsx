import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { cls } from "@/utils/cls";
import Calender from "@/components/Calender";
import TaskCard from "@/components/TaskCard";

export default function Task() {
  return (
    <>
      <StatusBar style="dark" />
      <View className="bg-light-bg flex-1">
        <View className=" flex justify-between items-center flex-row pt-12 px-7">
          <AntDesign
            onPress={() => router.back()}
            style={styles.border}
            className="text-light-bgOpposite "
            name="arrowleft"
            size={18}
          />
          <Image
            source={require("@/assets/images/profile1.jpeg")}
            className={`${cls.image.avatarClass}`}
          />
        </View>
        <View className="flex-row justify-between items-center mt-6 mx-4">
          <View className="flex-row gap-1 items-center">
            <AntDesign name="arrowleft" size={18} color="black" />
            <Text style={styles.textPrimary} className=" text-xl">
              Mar
            </Text>
          </View>
          <Text className={`${cls.heading[24].primaryDarkClass}`}>April</Text>

          <View className="flex-row gap-1 items-center">
            <Text style={styles.textPrimary} className=" text-xl">
              May
            </Text>
            <AntDesign name="arrowright" size={18} color="black" />
          </View>
        </View>
        <View className=" flex-row  justify-between  mt-6 mx-4">
          <Calender title="12" subtitle="wed" active />
          <Calender title="13" subtitle="thur" />
          <Calender title="14" subtitle="fri" />
          <Calender title="15" subtitle="sat" />
        </View>
        <View className=" mt-6 mx-4">
          <Text className={`${cls.heading[24].primaryDarkClass}`}>Ongoing</Text>
        </View>
        <ScrollView>
          <View className="flex-row mx-6 mt-6 items-center">
              {
                cardContents.map(cardContent =>
                  <TaskCard key={cardContent.title} {...cardContent} />
                )
              }
            </View>
            <View className="flex-row items-center mt-6 mx-4">
            <Text className="text-light-bgOpposite mr-4">11.00AM</Text>
              <View className="w-5 h-5 rounded-full bg-white items-center justify-center">
              <View className=" w-2 h-2 rounded-full bg-red-600"></View>
              </View>
              <View className=" ml-2 h-0.5 flex-1 bg-red-600"></View>
            </View>
            <View className=" mx-6 items-center">
          
              {
                cardContents2.map((cardContent, i) =>
                  <TaskCard key={i} {...cardContent} />
                )
              }
            </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    borderRadius: 10,
  },

  textPrimary: {
    color: "#032054",
  },
  h1: {
    fontSize: 24,
    fontWeight: 700,
    color: "#032054",
  },
});


const cardContents = [
  {
    title: "Mobile App Design",
    names: "Mike and Anita",
    time: "9.00AM - 10.00AM",
    startTime: "9.00AM",
    endTime: "10.00AM",
  }
]
const cardContents2 = [
  {
    title: "Software Testing",
    names: "Anita and David",
    time: "10.00AM - 11.00AM",
    startTime: "10.00AM",
    endTime: "16.00AM",
  },
  {
    title: "Web Development",
    names: " Nelle and Bertie",
    time: "12.00AM - 01.00AM",
    startTime: "10.00AM",
    endTime: "12.00AM",
  },
  {
    title: "Web Development",
    names: " Nelle and Bertie",
    time: "12.00AM - 01.00AM",
    startTime: "10.00AM",
    endTime: "12.00AM",
  },
 
]


