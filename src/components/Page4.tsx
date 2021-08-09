import React from "react"
import { StyleSheet, Text, SafeAreaView, View } from "react-native"

const Page4 = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Text style={styles.textStyle}>This is Page 4 and click anywhere to navigate next page</Text>
            <View style={styles.smallTile} />
            <View style={styles.smallTile} />
            <View style={styles.smallTile} />
            <View style={styles.smallTile} />
            <View style={styles.smallTile} />
            <View style={styles.smallTile} />
            <View style={styles.smallTile} />
            <View style={styles.smallTile} />
            <View style={styles.smallTile} />

            <View style={styles.smallRectangle} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        flexWrap:'wrap',
        marginLeft: 25
    },
    textStyle: {
        color: "#000",
        textAlign: "center",
    },
    smallTile: {
        backgroundColor: 'blue',
        width: 100,
        height: 100,   
        margin: 5,
    },
    smallRectangle: {
        backgroundColor: 'yellow',
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 30,
        marginBottom: 20
    }
})

export default Page4