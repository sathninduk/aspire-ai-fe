import * as React from "react";
import {
    ActivityIndicator,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable, ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase, useNavigation} from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {BACKEND_URL} from "@/config";

const EnterYourDetails = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const [fullname, setFullname] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const submitName = async () => {
        if (fullname === "" || username === "") {
            alert("Please enter your full name and username");
            return;
        }
        setLoading(true);
        if (fullname.length === 0 || username.length === 0) {
            alert("Please enter your full name and username");
            setLoading(false);
        } else {
            try {
                const number = await AsyncStorage.getItem("number");
                axios.put(`${BACKEND_URL}/user/name`, {
                    number,
                    name: fullname,
                    username
                }).then((response) => {
                    navigation.navigate("onboard/check-employed");
                })
            } catch(e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.enterYourDetails}>
                    <View style={styles.progressBar}>
                        <View style={styles.track}/>
                        <View style={styles.bar}/>
                    </View>
                    <Pressable style={styles.frameParent} onPress={submitName}>
                        <View style={[styles.nextWrapper, styles.nextWrapperLayout]}>
                            <Text style={styles.next}>Next</Text>
                        </View>
                        {!loading ?
                        <Image style={[styles.riarrowUpSLineIcon, styles.nextWrapperLayout]} resizeMode="cover" source={
                            require("@/assets/images/onboard/next.png")
                        }/> : <ActivityIndicator style={[styles.riarrowUpSLineIcon, styles.nextWrapperLayout]} animating={true} color="#fff"/>
                        }
                    </Pressable>
                    <View style={styles.emailParent}>
                        <View style={styles.email}>
                            <Text style={[styles.whatsYourUsername, styles.whatsTypo]}>What’s Your Username ?</Text>
                            <TextInput
                                style={[styles.emailChild, styles.childLayout, styles.inputStyle]}
                                value={username}
                                onChangeText={setUsername}
                                placeholder="Enter your username"
                                placeholderTextColor="rgba(13,1,64,0.60)"
                                keyboardType={"default"}
                            />
                        </View>
                        <View style={styles.fullName}>
                            <Text style={[styles.whatsYourFull, styles.whatsTypo]}>What’s Your Full Name?</Text>
                            <TextInput
                                style={[
                                    styles.emailChild,
                                    styles.childLayout,
                                    styles.inputStyle
                                ]}
                                value={fullname}
                                onChangeText={setFullname}
                                placeholder="Enter your full name"
                                placeholderTextColor="rgba(13,1,64,0.60)"
                                keyboardType={"default"}
                            />
                        </View>
                        <Text style={[styles.enterYourDetails1, styles.whatsTypo]}>Enter Your Details</Text>
                        <Image style={styles.groupChild} resizeMode="cover" source={
                            require("@/assets/images/onboard/profile.png")
                        }/>
                        {/*<Image style={styles.groupItem} resizeMode="cover" source={*/}
                        {/*    require("@/assets/images/onboard/new_image.png")*/}
                        {/*}/>*/}
                    </View>
                    <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
                        <Image style={styles.icon} resizeMode="cover" source={
                            require("@/assets/images/onboard/back_arrow.png")
                        }/>
                    </Pressable>
                    <View style={[styles.enterYourDetailsChild, styles.ball, {backgroundColor: "#130160"}]}/>
                    <View style={[styles.enterYourDetailsItem, styles.ball, {backgroundColor: "#6A41FF"}]}/>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    ball: {
        borderRadius: 1000,
    },
    inputStyle: {
        fontSize: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "rgba(13,1,64,0.20)",
    },
    nextWrapperLayout: {
        borderRadius: 14,
        position: "absolute"
    },
    childLayout: {
        height: 50,
        borderRadius: 10,
        position: "absolute"
    },
    brandonelouisTypo: {
        color: "rgba(13, 1, 64, 0.6)",
        fontFamily: "DM Sans",
        fontSize: 12,
        textAlign: "left",
        position: "absolute"
    },
    whatsTypo: {
        color: "#0d0140",
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        top: 0,
        position: "absolute"
    },
    track: {
        right: "0%",
        borderRadius: 12,
        backgroundColor: "#d6cdfe",
        opacity: 0.1,
        left: "0%",
        top: "50%",
        marginTop: -4,
        height: 8,
        position: "absolute",
        width: "100%"
    },
    bar: {
        width: "13.81%",
        right: "86.19%",
        borderRadius: 8,
        backgroundColor: "#130160",
        left: "0%",
        top: "50%",
        marginTop: -4,
        height: 8,
        position: "absolute"
    },
    progressBar: {
        top: 120,
        height: 8,
        width: 352,
        left: 30,
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
        left: 0,
        top: 0,
        borderRadius: 14,
        height: 48,
        width: 347,
        backgroundColor: "#130160"
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
        height: 48,
        width: 347,
        position: "absolute"
    },
    emailChild: {
        top: 30,
        width: 350,
        left: 2
    },
    brandonelouis: {
        top: 47,
        left: 19,
        width: 88
    },
    whatsYourUsername: {
        fontSize: 14,
        color: "#0d0140",
        left: 0
    },
    email: {
        top: 318,
        height: 80,
        left: 0,
        width: 352,
        position: "absolute"
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
        fontSize: 14,
        color: "#0d0140",
        left: 0
    },
    fullName: {
        top: 218,
        height: 76,
        left: 0,
        width: 352,
        position: "absolute"
    },
    enterYourDetails1: {
        fontSize: 30,
        left: 2
    },
    groupChild: {
        top: 87,
        left: 131,
        width: 93,
        height: 93,
        position: "absolute"
    },
    groupItem: {
        marginLeft: 21,
        top: 156,
        left: "50%",
        width: 24,
        height: 24,
        position: "absolute"
    },
    emailParent: {
        top: 155,
        left: 31,
        height: 398,
        width: 352,
        position: "absolute"
    },
    icon: {
        height: "100%",
        borderRadius: 10,
        overflow: "hidden",
        width: "100%"
    },
    backArrow: {
        top: 60,
        width: 28,
        height: 28,
        left: 30,
        position: "absolute"
    },
    enterYourDetailsChild: {
        top: -94,
        left: 307,
        width: 193,
        height: 207,
        position: "absolute"
    },
    enterYourDetailsItem: {
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