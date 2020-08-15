import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

export default function JobCard(props) {
    const navigation = props.navigation;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {navigation.navigate('JobPage')}}
            >
                <Image style={styles.image} source={props.imgSrc} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.type}</Text>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.text}>{props.pay}</Text>
                <Text style={styles.text}>{props.address}</Text>
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
        width: 340,
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 14,
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