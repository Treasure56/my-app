import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'


type CalenderProps = {
    title: string
    subtitle: string
    active?: boolean
}
export default function Calender({ title, active = false, subtitle}: CalenderProps) {
  return (
    <View className={` w-20 p-4 h-28 rounded-full  flex justify-center items-center ${active ? 'bg-light-bgOpposite ' : 'bg-white '}`} style={Styles.shadow} >
            <Text className={` text-3xl font-bold ${active ? 'text-white' : 'text-light-bgOpposite'}`}>{title}</Text>
            <Text className={`text-md ${active ? 'text-white' : 'text-light-bgOpposite'}`}>{subtitle}</Text>
        </View>
  )
}


const Styles = StyleSheet.create({
    shadow: {
      ...Platform.select({
        // ios: {
        //   shadowColor: '#000', // iOS shadow color
        //   shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
        //   shadowOpacity: 0.25, // iOS shadow opacity
        //   shadowRadius: 3.84, // iOS shadow radius
        // },
        android: {
          elevation: 5, 
        },
      }),
    },
  });