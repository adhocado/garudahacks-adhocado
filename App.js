import * as React from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JobsScreen from './JobsScreen';
import CalendarScreen from './CalendarScreen';
import BossProfileScreen from './BossProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import EmployerJobScreen from './EmployerJobScreen';
import EmployerProfileScreen from './EmployerProfileScreen';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';

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
            iconName = 'ios-calendar'
          } else if (route.name === 'Jobs') {
            iconName = 'ios-briefcase'
          } else if (route.name === 'Profile') {
            iconName = 'ios-person'
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#2DD2B8',
        inactiveTintColor: 'gray',
      }}
    >
      <EmployeeTabs.Screen name="Calendar" component={CalendarScreen} />
      <EmployeeTabs.Screen name="Jobs" component={JobsScreen} />
      <EmployeeTabs.Screen name="Profile" component={BossProfileScreen} />
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
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={allScreenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} options={commonHeaderOptions}/>
        <Stack.Screen name="Employer" component={EmployerScreen} options={commonHeaderOptions}/>
        <Stack.Screen name="Employee" component={EmployeeScreen} options={commonHeaderOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const allScreenOptions = {
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#fff',
  headerBackground: () => (
    <Image
      style={{ width: 170, resizeMode: 'contain', alignSelf: 'center', top: 35, }}
      source={require('./images/logo.png')}
    />
  ),
}

const commonHeaderOptions = {
  title: "",
}

export default App;
