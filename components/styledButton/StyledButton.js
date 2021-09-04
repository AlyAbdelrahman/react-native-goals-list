import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'

const StyledButton = ({ buttonText, type }) => {
    return (
        <Pressable
            onPress={() => console.warn('pressed')}
            style={styles.actionButton}
        >
            <Text style={styles.actionButtonText}>{buttonText}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    actionButton:{
        backgroundColor: 'blue',
        padding: '4%',
        justifyContent: 'center',
        width: '90%',
        marginBottom: '5%',
        borderRadius: 10
    },
    actionButtonText:{
        textAlign: 'center',
    }
})

export default StyledButton;