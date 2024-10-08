import * as React from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import Svg, {Path} from "react-native-svg";
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native';

const { width, height } = Dimensions.get('window');

const SignIn = () => {
    return (
        <View style={styles.signIn}>
            <Text style={styles.signIn1}>Sign In</Text>
            <Pressable style={styles.dontHaveAnContainer} onPress={() => {
            }}>
                <Text style={styles.textTypo}>
                    <Text style={styles.dontHaveAnAccountYet}>
                        <Text style={styles.dontHaveAn}>Don’t have an account yet ?</Text>
                        <Text style={styles.text1Typo}>{` `}</Text>
                    </Text>
                    <Text style={styles.text1Typo}>
                        <Text style={styles.sign}> Sign</Text>
                        <Text style={styles.up}> Up</Text>
                    </Text>
                </Text>
            </Pressable>
            <Pressable style={styles.verifyYourNumberWrapper} onPress={() => {
            }}>
                <Text style={[styles.verifyYourNumber, styles.text2Typo]}>Verify Your Number</Text>
            </Pressable>
            <View style={styles.signInInner}>
                <View style={styles.frameParent}>
                    <View style={[styles.wrapper, styles.parentBorder]}>
                        <TextInput
                            style={[styles.text2, styles.text2Typo]}
                            value="81313782"
                            editable={false}
                        />
                    </View>
                    <View style={[styles.parent, styles.parentBorder]}>
                        <TextInput
                            style={[styles.text2, styles.text2Typo]}
                            value="+94"
                            editable={false}
                        />
                        <Svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <Path d="M0 0.571568L6 7.42871L12 0.571568H0Z" fill="#130160"/>
                        </Svg>
                    </View>
                </View>
            </View>
            <Image style={styles.riarrowUpSLineIcon} resizeMode="cover"
                   source={require('@/assets/images/signin/arrow-up-s-line.svg')}/>
            <Text style={[styles.enterYourPhone, styles.textTypo]}>Enter your phone number to sign in</Text>

            <View style={[styles.signInChild, styles.signLayout, styles.ball, {
                backgroundColor: '#130160',
                borderRadius: 600
            }]}/>
            <View style={[styles.signInItem, styles.signLayout, styles.ball, {
                backgroundColor: '#6646E1',
                borderRadius: 600
            }]}/>
            <View style={[styles.ellipseIcon, styles.ball, {backgroundColor: '#6A41FF', borderRadius: 600}]}/>
            <View style={[styles.signInChild1, styles.ball, {backgroundColor: '#6A41FF', borderRadius: 600}]}/>
        </View>);
};

const styles = StyleSheet.create({
    text2Typo: {
        lineHeight: 24,
        fontSize: 14,
        textAlign: "left"
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
    textTypo: {
        fontSize: 14,
        textAlign: "left"
    },
    signLayout: {
        height: 207,
        width: 193,
        position: "absolute"
    },
    signIn1: {
        top: 461,
        fontSize: 28,
        color: "#0d0140",
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        left: 32,
        position: "absolute"
    },
    dontHaveAn: {
        fontFamily: "DM Sans"
    },
    text1Typo: {
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    dontHaveAnAccountYet: {
        color: "#524b6b"
    },
    sign: {
        color: "#150b3d"
    },
    up: {
        color: "#130160"
    },
    dontHaveAnContainer: {
        top: 504,
        left: 34,
        position: "absolute"
    },
    verifyYourNumber: {
        color: "#fff",
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    verifyYourNumberWrapper: {
        top: 710,
        borderRadius: 14,
        backgroundColor: "#130160",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1.2,
        paddingLeft: 17,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        alignItems: "center",
        flexDirection: "row",
        borderStyle: "solid",
        height: 48,
        width: "83%",
        left: 34,
        position: "absolute"
    },
    text2: {
        fontWeight: "500",
        fontFamily: "PlusJakartaSans-Medium",
        color: "#130160"
    },
    wrapper: {
        left: 85,
        borderBottomWidth: 1.2,
        width: "83%",
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
        width: 71,
        paddingHorizontal: 12,
        paddingVertical: 0,
        gap: 10,
        left: 0
    },
    frameParent: {
        left: 0,
        top: 0,
        height: 48,
        width: "100%",
        position: "absolute"
    },
    signInInner: {
        top: 620,
        height: 48,
        width: 311,
        left: 34,
        position: "absolute"
    },
    riarrowUpSLineIcon: {
        top: 718,
        left: 302,
        width: 35,
        height: 32,
        position: "absolute",
        overflow: "hidden"
    },
    enterYourPhone: {
        top: 588,
        fontFamily: "DM Sans",
        color: "#524b6b",
        left: 32,
        fontSize: 14,
        position: "absolute"
    },
    signInChild: {
        top: -70,
        left: 195
    },
    signInItem: {
        top: 13,
        left: 256
    },
    ellipseIcon: {
        top: 233,
        left: -103,
        width: 171,
        height: 159,
        position: "absolute"
    },
    signInChild1: {
        top: 374,
        left: 318,
        width: 115,
        height: 105,
        position: "absolute"
    },
    signIn: {
        borderRadius: 30,
        backgroundColor: "#f9f9f9",
        flex: 1,
        width: width,
        height: height,
        overflow: "hidden"
    },
    ball: {
        // borderRadius: 300, // Makes the view circular
        // width: 300, // Adjust size as needed
        // height: 300, // Adjust size as needed
    },
});

export default SignIn;
