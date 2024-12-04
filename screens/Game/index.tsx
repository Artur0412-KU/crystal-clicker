import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function Game() {
  return (
    <SafeAreaView style = {styles.container}>
        <Text>Game</Text>
    </SafeAreaView >
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F60BF',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})
