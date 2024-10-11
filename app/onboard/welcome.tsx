import * as React from "react";
import {Text, StyleSheet, Image, View, Pressable, ActivityIndicator} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import {useNavigation, ParamListBase} from "@react-navigation/native";
import {useEffect} from "react";
import axios from "axios";
import {BACKEND_URL} from "@/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Welcome = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [userData, setUserData] = React.useState<any>({});
    const [firstName, setFirstName] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);

    const getUserData = async () => {
        setLoading(true);
        const number = await AsyncStorage.getItem("number");
        try {
            axios.get(`${BACKEND_URL}/user/${number}`).then((response) => {
                setUserData(response.data);
                setFirstName(response.data.name.split(' ')[0]);
            })
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUserData();
    }, []);

    const handleNext = () => {
        if (!loading && userData) {
            if (userData.isEmployed) {
                navigation.navigate("questions/jobber/step1");
            } else if (userData.isStudent) {
                navigation.navigate("questions/student/step1");
            } else if (userData.isJobSeeker) {
                navigation.navigate("questions/seeker/step1");
            }
        }
    }
    return (
        <View style={[styles.welcome, styles.iconLayout]}>
            <Text style={[styles.helloLouisWelcome, styles.nextTypo]}>{`Hello ${firstName}!\nWelcome to AspireAI`}</Text>
            <Pressable style={[styles.welcomeInner, styles.nextParentLayout]} onPress={handleNext}>
                <View style={[styles.nextParent, styles.nextParentLayout]}>
                    <Text style={[styles.next, styles.nextTypo]}>Next</Text>
                    {!loading ?
                    <Image style={styles.vectorIcon} resizeMode="cover" source={
                        require("@/assets/images/onboard/next.png")
                    } /> : <ActivityIndicator style={styles.vectorIcon} animating={true} color="#fff"/>}
                </View>
            </Pressable>
            <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
                <Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={
                    require("@/assets/images/onboard/back_arrow.png")
                } />
            </Pressable>
            <View style={styles.progressBar}>
                <View style={[styles.track, styles.barPosition]} />
                <View style={[styles.bar, styles.barPosition]} />
            </View>
            <Image style={styles.welcomeChild} resizeMode="cover" source={
                require("@/assets/images/onboard/profile.png")
            } />
            <View style={[styles.welcomeItem, styles.ball, {backgroundColor: "#130160"}]}/>
            <View style={[styles.ellipseIcon, styles.ball, {backgroundColor: "#6A41FF"}]}/>
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
    nextTypo: {
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    nextParentLayout: {
        height: 48,
        width: 350,
        position: "absolute"
    },
    barPosition: {
        left: "0%",
        right: "0%",
        top: "50%",
        marginTop: -4,
        height: 8,
        position: "absolute",
        width: "100%"
    },
    helloLouisWelcome: {
        marginLeft: -151,
        top: 367,
        left: "50%",
        fontSize: 30,
        color: "#0d0140",
        position: "absolute"
    },
    next: {
        fontSize: 14,
        lineHeight: 24,
        color: "#fff",
        width: 240
    },
    vectorIcon: {
        height: 32,
        width: 35,
    },
    nextParent: {
        top: 0,
        left: 0,
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
        gap: 58,
        backgroundColor: "#130160"
    },
    welcomeInner: {
        top: 791,
        left: 32
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
        borderRadius: 12,
        backgroundColor: "#d7c0fb"
    },
    bar: {
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
    welcomeChild: {
        top: 242,
        left: 159,
        width: 95,
        height: 95,
        position: "absolute"
    },
    welcomeItem: {
        top: 489,
        left: -113,
        width: 170,
        height: 132,
        position: "absolute"
    },
    ellipseIcon: {
        top: 108,
        left: 353,
        width: 115,
        height: 105,
        position: "absolute"
    },
    welcome: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        height: 896
    }
});

export default Welcome;
