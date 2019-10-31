import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
         //ios only
        shadowColor: 'black',
        shadowOffset: {width:0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        //ios only
        elevation: 8, //android only
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    
});

export default Card;