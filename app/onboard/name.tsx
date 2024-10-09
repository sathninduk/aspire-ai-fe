import * as React from "react";
import {Image, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase, useNavigation} from "@react-navigation/native";

const EnterYourDetails = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <View style={styles.enterYourDetails}>
            <View style={[styles.fullName, styles.emailPosition]}>
                <Text style={[styles.brandoneLouis, styles.brandonelouisTypo]}>{`Brandone Louis`}</Text>
                <Text style={[styles.whatsYourFull, styles.whatsTypo]}>What’s Your Full Name?</Text>
            </View>
            <View style={[styles.email, styles.emailPosition]}>
                <Text style={[styles.whatsYourUsername, styles.whatsTypo]}>What’s Your Username ?</Text>
                <TextInput style={[styles.emailChild, styles.childLayout, styles.inputStyle]}
                           placeholder="Enter your username"
                           placeholderTextColor="rgba(13,1,64,0.60)"
                />
            </View>
            <Text style={[styles.enterYourDetails1, styles.whatsTypo]}>Enter Your Details</Text>
            <View style={styles.progressBar}>
                <View style={[styles.track, styles.barPosition]}/>
                <View style={[styles.bar, styles.barPosition]}/>
            </View>
            <Pressable style={[styles.frameParent, styles.frameParentLayout]} onPress={() => {
            }}>
                <View style={[styles.nextWrapper, styles.nextWrapperLayout]}>
                    <Text style={styles.next}>Next</Text>
                </View>
                <Image style={[styles.riarrowUpSLineIcon, styles.nextWrapperLayout]} resizeMode="cover"
                       source={require('@/assets/images/onboard/next.svg')}
                />
            </Pressable>
            <Image style={styles.enterYourDetailsChild} resizeMode="cover"
                   source={require('@/assets/images/onboard/profile.svg')}
            />
            <Image style={styles.enterYourDetailsItem} resizeMode="cover"
                   source={require('@/assets/images/onboard/new_image.svg')}
            />
            <Pressable style={[styles.backArrow, styles.emailPosition]} onPress={() => navigation.goBack()}>
                <Image style={styles.icon} resizeMode="cover"
                       source={require('@/assets/images/onboard/back_arrow.svg')}
                />
            </Pressable>
            <View style={[styles.enterYourDetailsInner, styles.ball, {backgroundColor: "#130160"}]}/>
            <View style={[styles.ellipseIcon, styles.ball, {backgroundColor: "#6A41FF"}]}/>
        </View>);
};

const styles = StyleSheet.create({
    inputStyle: {
        padding: 20,
        fontSize: 12,
    },
    ball: {
        borderRadius: 1000,
    },
    emailPosition: {
        left: 30,
        position: "absolute",
    },
    childLayout: {
        height: 50,
        borderRadius: 10,
        position: "absolute"
    },
    brandonelouisTypo: {
        textAlign: "left",
        color: "rgba(13, 1, 64, 0.6)",
        fontFamily: "DM Sans",
        fontSize: 12,
        position: "absolute"
    },
    whatsTypo: {
        color: "#0d0140",
        fontFamily: "DM Sans",
        fontWeight: "700",
        textAlign: "left",
        position: "absolute"
    },
    barPosition: {
        left: "0%",
        top: "50%",
        marginTop: -4,
        height: 8,
        position: "absolute"
    },
    frameParentLayout: {
        height: 48,
        width: 347
    },
    nextWrapperLayout: {
        borderRadius: 14,
        position: "absolute"
    },
    emailChild: {
        top: 30,
        left: 2,
        width: 350
    },
    brandonelouis: {
        top: 47,
        left: 19,
        width: 88
    },
    whatsYourUsername: {
        width: 158,
        left: 0,
        top: 0,
        fontSize: 12,
        color: "#0d0140"
    },
    email: {
        top: 448,
        height: 80,
        width: 352
    },
    fullNameChild: {
        top: 26,
        left: 0,
        width: 352
    },
    brandoneLouis: {
        top: 43,
        left: 28,
        width: 96
    },
    whatsYourFull: {
        width: 153,
        left: 0,
        top: 0,
        fontSize: 12,
        color: "#0d0140"
    },
    fullName: {
        top: 348,
        height: 76,
        width: 352
    },
    enterYourDetails1: {
        top: 130,
        left: 32,
        fontSize: 30
    },
    track: {
        right: "0%",
        borderRadius: 12,
        backgroundColor: "#d6cdfe",
        opacity: 0.1,
        width: "100%"
    },
    bar: {
        width: "13.81%",
        right: "86.19%",
        borderRadius: 8,
        backgroundColor: "#130160"
    },
    progressBar: {
        top: 74,
        height: 8,
        width: 352,
        left: 30,
        position: "absolute"
    },
    next: {
        fontSize: 14,
        lineHeight: 24,
        color: "#fff",
        fontFamily: "DM Sans",
        fontWeight: "700",
        textAlign: "left"
    },
    nextWrapper: {
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1.2,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 17,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        height: 48,
        width: 347,
        backgroundColor: "#130160",
        left: 0,
        top: 0
    },
    riarrowUpSLineIcon: {
        top: 8,
        left: 311,
        width: 36,
        height: 32,
        overflow: "hidden"
    },
    frameParent: {
        top: 791,
        left: 35,
        position: "absolute"
    },
    enterYourDetailsChild: {
        top: 217,
        left: 161,
        width: 93,
        height: 93,
        position: "absolute"
    },
    enterYourDetailsItem: {
        marginLeft: 20,
        top: 286,
        left: "50%",
        width: 24,
        height: 24,
        position: "absolute"
    },
    icon: {
        height: "100%",
        borderRadius: 10,
        overflow: "hidden",
        width: "100%"
    },
    backArrow: {
        top: 22,
        width: 28,
        height: 28
    },
    enterYourDetailsInner: {
        top: -94,
        left: 307,
        width: 193,
        height: 207,
        position: "absolute"
    },
    ellipseIcon: {
        top: 50,
        left: 351,
        width: 115,
        height: 105,
        position: "absolute"
    },
    enterYourDetails: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        height: 896,
        overflow: "hidden",
        width: "100%"
    }
});

export default EnterYourDetails;
