import React from "react"
import { StyleSheet, Text, SafeAreaView, View } from "react-native"

const Page6 = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Text style={styles.textStyle}>This is Page 6 and click anywhere to navigate next page</Text>
            <View style={styles.firstView} />
            <View style={styles.lastView}>
                <View style={styles.smallRectange}/>
                <View style={styles.smallRectange}/>
                <View style={styles.smallRectange}/>
                <View style={styles.smallRectange}/>
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
        textAlign: "center"
    },
    firstView: {
        flex: 0.9,
        backgroundColor: "yellow",
        margin: 20,
        marginTop: 5,
        marginBottom: 5 
    },
    lastView: {
        flex: 0.1,
        borderColor: "grey",
        borderWidth: 5,
        margin: 20,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: "row",
        justifyContent:'space-between'
    },
    smallRectange: {
        flex: 0.15,
        backgroundColor: "blue",
        padding: 10,
        paddingTop: 5
    }
})

export default Page6