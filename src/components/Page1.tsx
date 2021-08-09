import React from "react"
import { StyleSheet, Text, SafeAreaView, View } from "react-native"

const Page1 = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.topContainer}>
                <Text style={styles.textStyle}>This is Page 1 and click anywhere to navigate next page</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.firstRectangle}/>
                <View style={styles.secondRectangle}/>
                <View style={styles.thirdRectangle}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#fff",
        flex: 1
    },
    textStyle: {
        color: "#000",
        textAlign: "center"
    },
    topContainer: {
        flex: 0.35,
        backgroundColor: "yellow"
    },
    bottomContainer: {
        flex: 0.65,
        backgroundColor: 'red',
        flexDirection: "column"
    },
    firstRectangle: {
        flex: 0.2,
        margin: 10,
        backgroundColor: "green"
    },
    secondRectangle: {
        flex: 0.2,
        margin: 10,
        marginTop: 300,
        backgroundColor: "green"
    },
    thirdRectangle: {
        flex: 0.2,
        margin: 10,
        backgroundColor: "green"
    }
})

export default Page1