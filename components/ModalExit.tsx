import React from 'react'
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'

export default function ModalExit({isVisible, onClose, onExit}) {
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to leave the game?</Text>
            <View style = {styles.modalButtonContainer}>
                <Pressable onPress={onExit}>
                  <Text style={styles.exitModalText}>Yes</Text>
                </Pressable>
                <Pressable onPress={onClose}>
                  <Text style={styles.closeModalText}>No</Text>
                </Pressable>
            </View>
            
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 300,
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 31,
        paddingRight: 31,
        backgroundColor: '#0F60BF',
        borderRadius: 30,
        alignItems: 'center',
        boxShadow: '-3px 0px 39.7px 5px rgba(0, 0, 0, 0.25)',
    },
    modalText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 800,
        marginBottom: 20,
        color: 'white'
    },
    exitModalText: {
        fontSize: 16,
        color: 'white',
        paddingBottom: 9,
        paddingTop: 9,
        paddingRight: 31,
        paddingLeft: 31,
        backgroundColor: "#BE3778",
        borderRadius: 10,
    },
    closeModalText: {
        fontSize: 16,
        color: '#BE3778',
        paddingBottom: 9,
        paddingTop: 9,
        paddingRight: 31,
        paddingLeft: 31,
        backgroundColor: "white",
        borderRadius: 10,
    },
    modalButtonContainer: {
        flexDirection: 'row',
        gap: 20,
    }
})