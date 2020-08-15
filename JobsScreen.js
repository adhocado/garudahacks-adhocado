import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
const kopinalarImg = require('./images/kopinalar.jpeg');
const bigbananasImg = require('./images/bigbananas.jpeg');

const jobs = [
    {
        type: 'Service staff',
        name: 'Kopi Nalar',
        pay: 'Rp 100,000',
        address: 'Bali',
        src: kopinalarImg,
    },
    {
        type: 'Delivery',
        name: 'Big Bananas Daya',
        pay: 'Rp 85,000',
        address: 'Jakarta',
        src: bigbananasImg,
    },
    {
        type: 'NOC Intern',
        name: 'Gojek',
        pay: 'Rp 10,000',
        address: 'Batam',
        src: bigbananasImg,
    },
]

export default function JobsScreen({ navigation }) {
    return (
        <ScrollView>
            {jobs.map((job, index) => (
                <Card 
                    title={job.name}
                    image={job.src}
                />
            ))}
        </ScrollView>
    )
}