import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import PastJobCard from './PastJobCard';
const mapImg = require('./images/map2x.png');
const scheduleImg = require('./images/schedule2x.png');
const profilePic = require('./images/annisa.jpg');
const kopinalarImg = require('./images/kopinalar.jpeg');

const pastJobs = [
    {
        type: 'Service staff',
        name: 'Kopi Nalar',
        pay: 'Rp 100,000',
        address: 'Jl. Prof. Joko Sutono SH No.7 Senopati, Jakarta Indonesia',
        src: kopinalarImg,
        description: 'Clean tables, wash dishes, wait tables, pack up and close the shop. Applicants are expected to know how to be professional and cheerful towards customers and staff.',
    },
]

export default function JobPage(props) {
    const [hasApplied, setApplied] = useState(false)
    const navigation = props.navigation;
    // const job = props.route.params.job;
    const employee = {
        type: 'Service staff',
        name: 'Annisa Sembiring',
        pay: 'Rp 100,000',
        address: 'Jl. Prof. Joko Sutono SH No.7 Senopati, Jakarta Indonesia',
        src: profilePic,
        description: 'Clean tables, wash dishes, wait tables, pack up and close the shop. Applicants are expected to know how to be professional and cheerful towards customers and staff.',
    }

    return (
        <ScrollView>
            <Image style={styles.image} source={employee.src} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{employee.name}</Text>
                <Text style={styles.text}>Indonesian</Text>
                <Text style={styles.text}>Female, 24</Text>
                <View style={styles.padding}></View>
                <View style={styles.padding}></View>
                <Divider />
                <Text style={styles.heading}>About me</Text>
                <Text style={styles.text}>I love Indomie</Text>
                <View style={styles.padding}></View>
                <View style={styles.padding}></View>
                <Divider />
                <Text style={styles.heading}>Languages and skills</Text>
                <Text style={styles.text}>Bahasa Indonesia</Text>
                <Text style={styles.text}>English</Text>
                <Text style={styles.text}>Driving License</Text>
                <View style={styles.padding}></View>
                <View style={styles.padding}></View>
                <Divider />
                <Text style={styles.heading}>Experience</Text>
                <Text style={styles.text}>Cashier at IndoStop</Text>
                <View style={styles.padding}></View>
                <View style={styles.padding}></View>
                <Divider />
                <Text style={styles.heading}>Past jobs</Text>
                {pastJobs.map((job, index) => (
                    <PastJobCard
                        key={index}
                        job={job}
                    />
                ))}
                <View style={styles.padding}></View>
                <Divider />
                <View style={styles.padding}></View>
                <View style={styles.padding}></View>
                

                <TouchableOpacity style={styles.button} onPress={() => { setApplied(!hasApplied) }}>
                    <Text style={styles.buttonText}>{hasApplied ? 'Selected' : 'Select'}</Text>
                </TouchableOpacity>
                <View style={styles.padding}></View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 15,
    },
    padding: {
        paddingTop: 10,
    },
    textContainer: {

        padding: 20,
    },
    image: {
        width: 400,
        height: 300,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 32,
        fontFamily: 'OpenSans_700Bold',
        paddingBottom: 15,
    },
    heading: {
        fontWeight: "bold",
        paddingTop: 30,
        paddingBottom: 10,
        textAlign: 'left',
        fontSize: 20,
        fontFamily: 'OpenSans_400Regular',
    },
    text: {
        fontSize: 16,
        fontFamily: 'OpenSans_400Regular',
        paddingTop: 5,
        paddingBottom: 10,
    },
    embedImage: {
        alignSelf: 'center',
        width: 310,
        height: 200,
    },
    button: {
        backgroundColor: '#2DD2B8',
        alignItems: "center",
        padding: 10,
        width: 200,
        alignSelf: 'center',
        borderRadius: 10,
    },
    rejectButton: {
        backgroundColor: '#EF7D7D',
        alignItems: "center",
        padding: 10,
        width: 200,
        alignSelf: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'OpenSans_400Regular',
        color: 'white',
    }
});