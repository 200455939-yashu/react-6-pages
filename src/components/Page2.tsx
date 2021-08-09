import React from "react"
import { StyleSheet, Text, SafeAreaView, View } from "react-native"

const Page2 = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.firstRectangle}>
                <Text style={styles.textStyle}>This is Page 2 and click anywhere to navigate next page</Text>
            </View>
            <View style={styles.secondRectangle}/>
            <View style={styles.thirdRectangle}/>
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
    firstRectangle: {
        flex: 0.15,
        backgroundColor: "yellow",
        margin: 5
    },
    secondRectangle: {
        flex: 0.7,
        backgroundColor: "red",
        margin: 5
    },
    thirdRectangle: {
        flex: 0.15,
        backgroundColor: "green",
        margin: 5
    }
})

export default Page2