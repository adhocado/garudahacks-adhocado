import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Dimensions, Image, Alert, TouchableOpacity } from 'react-native';
const calImg1 = require('./images/Calendar2x.png');
const calImg2 = require('./images/Calendar12x.png');
const calImg3 = require('./images/Calendar22x.png');
const calImg4 = require('./images/Calendar32x.png');
const imageArray = Array.of(calImg1, calImg2, calImg3, calImg4);

export default function CalendarScreen({ navigation }) {
    const [progress, setProgress] = useState(0);
    const [currImg, setImg] = useState(calImg1);

    const handlePress = () => {
        setProgress(progress + 1);
        setImg(imageArray[progress]);
    }

    return (
        <View>
            <Text style={styles.title}>
                August
            </Text>
            <TouchableOpacity onPress={handlePress}>
                <Image style={styles.image} source={currImg} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    image: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
    title: {
        backgroundColor: 'white',
        paddingLeft: 20,
        textAlign: 'left',
        fontSize: 22,
        fontFamily: 'OpenSans_400Regular',
    },
});