import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useRef, useState } from 'react'
import * as Haptics from 'expo-haptics'
import { Animated, AppState } from 'react-native';

export default function useClickStorage(key: any) {
    const [click, setClick] = useState(0)
    const scaleAnimation = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const loadClicks = async () => {
            try {
               const savedClicks = await AsyncStorage.getItem(key)
                if(savedClicks !== null) {
                  setClick(Number(savedClicks))
                }
            } catch (err) {
                console.error(err)
            }
        }

        const clearClicksOnExit = async (appState: string) => {
          if(appState === 'inactive' || appState === 'background') {
            try {
              await AsyncStorage.removeItem(key) 
              setClick(0)
            } catch(err) {
              console.error(err)
            }
          }
        }

        loadClicks()

        const subscription = AppState.addEventListener('change', clearClicksOnExit)
        return () => {
          subscription.remove()
        }
    }, [key])

    const handleClick = async () => {
        Haptics.impactAsync()
        const newClick = click + 1
        setClick(newClick)
    
        Animated.sequence([
          Animated.timing(scaleAnimation, {
            toValue: 1.2, 
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnimation, {
            toValue: 1, 
            duration: 100,
            useNativeDriver: true,
          }),
        ]).start()

        try {
            await AsyncStorage.setItem(key, newClick.toString())
         } catch (err) {
            console.error(err)
        }
    }

    const resetClicks = async () => {
      try {
      await AsyncStorage.removeItem(key)
      setClick(0)
      } catch(err) {
        console.error(err)
      }
    }

    return {click, handleClick, scaleAnimation, resetClicks}

}
