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
        src: gojekImg,
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
                    imgSrc={job.src}
                    type={job.type}
                    name={job.name}
                    pay={job.pay}
                    address={job.address}
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