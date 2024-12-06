import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useRef, useState } from 'react'
import * as Haptics from 'expo-haptics'
import { Animated } from 'react-native';

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

        loadClicks()
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

    return {click, handleClick, scaleAnimation}

}
