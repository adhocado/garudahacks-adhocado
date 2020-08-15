import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

export default function PastJobCard(props) {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={props.job.src} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.job.type}</Text>
                <Text style={styles.title}>{props.job.name}</Text>
                <Text style={styles.text}>{props.job.address}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 15,
    },
    textContainer: {
        alignSelf: 'flex-start',
        paddingTop: 10,
    },
    image: {
        width: 290,
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 19,
        fontFamily: 'OpenSans_700Bold',
    },
    logo: {
        width: 66,
        height: 58,
    },
    text: {
        fontSize: 14,
        fontFamily: 'OpenSans_400Regular',
    },
});