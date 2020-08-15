import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import JobPage from './JobPage';
import JobListings from './JobListings';

const Stack = createStackNavigator();

export default function JobsScreen({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="JobListings">
            <Stack.Screen name="JobListings" component={JobListings} />
            <Stack.Screen name="JobPage" component={JobPage} />
        </Stack.Navigator>
    )
}