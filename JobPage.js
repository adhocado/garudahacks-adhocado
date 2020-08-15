import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
const mapImg = require('./images/map2x.png');
const scheduleImg = require('./images/schedule2x.png');

export default function JobPage(props) {
    const [hasApplied, setApplied] = useState(false)
    const navigation = props.navigation;
    const job = props.route.params.job;



    return (
        <ScrollView>
            <Image style={styles.image} source={job.src} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{job.name}</Text>
                <Text style={styles.text}>{job.pay}</Text>
                <Divider />
                <Text style={styles.heading}>Job description</Text>
                <Text style={styles.text}>{job.type}</Text>
                <Text style={styles.text}>{job.description}</Text>
                <Divider />
                <Text style={styles.heading}>Work timings</Text>
                <TouchableOpacity>
                    <Image style={styles.embedImage} source={scheduleImg} />
                </TouchableOpacity>
                <Divider />
                <Text style={styles.heading}>Location</Text>
                <TouchableOpacity>
                    <Image style={styles.embedImage} source={mapImg} />
                </TouchableOpacity>
                <Text style={styles.text}>{job.address}</Text>
                <Divider />
                <Text style={styles.heading}>Additional information</Text>
                <Text style={styles.text}>Please wear black shirt and jeans. You will be given a 1h lunch break.</Text>
                <TouchableOpacity style={styles.button} onPress={() => {setApplied(!hasApplied)}}>
                    <Text style={styles.buttonText}>{hasApplied ? 'Applied' : 'Apply'}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 15,
    },
    textContainer: {
        
        padding: 20,
    },
    image: {
        width: 400,
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 32,
        fontFamily: 'OpenSans_700Bold',
    },
    heading: {
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'left',
        fontSize: 20,
        fontFamily: 'OpenSans_400Regular',
    },
    text: {
        fontSize: 12,
        fontFamily: 'OpenSans_400Regular',
        paddingTop: 10,
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
    buttonText: {
        fontSize: 14,
        fontFamily: 'OpenSans_400Regular',
        color: 'white',
    }
});