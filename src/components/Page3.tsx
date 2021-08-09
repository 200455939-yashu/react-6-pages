import React from "react"
import { StyleSheet, Text, SafeAreaView, View } from "react-native"

const Page3 = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.firstView}>
                <Text style={styles.textStyle}>This is Page 3 and click anywhere to navigate next page</Text>
                <View style={styles.smallRectangle} />
            </View>
            <View style={styles.secondView}>
                <View style={styles.secondRectangle} />
            </View>
            <View style={styles.thirdView}>
                <View style={styles.thirdRectangle} />
                <View style={styles.forthRectangle} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent:'space-between'
    },
    textStyle: {
        color: "#000",
        textAlign: "center",
    },
    firstView: {
        flex: 0.1
    },
    secondView: {
        flex: 0.5
    },
    thirdView: {
        flex: 0.3
    },
    smallRectangle: {
        flex: 1,
        backgroundColor: "yellow",
        margin: 5,
        width: 50,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'
    },
    secondRectangle: {
        flex: 0.3,
        backgroundColor: "red",
        margin: 5
    },
    thirdRectangle: {
        flex: 0.5,
        backgroundColor: "green",
        margin: 5,
    },
    forthRectangle: {
        flex: 0.15,
        backgroundColor: "green",
        margin: 5,
    },
})

export default Page3