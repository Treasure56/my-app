import { View, Text, ViewProps } from "react-native";
import React from "react";

export type CardProps = ViewProps & {
  title: string;
  subtitle: string;
};

export default function Card({
  title,
  subtitle,
  className,
  ...props
}: CardProps) {
  return (
    <View
      className={` bg-light-primary rounded-2xl items-center justify-center gap-2 ${className}`}
      {...props}
    >
      <Text className="font-bold text-3xl text-white">{title}</Text>
      <Text className="text-neutral-200 text-md">{subtitle}</Text>
    </View>
  );
}
