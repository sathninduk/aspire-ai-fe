import * as React from "react";
import {Text, StyleSheet, Pressable, Image, View} from "react-native";

const SignUp = () => {

    return (
        <View style={styles.signUp}>
            <Text style={styles.createYourAccount}>Create Your Account</Text>
            <Pressable style={styles.alreadyHaveAnContainer} onPress={()=>{}}>
                <Text style={styles.textTypo}>
                    <Text style={styles.alreadyHaveAnAccountYet}>
                        <Text style={styles.alreadyHaveAn}>Already have an account yet ?</Text>
                        <Text style={styles.text1Typo}>{` `}</Text>
                    </Text>
                    <Text style={styles.text1Typo}>
                        <Text style={styles.sign}> Sign</Text>
                        <Text style={styles.in}> In</Text>
                    </Text>
                </Text>
            </Pressable>
            <Pressable style={styles.verifyYourNumberParent} onPress={()=>{}}>
                <Text style={[styles.verifyYourNumber, styles.text2Typo]}>Verify Your Number</Text>
                {/*<Image style={styles.riarrowUpSLineIcon} resizeMode="cover" source="ri:arrow-up-s-line.png" />*/}
            </Pressable>
            <Text style={[styles.enterYourPhone, styles.textTypo]}>Enter your phone number to get started</Text>
            {/*<Image style={[styles.signUpChild, styles.signLayout]} resizeMode="cover" source="Ellipse 151.png" />*/}
            {/*<Image style={[styles.signUpItem, styles.signLayout]} resizeMode="cover" source="Ellipse 152.png" />*/}
            {/*<Image style={styles.signUpInner} resizeMode="cover" source="Ellipse 153.png" />*/}
            {/*<Image style={styles.ellipseIcon} resizeMode="cover" source="Ellipse 154.png" />*/}
            <View style={[styles.frameView, styles.frameLayout]}>
                <View style={[styles.frameParent, styles.frameLayout]}>
                    <View style={[styles.wrapper, styles.parentBorder]}>
                        <Text style={[styles.text2, styles.text2Typo]}>81313782</Text>
                    </View>
                    <View style={[styles.parent, styles.parentBorder]}>
                        <Text style={[styles.text2, styles.text2Typo]}>+94</Text>
                        {/*<Image style={styles.subtractIcon} resizeMode="cover" source="Subtract.png" />*/}
                    </View>
                </View>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    text2Typo: {
        lineHeight: 24,
        fontSize: 14,
        textAlign: "left"
    },
    textTypo: {
        fontSize: 14,
        textAlign: "left"
    },
    signLayout: {
        height: 207,
        width: 193,
        position: "absolute"
    },
    frameLayout: {
        width: 344,
        height: 48,
        position: "absolute"
    },
    parentBorder: {
        borderColor: "#6a41ff",
        backgroundColor: "rgba(225, 217, 255, 0.3)",
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        top: 0,
        alignItems: "center",
        flexDirection: "row",
        height: 48,
        borderStyle: "solid",
        position: "absolute"
    },
    createYourAccount: {
        top: 528,
        fontSize: 28,
        color: "#0d0140",
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        left: 34,
        position: "absolute"
    },
    alreadyHaveAn: {
        fontFamily: "DM Sans"
    },
    text1Typo: {
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    alreadyHaveAnAccountYet: {
        color: "#524b6b"
    },
    sign: {
        color: "#150b3d"
    },
    in: {
        color: "#130160"
    },
    alreadyHaveAnContainer: {
        left: 36,
        top: 571,
        position: "absolute"
    },
    verifyYourNumber: {
        color: "#fff",
        width: 278,
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    riarrowUpSLineIcon: {
        width: 35,
        height: 32,
        overflow: "hidden"
    },
    verifyYourNumberParent: {
        marginLeft: -175,
        top: 790,
        left: "50%",
        borderRadius: 14,
        backgroundColor: "#130160",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1.2,
        width: 350,
        paddingLeft: 17,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        gap: 8,
        alignItems: "center",
        flexDirection: "row",
        height: 48,
        borderStyle: "solid",
        position: "absolute"
    },
    enterYourPhone: {
        top: 642,
        left: 32,
        fontFamily: "DM Sans",
        color: "#524b6b",
        position: "absolute"
    },
    signUpChild: {
        top: -61,
        left: 202
    },
    signUpItem: {
        left: 291,
        top: 0
    },
    signUpInner: {
        top: 231,
        left: -89,
        width: 171,
        height: 159,
        position: "absolute"
    },
    ellipseIcon: {
        top: 338,
        left: 344,
        width: 115,
        height: 105,
        position: "absolute"
    },
    text2: {
        fontWeight: "500",
        fontFamily: "PlusJakartaSans-Medium",
        color: "#130160"
    },
    wrapper: {
        left: 94,
        borderBottomWidth: 1.2,
        width: 250,
        paddingHorizontal: 16,
        paddingVertical: 8,
        overflow: "hidden"
    },
    subtractIcon: {
        width: 12,
        height: 7
    },
    parent: {
        borderBottomWidth: 1,
        width: 79,
        paddingHorizontal: 12,
        paddingVertical: 0,
        gap: 10,
        left: 0
    },
    frameParent: {
        left: 0,
        top: 0
    },
    frameView: {
        top: 677,
        left: 34,
        width: 344
    },
    signUp: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        width: "100%",
        height: 896,
        overflow: "hidden"
    }
});

export default SignUp;
