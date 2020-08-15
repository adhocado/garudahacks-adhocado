import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import JobCard from './JobCard';
const kopinalarImg = require('./images/kopinalar.jpeg');
const bigbananasImg = require('./images/bigbananas.jpeg');
const gojekImg = require('./images/gojek.png');

const jobs = [
    {
        type: 'Service staff',
        name: 'Kopi Nalar',
        pay: 'Rp 100,000',
        address: 'Jl. Prof. Joko Sutono SH No.7 Senopati, Jakarta Indonesia',
        src: kopinalarImg,
        description: 'Clean tables, wash dishes, wait tables, pack up and close the shop. Applicants are expected to know how to be professional and cheerful towards customers and staff.',
    },
    {
        type: 'Delivery',
        name: 'Big Bananas Daya',
        pay: 'Rp 85,000',
        address: 'Bali',
        src: bigbananasImg,
        description: '',
    },
    {
        type: 'NOC Intern',
        name: 'Gojek',
        pay: 'Rp 10,000',
        address: 'Batam',
        src: gojekImg,
        description: '',
    },
]

export default function JobListings(props) {
    return (
        <ScrollView style={{ padding: 15 }}>
            <Text style={styles.mainText}>
                Jobs
            </Text>
            {jobs.map((job, index) => (
                <JobCard
                    navigation = {props.navigation}
                    key={index}
                    job={job}
                />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 20,
        fontFamily: 'OpenSans_400Regular',
    }
});