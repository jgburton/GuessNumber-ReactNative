import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum= Math.floor((Math.random() * (max-min) + min));
    if (rndNum === exclude) {
        return enerateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(enerateRandomBetween(1, 100, props.userChoice));

    return (
        <View>
            <Text>Test</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default GameScreen;