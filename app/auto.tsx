import { StatusBar } from 'expo-status-bar';
import { Divider } from "react-native-paper";
import { Keyboard, ScrollView, StyleSheet, View } from 'react-native';
import PageHeader from './components/Header';
import NavButton from './components/NavButton';
import ReefAlgaeView from './views/ReefAlgaeView';
import AutoStartPositionView from './views/AutoStartPositionView'
import AlgaeView from './views/AlgaeView';
import React from 'react';

export default function App() {
    return (
        <View style={styles.container}>
             
            <PageHeader title='Auto' pageNumber='2/4' previous='' />
            <ScrollView>
                
            <AutoStartPositionView/>

            <Divider />
            <ReefAlgaeView phase="autonomous" />
            <Divider />
            <AlgaeView phase="autonomous" />
            <Divider />

            <NavButton text="Next" pageName="teleop" />
            <StatusBar style="auto" />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        // paddingLeft: 20,
        // paddingRight: 20,
        flex: 1,
        backgroundColor: '#fff',
        rowGap: 15
        // alignItems: 'center',
        // justifyContent: 'center',
    },
   
});
