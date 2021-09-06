import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'

const StyledButton = ({ buttonText, type }) => {
    const buttonStyle = type === 'main' ? styles.mainButton : styles.subButton
    return (
        <Pressable
            onPress={() => console.warn('pressed')}
            style={styles.actionButton}
        >
            <Text style={{...styles.actionButtonText, ...buttonStyle}}>{buttonText}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    actionButton:{
        padding: '4%',
        justifyContent: 'center',
        height:'5%',
        width: '90%',
        marginBottom: '5%',
    },
    actionButtonText:{
        textAlign: 'center',
        padding: '4%',
        borderRadius: 50
    },
    mainButton:{
        backgroundColor: '#aaa',
        color: 'white'
    },
    subButton: {
        backgroundColor: '#111',
        color: 'white'

    }
})

export default StyledButton;