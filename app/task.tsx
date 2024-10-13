import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign} from '@expo/vector-icons'
import { Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'

export default function task() {
  return (
    <View className='bg-light-bg flex-1'>
        <StatusBar style='dark' />
      <View className=" flex justify-between items-center flex-row pt-12 px-7">
      <AntDesign onPress={()=>router.push("/home")} style={styles.border} className='text-light-bgOpposite ' name="arrowleft" size={18} />
        <Image
          source={require("@/assets/images/profile1.jpeg")}
          className=" w-11 h-11 rounded-full"
        />
      </View>
      <View className='flex-row justify-between items-center mt-6 mx-4'>
        <View className='flex-row gap-4 items-center'>
            <AntDesign name='arrowleft' size={18} color='black'/>
            <Text style={styles.textPrimary} className=' text-xl'>Mar</Text>
        </View>
        <Text style={styles.h1}>Aprail</Text>

        <View className='flex-row gap-4 items-center'>
            <Text style={styles.textPrimary} className=' text-xl'>May</Text>
            <AntDesign name='arrowright' size={18} color='black'/>
        </View>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    border:{
        borderWidth:1,
        borderColor:"gray",
        padding:5,
        borderRadius:10
    },

    textPrimary:{
        color:"#032054"
    },
    h1:{
        fontSize:24,
        fontWeight:700,
        color:"#032054"
    }

})