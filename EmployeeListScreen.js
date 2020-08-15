import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Alert, TouchableOpacity } from 'react-native';
// import { Card } from "@paraboly/react-native-card";
import UserAvatar from 'react-native-user-avatar';
const bigbananasImg = require('./images/bigbananas.jpeg');
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const users = [
    {
        name: 'Nur',
        avatar: require('./images/annisa.jpg')
    },
]

const styles = StyleSheet.create({
    titleText: {
        fontWeight: '600',
        fontSize: 30,
        paddingTop: 50,
        paddingLeft: 30,
        lineHeight: 50,
    },
    subTitleText: {
        fontWeight: '600',
        fontSize: 20,
        paddingTop: 20,
        paddingLeft: 30,
        paddingBottom: 30,
    }
})

export default function EmployeeListScreen({ navigation }) {
    return (
        <View>
            <Text style={styles.titleText}>Applicants for Kopi Nalar</Text>
            <Text style={styles.subTitleText}>4 Applicants</Text>

            <Card containerStyle={{ padding: 0,}} >
                {
                    <ListItem
                        key="1"
                        roundAvatar
                        title='Annisa'
                        leftAvatar={{ source: require('./images/annisa.jpg') }}
                        onPress={() =>
                            navigation.navigate('Employee Profile')
                        }
                    />
                }
            </Card>

            <Card containerStyle={{ padding: 0 }}>
                {
                    <ListItem
                        key="2"
                        roundAvatar
                        title='Nur'
                        leftAvatar={{ source: require('./images/nur.jpg') }}
                    />
                }
            </Card>

            <Card containerStyle={{ padding: 0 }}>
                {
                    <ListItem
                        key="3"
                        roundAvatar
                        title='Banyu'
                        leftAvatar={{ source: require('./images/banyu.jpg') }}
                    />
                }
            </Card>

            <Card containerStyle={{ padding: 0 }}>
                {
                    <ListItem
                        key="4"
                        roundAvatar
                        title='Abyasa'
                        leftAvatar={{ source: require('./images/abyasa.jpg') }}
                    />
                }
            </Card>
        </View>
    )
}