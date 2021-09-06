import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import StyledButton from '../styledButton/StyledButton';

const CarItem = ({ backgroundSource, titleText, subTitleText, mainActionButtonText, subActionButtonText }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundSource} style={styles.backgroundSource} />
            <View style={styles.headerContainer}>
                <Text style={{...styles.headerText, ...styles.mainHeader}}>{titleText}</Text>
                <Text style={{...styles.headerText,...styles.subText}}>{subTitleText}</Text>
            </View>
            <View style={styles.actionButtonsContainer}>
                <StyledButton buttonText={mainActionButtonText} type="main"/>
                <StyledButton buttonText={subActionButtonText} type="sub"/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
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
        paddingTop: '10%',
    },
    headerText: {
        textAlign: 'center'
    },
    actionButtonsContainer:{
        height: '80%',
        justifyContent: 'flex-end',
        width: '100%',
        alignItems: 'center'
    },
    mainHeader:{
        fontSize: 30
    },
    subText:{
        color:'#7d5d5d'
    }
})
export default CarItem;
