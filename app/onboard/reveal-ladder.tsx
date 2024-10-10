import * as React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

const YourLadder = () => {

    return (
        <View style={styles.yourLadder}>
            <Text style={[styles.aspireai, styles.aspireaiTypo]}>AspireAI</Text>
            <Text style={[styles.continueToSee, styles.aspireaiClr]}>Continue to see your pathway</Text>
            <Pressable style={styles.menuBar} onPress={() => {
            }}>
                <View style={styles.continueParent}>
                    <Text style={styles.continue}>Continue</Text>
                </View>
            </Pressable>
            <View style={[styles.yourLadderChild, styles.ball, {backgroundColor: "#6A41FF"}]}/>
            <View style={[styles.yourLadderItem, styles.ball, {backgroundColor: "#130160"}]}/>
            <View style={[styles.yourLadderInner, styles.ball, {backgroundColor: "#6A41FF"}]}/>
        </View>);
};

const styles = StyleSheet.create({
    continue: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "700",
        fontFamily: "DM Sans",
        color: "#fff",
        textAlign: "center",
        width: 203
    },
    continueParent: {
        borderRadius: 14,
        backgroundColor: "#130160",
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1.2,
        flex: 1,
        width: "100%",
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 17,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8
    },
    ball: {
        borderRadius: 1000
    },
    nextParent: {
        borderRadius: 14,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1.2,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 17,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        gap: 34,
        backgroundColor: "#130160",
        left: 0,
        top: 0,
        height: 48,
        width: 350,
        position: "absolute"
    },
    next: {
        lineHeight: 24,
        width: 261,
        color: "#fff",
        fontSize: 14,
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    vectorIcon: {
        height: 32,
        width: 35,
    },
    aspireaiTypo: {
        textAlign: "left",
        left: "50%",
        fontFamily: "DM Sans",
        fontWeight: "700",
        position: "absolute"
    },
    aspireaiClr: {
        color: "#0d0140",
        fontSize: 28
    },
    applyPosition: {
        height: 50,
        width: 50,
        position: "absolute"
    },
    aspireai: {
        marginLeft: -57,
        top: 53,
        color: "#0d0140",
        fontSize: 28,
        textAlign: "left",
        left: "50%"
    },
    continueToSee: {
        top: 362,
        left: 88,
        textAlign: "center",
        width: 238,
        fontFamily: "DM Sans",
        fontWeight: "700",
        color: "#0d0140",
        fontSize: 28,
        position: "absolute"
    },
    applyNowChild: {
        borderRadius: 14
    },
    // continue: {
    //     marginTop: -9,
    //     marginLeft: -34.5,
    //     top: "50%",
    //     fontSize: 14,
    //     letterSpacing: 0.8,
    //     textTransform: "capitalize",
    //     color: "#fff",
    //     textAlign: "left",
    //     left: "50%"
    // },
    menuBar: {
        marginLeft: -122,
        top: 479,
        height: 50,
        width: 245,
        left: "50%",
        position: "absolute"
    },
    yourLadderChild: {
        top: 743,
        left: 73,
        width: 121,
        height: 124,
        position: "absolute"
    },
    yourLadderItem: {
        top: 687,
        left: -65,
        width: 178,
        height: 155,
        position: "absolute"
    },
    yourLadderInner: {
        top: 546,
        left: 356,
        width: 94,
        height: 82,
        position: "absolute"
    },
    yourLadder: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        width: "100%",
        height: 896,
        overflow: "hidden"
    }
});

export default YourLadder;
