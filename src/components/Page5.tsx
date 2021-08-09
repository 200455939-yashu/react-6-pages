import React from "react"
import { StyleSheet, Text, SafeAreaView, View } from "react-native"

const Page5 = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Text style={styles.textStyle}>This is Page 5 and click anywhere to navigate next page</Text>
            <View style={styles.firstView}>
                
            </View>
            <View style={styles.firstView}>
                
            </View>
            <View style={styles.firstView}>
                
            </View>
            <View style={styles.firstView}>
                
            </View>
            <View style={styles.lastView}>
                
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
        flex: 0.15,
        backgroundColor: "yellow",
        margin: 20,
        marginBottom: 0,
        marginTop: 0
    },
    lastView: {
        flex: 0.2,
        backgroundColor: "red",
        width: 100,
        height: 100,
        marginTop: 100,
        margin: 20,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'
    }
})

export default Page5