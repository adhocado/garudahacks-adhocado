import React from 'react';
import { Button, StyleSheet, Text, View, Dimensions, Image, Alert, TouchableOpacity } from 'react-native';

export default function CalendarScreen({ navigation }) {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>August</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    title: {
        textAlign: 'left',
        fontSize: 22,
        fontFamily: 'OpenSans_400Regular',
    },
});