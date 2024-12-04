import { Image } from 'expo-image';
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as Haptics from 'expo-haptics'

export default function Home({navigation}) {
    const handleClick = () => {
        Haptics.selectionAsync()
        navigation.navigate('game')
      }
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.title}>Crystal Clicker</Text>
        <Image source={require('../../assets/icon-main.png')} style={{ width: 75, height: 106 }}/>
      </View>
      <Pressable 
       style = {styles.button}
       onPress={() => handleClick()}
      >
        <Text style = {styles.buttonText}>Start</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0F60BF',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 300
    },
    title: {
      fontSize: 32,
      fontWeight: 800,
      color: 'white'
    },
    containerTop: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 57
  
    },
    button: {
      marginBottom: 70,
      backgroundColor: '#BE3778',
      paddingLeft: 99,
      paddingRight: 99,
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 20,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    },
    buttonText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    }
  });
