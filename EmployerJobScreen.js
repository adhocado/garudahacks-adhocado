import React from 'react';
import { Button, StyleSheet, Text, View, Dimensions, Image, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ApplicantsScreen from './ApplicantsScreen';
import EmployeeListScreen from './EmployeeListScreen';
import EmployeeProfileScreen from './EmployeeProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


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

            <View style={styles.container}>
                <Image style={styles.image} source={props.job.src} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.job.type}</Text>
                    <Text style={styles.title}>{props.job.name}</Text>
                    <Text style={styles.text}>{props.job.address}</Text>
                </View>
            </View>

            <Button
                title="View all 4 applicants"
                onPress={() =>
                    navigation.navigate('Employee List')
                }
            />

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
