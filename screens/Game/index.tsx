import { Image } from 'expo-image'
import React, { useRef, useState } from 'react'
import { Animated, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import * as Haptics from 'expo-haptics'
import ModalExit from '../../components/ModalExit'
import useClickStorage from '../../hooks/useClickStorage'
import { useHover, useActive } from 'react-native-web-hooks'

export default function Game({navigation}) {
  const {click, handleClick, scaleAnimation} = useClickStorage('clicks')
  const [modal, setModal] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const ref = useRef(null)
  
  const handleExit = () => {
    Haptics.selectionAsync()
    navigation.navigate('home')
    setModal(!modal)
  }

  const handleExitClick = () => {
    Haptics.selectionAsync()
    setModal(true)
  }

  const handleCloseClick = () => {
    Haptics.selectionAsync()
    setModal(!modal)
  }

  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.clickerContainer}>
        <Animated.View style = {{transform: [{scale: scaleAnimation}]}}>
          <Pressable onPress={() => handleClick()}>
            <Image source={require('../../assets/icon-main.png')} style={{ width: 75, height: 106 }}/>
          </Pressable>
        </Animated.View>
        <Text style = {styles.clickerText}>{click}</Text>
      </View>
      <ModalExit isVisible={modal} onExit={() => handleExit()} onClose={() => handleCloseClick()}/>
      
      <Pressable onPressIn={() => setIsActive(true)} onPressOut = {() => setIsActive(false)} style = {[styles.buttonExit, isActive && styles.buttonExitHover]} onPress={() => handleExitClick()}>
        <Text onPressIn={() => setIsActive(true)} onPressOut = {() => setIsActive(false)} style = {[styles.buttonExitText, isActive && styles.buttonExitTextHover]}>Exit</Text>
      </Pressable>
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
    clickerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 100,
      gap: 31,
    },
    clickerText: {
      fontSize: 48,
      fontWeight: 800,
      color: 'white'
    },
    buttonExit: {
      marginBottom: 70,
      backgroundColor: '#fff',
      paddingLeft: 99,
      paddingRight: 99,
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 20,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    buttonExitHover: {
      backgroundColor: '#BE3778',
      color: 'white'
    },
    buttonExitText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#BE3778',
    },
    buttonExitTextHover: {
      color: 'white'
    },
    progressBarContainer: {
      marginBottom: 70,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    }
})
