import * as React from "react";
import {Text, StyleSheet, View, Image, Pressable} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import {useNavigation, ParamListBase} from "@react-navigation/native";

const CurrentlyEmployedYes = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <View style={styles.currentlyEmployedYes}>
            <Text style={[styles.enterYourEmployment, styles.nextTypo]}>{`Enter Your Employment Details`}</Text>
            <Pressable style={styles.frameParent} onPress={()=>{}}>
                <View style={[styles.nextWrapper, styles.emailChildPosition]}>
                    <Text style={[styles.next, styles.nextTypo]}>Next</Text>
                </View>
                {/*<Image style={[styles.riarrowUpSLineIcon, styles.riarrowUpSLineIconPosition]} resizeMode="cover" source="ri:arrow-up-s-line.png" />*/}
            </Pressable>
            <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
                {/*<Image style={styles.icon} resizeMode="cover" source="back arrow.png" />*/}
            </Pressable>
            <View style={[styles.email, styles.emailLayout]}>
                {/*<Image style={[styles.emailChild, styles.emailChildPosition]} resizeMode="cover" source="Rectangle 59.png" />*/}
                <Text style={[styles.ifs, styles.ifsTypo]}>{`IFS `}</Text>
                <Text style={[styles.whatsYourCompany, styles.whatsTypo]}>What’s Your Company ?</Text>
            </View>
            <View style={[styles.fullName, styles.emailLayout]}>
                {/*<Image style={[styles.emailChild, styles.emailChildPosition]} resizeMode="cover" source="Rectangle 59.png" />*/}
                <Text style={[styles.softwareEngineer, styles.ifsTypo]}>Software Engineer</Text>
                <Text style={[styles.whatsYourJob, styles.whatsTypo]}>What’s Your Job Title?</Text>
            </View>
            <View style={styles.progressBar}>
                <View style={[styles.track, styles.barPosition]} />
                <View style={[styles.bar, styles.barPosition]} />
            </View>
            {/*<Image style={styles.currentlyEmployedYesChild} resizeMode="cover" source="Ellipse 151.png" />*/}
            {/*<Image style={[styles.currentlyEmployedYesItem, styles.riarrowUpSLineIconPosition]} resizeMode="cover" source="Ellipse 154.png" />*/}
        </View>);
};

const styles = StyleSheet.create({
    nextTypo: {
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    emailChildPosition: {
        left: 0,
        width: 350,
        position: "absolute"
    },
    riarrowUpSLineIconPosition: {
        top: 8,
        position: "absolute"
    },
    emailLayout: {
        height: 76,
        width: 350,
        left: 32,
        position: "absolute"
    },
    ifsTypo: {
        color: "rgba(13, 1, 64, 0.6)",
        fontFamily: "DM Sans",
        top: 43,
        fontSize: 12,
        textAlign: "left",
        position: "absolute"
    },
    whatsTypo: {
        fontSize: 12,
        left: 0,
        top: 0,
        textAlign: "left",
        color: "#0d0140",
        fontFamily: "DM Sans",
        fontWeight: "700",
        position: "absolute"
    },
    barPosition: {
        left: "0%",
        top: "50%",
        marginTop: -4,
        height: 8,
        position: "absolute"
    },
    enterYourEmployment: {
        top: 126,
        fontSize: 30,
        color: "#0d0140",
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        left: 32,
        position: "absolute"
    },
    next: {
        fontSize: 14,
        lineHeight: 24,
        color: "#fff",
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700"
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
        backgroundColor: "#130160",
        borderRadius: 14,
        top: 0,
        left: 0,
        height: 48
    },
    riarrowUpSLineIcon: {
        left: 304,
        width: 35,
        height: 32,
        borderRadius: 14,
        overflow: "hidden"
    },
    frameParent: {
        top: 791,
        height: 48,
        width: 350,
        left: 32,
        position: "absolute"
    },
    icon: {
        height: "100%",
        borderRadius: 10,
        overflow: "hidden",
        width: "100%"
    },
    backArrow: {
        top: 18,
        width: 28,
        height: 28,
        left: 32,
        position: "absolute"
    },
    emailChild: {
        top: 26,
        height: 50,
        borderRadius: 10
    },
    ifs: {
        left: 17,
        width: 19
    },
    whatsYourCompany: {
        width: 155
    },
    email: {
        top: 343
    },
    softwareEngineer: {
        left: 33,
        width: 113
    },
    whatsYourJob: {
        width: 145
    },
    fullName: {
        top: 243
    },
    track: {
        right: "0%",
        borderRadius: 12,
        backgroundColor: "#aaa6b9",
        opacity: 0.1,
        width: "100%"
    },
    bar: {
        width: "66.17%",
        right: "33.83%",
        borderRadius: 8,
        backgroundColor: "#130160"
    },
    progressBar: {
        top: 68,
        height: 8,
        width: 350,
        left: 32,
        position: "absolute"
    },
    currentlyEmployedYesChild: {
        top: -119,
        left: 271,
        width: 193,
        height: 207,
        position: "absolute"
    },
    currentlyEmployedYesItem: {
        left: 360,
        width: 115,
        height: 105
    },
    currentlyEmployedYes: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        height: 896,
        overflow: "hidden",
        width: "100%"
    }
});

export default CurrentlyEmployedYes;
