import * as React from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";

const OtpVerfication = () => {

    return (
        <View style={styles.otpVerfication}>
            <Text style={styles.verifyYourNumber}>Verify Your Number</Text>

            <View style={[styles.riarrowUpSLineIcon, styles.riarrowIconLayout, styles.ball]}/>

            <Text style={[styles.enterTheFour, styles.nextTypo]}>Enter the four digit code sent to +94 711427657</Text>

            <View style={[styles.otpVerficationChild, styles.otpLayout, styles.ball, {backgroundColor: '#6A41FF'}]}/>
            <View style={[styles.otpVerficationItem, styles.otpLayout, styles.ball, {backgroundColor: '#150B3D'}]}/>
            <View style={[styles.otpVerficationInner, styles.riarrowUpSLineIconPosition, styles.ball, {backgroundColor: '#6A41FF'}]}/>

            <View style={styles.otpPad}>
                <View style={[styles.otpPadInner, styles.otpPosition]}>
                    <View style={[styles.frameChild, styles.frameBorder]}/>
                </View>
                <View style={[styles.otpPadChild, styles.otpPosition]}>
                    <View style={[styles.frameChild, styles.frameBorder]}/>
                </View>
                <View style={[styles.frameView, styles.otpPosition]}>
                    <View style={styles.rectangleWrapper}>
                        <View style={[styles.frameInner, styles.frameBorder]}/>
                    </View>
                </View>
                <View style={[styles.otpPadItem, styles.frameBorder]}/>
            </View>
            <Link style={styles.nextParent}  href="/login/splash">
                <Text style={[styles.next, styles.nextTypo]}>Next</Text>
                <Image style={styles.riarrowIconLayout} resizeMode="cover"
                       source={require('@/assets/images/signin/arrow-up-s-line.svg')}/>
            </Link>
        </View>);
};

const styles = StyleSheet.create({
    riarrowIconLayout: {
        height: 32,
        width: 35,
        overflow: "hidden"
    },
    nextTypo: {
        fontSize: 14,
        textAlign: "left"
    },
    otpLayout: {
        height: 207,
        width: 193,
        position: "absolute"
    },
    riarrowUpSLineIconPosition: {
        left: 336,
        position: "absolute"
    },
    otpPosition: {
        top: 0,
        position: "absolute"
    },
    frameBorder: {
        height: 57,
        borderBottomWidth: 1,
        borderColor: "#6a41ff",
        backgroundColor: "rgba(225, 217, 255, 0.3)",
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderStyle: "solid"
    },
    verifyYourNumber: {
        top: 558,
        fontSize: 28,
        color: "#0d0140",
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        left: 32,
        position: "absolute"
    },
    riarrowUpSLineIcon: {
        top: 795,
        left: 336,
        position: "absolute"
    },
    enterTheFour: {
        top: 599,
        fontFamily: "DM Sans",
        color: "#524b6b",
        fontSize: 14,
        left: 32,
        position: "absolute"
    },
    otpVerficationChild: {
        top: -14,
        left: -95
    },
    otpVerficationItem: {
        top: -117,
        left: 27
    },
    otpVerficationInner: {
        top: 292,
        width: 150,
        height: 143
    },
    frameChild: {
        width: 66
    },
    otpPadInner: {
        left: 92,
        flexDirection: "row"
    },
    otpPadChild: {
        left: 0,
        width: 66,
        flexDirection: "row"
    },
    frameInner: {
        width: 65
    },
    rectangleWrapper: {
        width: 65,
        flexDirection: "row"
    },
    frameView: {
        left: 183,
        flexDirection: "row"
    },
    otpPadItem: {
        left: 275,
        width: 66,
        top: 0,
        position: "absolute"
    },
    otpPad: {
        top: 670,
        left: 36,
        width: 341,
        height: 56,
        position: "absolute"
    },
    next: {
        lineHeight: 24,
        color: "#fff",
        width: 263,
        fontFamily: "DM Sans",
        fontWeight: "700",
        fontSize: 14
    },
    nextParent: {
        marginLeft: -179,
        top: 779,
        left: "50%",
        borderRadius: 14,
        backgroundColor: "#130160",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1.2,
        width: 358,
        height: 48,
        alignItems: "center",
        paddingLeft: 17,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        gap: 37,
        borderStyle: "solid",
        flexDirection: "row",
        position: "absolute"
    },
    otpVerfication: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        width: "100%",
        height: 896,
        overflow: "hidden"
    },
    ball: {
        borderRadius: 100, // Makes the view circular
        backgroundColor: "#000", // Adjust color as needed
    },
});

export default OtpVerfication;
