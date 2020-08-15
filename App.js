import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JobsScreen from './JobsScreen';
import CalendarScreen from './CalendarScreen';
import BossProfileScreen from './BossProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import EmployerJobScreen from './EmployerJobScreen';
import EmployerProfileScreen from './EmployerProfileScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Employers"
        onPress={() => navigation.navigate('Employer')}
      />
      <Button
        title="Employee"
        onPress={() => navigation.navigate('Employee')}
      />
    </View>
  );
}

const EmployeeTabs = createBottomTabNavigator();
function EmployeeScreen() {
  return (
    <EmployeeTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Calendar') {
            iconName = 'ios-search'
          } else if (route.name === 'Jobs') {
            iconName = 'ios-briefcase'
          } else if (route.name === 'BossProfile') {
            iconName = 'ios-person'
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#E7698A',
        inactiveTintColor: 'gray',
      }}
    >
      <EmployeeTabs.Screen name="Calendar" component={CalendarScreen} />
      <EmployeeTabs.Screen name="Jobs" component={JobsScreen} />
      <EmployeeTabs.Screen name="BossProfile" component={BossProfileScreen} />
    </EmployeeTabs.Navigator>
  );
}

const EmployerTabs = createBottomTabNavigator();
function EmployerScreen() {
  return (
    <EmployerTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Jobs') {
            iconName = 'ios-briefcase'
          } else if (route.name === 'Profile') {
            iconName = 'ios-person'
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#E7698A',
        inactiveTintColor: 'gray',
      }}
    >
      <EmployerTabs.Screen name="Jobs" component={EmployerJobScreen} />
      <EmployerTabs.Screen name="Profile" component={EmployerProfileScreen} />
    </EmployerTabs.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Employer" component={EmployerScreen} />
        <Stack.Screen name="Employee" component={EmployeeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
