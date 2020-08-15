import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JobsScreen from './JobsScreen';
import CalendarScreen from './CalendarScreen';
import { Ionicons } from '@expo/vector-icons';

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

const EmployerTabs = createBottomTabNavigator();
function EmployerScreen() {
  return (
    <EmployerTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'md-clipboard'
          } else if (route.name === 'Test') {
            iconName = 'md-finger-print'
          } else if (route.name === 'Contacts') {
            iconName = 'md-people'
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
      <EmployerTabs.Screen name="Jobs" component={JobsScreen} />
      <EmployerTabs.Screen name="Calendar" component={CalendarScreen} />
    </EmployerTabs.Navigator>
  );
}

const EmployeeTabs = createBottomTabNavigator();
function EmployeeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ep Screen</Text>
    </View>
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
