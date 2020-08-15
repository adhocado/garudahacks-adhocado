import React from 'react';
import { Button, StyleSheet, Text, View, Dimensions, Image, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ApplicantsScreen from './ApplicantsScreen';
import EmployeeListScreen from './EmployeeListScreen';
import EmployeeProfileScreen from './EmployeeProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const styles = StyleSheet.create({
    titleText: {
        fontWeight: '600',
        fontSize: 30,
        paddingTop: 50,
        paddingLeft: 30,
    }
})

function JobScreen({ navigation }) {
    return (
        <View>
            <Text style={styles.titleText}>Jobs</Text>
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
