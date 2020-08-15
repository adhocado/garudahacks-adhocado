import React from 'react';
import { Button, StyleSheet, Text, View, Dimensions, Image, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ApplicantsScreen from './ApplicantsScreen';
import EmployeeListScreen from './EmployeeListScreen';
import EmployeeProfileScreen from './EmployeeProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const kopinalarImg = require('./images/kopinalar.jpeg');
import { Divider } from 'react-native-elements';
const jobschedule = require('./images/jobschedule.jpg')


// const styles = StyleSheet.create({
//     titleText: {
//         fontWeight: '600',
//         fontSize: 30,
//         paddingTop: 50,
//         paddingLeft: 30,
//     }
// })

function JobScreen({ navigation }) {
    return (
        <View>
            <Text style={styles.titleText}>Jobs</Text>
            <View style={styles.padding}></View>
            <View style={styles.padding}></View>
            <View style={styles.container}>
                <Image style={styles.image} source={kopinalarImg} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Service Staff</Text>
                    <Text style={styles.title}>Kopi Nalar</Text>
                    <Text style={styles.text}>test</Text>
                    <View style={styles.padding}></View>
                    <Divider />
                    <View style={styles.padding}></View>
                    <Image style={styles.scheduleImage} source={jobschedule}/>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Employee List')}>
                    <Text style={styles.buttonText}>View all 4 applicants</Text>
            </TouchableOpacity>

        </View>
    );
}

const Stack = createStackNavigator();
export default function EmployerJobScreen({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="JobScreen">
            <Stack.Screen name="JobScreen" component={JobScreen} />
            <Stack.Screen name="Employee List" component={EmployeeListScreen} />
            <Stack.Screen name="Employee Profile" component={EmployeeProfileScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontWeight: '600',
        fontSize: 30,
        paddingTop: 50,
        paddingLeft: 30,
    },
    padding: {
        paddingTop: 10,
    },
    container: {
        alignItems: 'center',
        padding: 15,
    },
    textContainer: {
        alignSelf: 'flex-start',
        paddingTop: 10,
        paddingLeft: 25,
    },
    image: {
        width: 290,
        height: 200,
        borderRadius: 10,
    },
    scheduleImage: {
        width: 280,
        height: 70,
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 25,
        fontFamily: 'OpenSans_700Bold',
    },
    logo: {
        width: 66,
        height: 58,
    },
    text: {
        fontSize: 16,
        fontFamily: 'OpenSans_400Regular',
    },
    button: {
        backgroundColor: '#2DD2B8',
        alignItems: "center",
        padding: 10,
        width: 280,
        alignSelf: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'OpenSans_400Regular',
        color: 'white',
    },
});
