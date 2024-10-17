import { View, Text, Image } from "react-native";
import React from "react";
import { cls } from "@/utils/cls";

type TaskCardProps = {
  title: string;
  names: string;
  time: string;
  startTime: string;
  endTime: string;
};

export default function TaskCard({ names, title, time, endTime, startTime }: TaskCardProps) {
  return (
    <View className="flex-row  items-center">
      <View className=" justify-between pr-4 pt-8 gap-y-10">
        <Text className="text-light-bgOpposite">{startTime}</Text>
        <Text className=" text-light-bgOpposite">{endTime}</Text>
      </View>
      <View className=" bg-light-primary rounded-2xl p-4 mt-9 flex-1">
        <View className=" gap-3">
          <View>
            <Text className="text-white text-xl">{title}</Text>
            <Text className="text-white text-sm">{names}</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <View className=" relative">
              <Image
                source={require("@/assets/images/profile1.jpeg")}
                className={`${cls.image.avatarSmClass}`}
              />
              <Image
                source={require("@/assets/images/profile2.jpeg")}
                className={`${cls.image.avatarSmClass} absolute top-0 translate-x-4`}
              />
            </View>
            <Text className="text-white mt-4 text-sm">{time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
