import * as React from "react";
import {ActivityIndicator, Image, Pressable, StyleSheet, Text, View} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {BACKEND_URL} from "@/config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CurrentlyEmployedNo = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [isStudent, setIsStudent] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleStatus = async () => {
        setLoading(true);
        const number = await AsyncStorage.getItem("number");
        try {
            axios.put(`${BACKEND_URL}/user/status`, {
                number,
                isStudent,
                isJobSeeker: !isStudent
            }).then(() => {
                navigation.navigate("onboard/welcome");
            })
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={[styles.currentlyEmployedNo, styles.iconLayout]}>
            <Text style={styles.selectYourCurrent}>{`Select Your Current\nStatus`}</Text>
            <Pressable style={styles.currentlyEmployedNoInner} onPress={handleStatus}>
                <View style={styles.nextParent}>
                    <Text style={styles.next}>Next</Text>
                    {!loading ?
                        <Image style={styles.vectorIcon} resizeMode="cover"
                               source={
                                   require("@/assets/images/onboard/next.png")
                               }/> : <ActivityIndicator style={styles.vectorIcon} animating={true} color="#fff"/>}
                </View>
            </Pressable>
            <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
                <Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={
                    require("@/assets/images/onboard/back_arrow.png")
                }/>
            </Pressable>
            <View style={styles.progressBar}>
                <View style={[styles.track, styles.barPosition]}/>
                <View style={[styles.bar, styles.barPosition]}/>
            </View>
            <View style={[styles.currentlyEmployedNoChild, styles.ball, {backgroundColor: "#130160"}]}/>
            <View style={[styles.currentlyEmployedNoItem, styles.ball, {backgroundColor: "#6A41FF"}]}/>
            <View style={styles.buttonRemoveSave}>
                <Pressable style={[styles.save, styles.saveChildLayout]}
                           onPress={() => setIsStudent(false)}>
                    <View style={[
                        !isStudent ? styles.saveChild : styles.removeChild, // active
                        styles.saveChildLayout,
                        {borderTopRightRadius: 14, borderBottomRightRadius: 14}
                    ]}/>
                    <Text style={[
                        !isStudent ? styles.jobSeeker : styles.student, // active
                        styles.studentTypo, {marginLeft: -42}]}>Job Seeker</Text>
                </Pressable>
                <Pressable style={[styles.remove, styles.saveChildLayout]} onPress={() => setIsStudent(true)}>
                    <View style={[
                        isStudent ? styles.saveChild : styles.removeChild, // inactive
                        styles.saveChildLayout,
                        {borderTopLeftRadius: 14, borderBottomLeftRadius: 14}
                    ]}/>
                    <Text style={[
                        isStudent ? styles.jobSeeker : styles.student, // inactive
                        styles.studentTypo, {marginLeft: -30}]}>Studying</Text>
                </Pressable>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    ball: {
        borderRadius: 1000
    },
    iconLayout: {
        overflow: "hidden",
        width: "100%"
    },
    barPosition: {
        left: "0%",
        top: "50%",
        marginTop: -4,
        height: 8,
        position: "absolute"
    },
    saveChildLayout: {
        width: 160,
        height: 50,
        top: 0,
        position: "absolute"
    },
    studentTypo: {
        textTransform: "capitalize",
        letterSpacing: 0.8,
        left: "50%",
        marginTop: -9,
        top: "50%",
        fontSize: 14,
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        position: "absolute"
    },
    selectYourCurrent: {
        top: 155,
        fontSize: 30,
        color: "#0d0140",
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        left: 32,
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
    currentlyEmployedNoInner: {
        top: 791,
        height: 48,
        width: 350,
        left: 32,
        position: "absolute"
    },
    icon: {
        borderRadius: 10,
        height: "100%"
    },
    backArrow: {
        top: 60,
        width: 28,
        height: 28,
        left: 32,
        position: "absolute"
    },
    track: {
        right: "0%",
        borderRadius: 12,
        backgroundColor: "#aaa6b9",
        opacity: 0.1,
        width: "100%",
        top: "50%",
        marginTop: -4
    },
    bar: {
        width: "66.17%",
        right: "33.83%",
        borderRadius: 8,
        backgroundColor: "#130160"
    },
    progressBar: {
        top: 120,
        height: 8,
        width: 350,
        left: 32,
        position: "absolute"
    },
    currentlyEmployedNoChild: {
        top: -103,
        left: 293,
        width: 193,
        height: 207,
        position: "absolute"
    },
    currentlyEmployedNoItem: {
        top: 32,
        left: 352,
        width: 115,
        height: 105,
        position: "absolute"
    },
    saveChild: {
        shadowColor: "rgba(153, 171, 198, 0.18)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 62,
        elevation: 62,
        shadowOpacity: 1,
        backgroundColor: "#130160",
        left: 0
    },
    jobSeeker: {
        color: "#fff"
    },
    save: {
        left: 160
    },
    removeChild: {
        backgroundColor: "#d6cdfe",
        left: 0
    },
    student: {
        color: "#130160"
    },
    remove: {
        left: 0
    },
    buttonRemoveSave: {
        top: 286,
        left: 47,
        width: 320,
        height: 50,
        position: "absolute"
    },
    currentlyEmployedNo: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        height: 896
    }
});

export default CurrentlyEmployedNo;
