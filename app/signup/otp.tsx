import * as React from "react";
import {Text, StyleSheet, View, Image, Pressable} from "react-native";

const OtpVerification = () => {

    return (
        <View style={styles.otpVerfication}>
            <Text style={styles.verifyYourNumber}>Verify Your Number</Text>
            <Pressable style={styles.frameParent} onPress={()=>{}}>
                <View style={styles.nextWrapper}>
                    <Text style={[styles.next, styles.nextTypo]}>Next</Text>
                </View>
                {/*<Image style={styles.riarrowUpSLineIcon} resizeMode="cover" source="ri:arrow-up-s-line.png" />*/}
            </Pressable>
            <Text style={[styles.enterTheFour, styles.nextTypo]}>{`Enter the four  digit  code  sent to +62 81313782 `}</Text>
            {/*<Image style={[styles.otpVerficationChild, styles.otpLayout]} resizeMode="cover" source="Ellipse 152.png" />*/}
            {/*<Image style={styles.otpVerficationItem} resizeMode="cover" source="Ellipse 153.png" />*/}
            {/*<Image style={[styles.otpVerficationInner, styles.otpLayout]} resizeMode="cover" source="Ellipse 151.png" />*/}
            <View style={[styles.otpPad, styles.otpPadPosition]}>
                <View style={[styles.otpPadInner, styles.otpPosition]}>
                    <View style={[styles.frameChild, styles.frameBorder]} />
                </View>
                <View style={styles.otpPadChild}>
                    <View style={[styles.frameChild, styles.frameBorder]} />
                </View>
                <View style={[styles.frameView, styles.otpPosition]}>
                    <View style={styles.rectangleWrapper}>
                        <View style={[styles.frameInner, styles.frameBorder]} />
                    </View>
                </View>
                <View style={[styles.otpPadItem, styles.frameBorder]} />
            </View>
        </View>);
};

const styles = StyleSheet.create({
    nextTypo: {
        fontSize: 14,
        textAlign: "left"
    },
    otpLayout: {
        height: 207,
        width: 193,
        position: "absolute"
    },
    otpPadPosition: {
        left: 32,
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
        top: 557,
        fontSize: 28,
        color: "#0d0140",
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        left: 32,
        position: "absolute"
    },
    next: {
        lineHeight: 24,
        color: "#fff",
        fontFamily: "DM Sans",
        fontWeight: "700",
        fontSize: 14
    },
    nextWrapper: {
        backgroundColor: "#130160",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1.2,
        alignItems: "center",
        paddingLeft: 17,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        flexDirection: "row",
        borderStyle: "solid",
        borderRadius: 14,
        left: 0,
        top: 0,
        height: 48,
        width: 350,
        position: "absolute"
    },
    riarrowUpSLineIcon: {
        top: 8,
        left: 304,
        width: 35,
        height: 32,
        borderRadius: 14,
        position: "absolute",
        overflow: "hidden"
    },
    frameParent: {
        top: 790,
        height: 48,
        width: 350,
        left: 32,
        position: "absolute"
    },
    enterTheFour: {
        top: 598,
        fontFamily: "DM Sans",
        color: "#524b6b",
        left: 32,
        position: "absolute"
    },
    otpVerficationChild: {
        top: 29,
        left: -78
    },
    otpVerficationItem: {
        top: 236,
        left: 319,
        width: 171,
        height: 159,
        position: "absolute"
    },
    otpVerficationInner: {
        top: -74,
        left: -15
    },
    frameChild: {
        width: 66
    },
    otpPadInner: {
        left: 92,
        flexDirection: "row"
    },
    otpPadChild: {
        width: 66,
        flexDirection: "row",
        left: 0,
        top: 0,
        position: "absolute"
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
        top: 669,
        width: 341,
        height: 56
    },
    otpVerfication: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        width: "100%",
        height: 896,
        overflow: "hidden"
    }
});

export default OtpVerification;
