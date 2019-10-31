import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button} >
                        <Button title="Reset" onPress={() => { }} color={Colors.secondary}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" onPress={() => { }} color={Colors.Primary}/>
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, //all the space it can get
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
   button: {
       width: 120,
       padding:20
   }
});

export default StartGameScreen;