import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Dimensions } from 'react-native';
import StyledButton from '../styledButton/StyledButton';

const CarItem = ({ backgroundSource, titleText, subTitleText, mainActionButtonText, subActionButtonText }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundSource} style={styles.backgroundSource} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{titleText}</Text>
                <Text style={styles.headerText}>{subTitleText}</Text>
            </View>
            <View style={styles.actionButtonsContainer}>
                <StyledButton buttonText={mainActionButtonText} />
                <StyledButton buttonText={subActionButtonText} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    backgroundSource: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        position: 'absolute'
    },
    headerContainer: {
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        paddingTop: '20%',
    },
    headerText: {
        textAlign: 'center'
    },
    actionButtonsContainer:{
        paddingTop: '100%',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },
    
})
export default CarItem;
