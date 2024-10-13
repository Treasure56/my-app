import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Cards() {
  return (
    <View className="pt-11  flex-row justify-around items-center">
            <View className="gap-4 flex-1">
                <View style={styles.card1}>
                    <Text style={styles.title}>22</Text>
                    <Text style={styles.subtitle}>Done</Text>
                </View>
                <View style={styles.card2}>
                    <Text style={styles.title}>10</Text>
                    <Text style={styles.subtitle}>Ongoing</Text>
                </View>
            </View>
            <View className="px-2"/>
            <View className="gap-4 flex-1">
                <View style={styles.card2}>
                    <Text style={styles.title}>7</Text>
                    <Text style={styles.subtitle}>In progress</Text>
                </View>
                <View style={styles.card1}>
                    <Text style={styles.title}>12</Text>
                    <Text style={styles.subtitle}>Waiting for review</Text>
                </View>
            </View>

        </View>
  )
}


/**
 * 
 * export default function card1(props:TextProps) {
  return (
    <View className="pt-11  flex-row justify-around items-center">
      <View className="gap-4 flex-1">
        <View style={styles.card1}>
          <Text style={styles.title}>{...props}</Text>
          <Text style={styles.subtitle}>Done</Text>
        </View>
        <View style={styles.card2}>
          <Text style={styles.title}>10</Text>
          <Text style={styles.subtitle}>Ongoing</Text>
        </View>
      </View>
    </View>
  );
}
 */

const styles = StyleSheet.create({
    title:{
        color:"white",
        fontWeight:"bold",
        fontSize:35
    },
    subtitle:{
        color: "white",
        fontSize:18,
        fontWeight:"500"
    },

    card1:{
        backgroundColor:"#0070f3",
        borderRadius:16,
        height:176,
        alignItems: "center",
        justifyContent: "center",
        gap:8

    },
    card2:{
        backgroundColor:"#0070f3",
        borderRadius:16,
        height:128,
        alignItems: "center",
        justifyContent: "center",
        gap:8

    }

})