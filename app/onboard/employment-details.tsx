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
import {BACKEND_URL} from "@/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CurrentlyEmployedYes = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const [title, setTitle] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleEmpDetails = async () => {
        if (title === "" || company === "") {
            alert("Please enter your job title and company");
            return;
        }
        setLoading(true);
        const number = await AsyncStorage.getItem("number");
        try {
            axios.put(`${BACKEND_URL}/user/job-details`, {
                number,
                title,
                company
            }).then(() => {
                navigation.navigate("onboard/welcome");
            })
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.currentlyEmployedYes}>
                    <Text style={styles.enterYourEmployment}>{`Enter Your Employment Details`}</Text>
                    <Pressable style={[styles.frameParent, styles.frameParentLayout]} onPress={handleEmpDetails}>
                        <View style={[styles.nextWrapper, styles.whatsPosition]}>
                            <Text style={[styles.next, styles.whatsTypo]}>Next</Text>
                        </View>
                        {!loading ?
                            <Image style={[styles.riarrowUpSLineIcon, styles.riarrowUpSLineIconPosition]} resizeMode="cover"
                                   source={
                                       require("@/assets/images/onboard/next.png")
                                   }/> :
                            <ActivityIndicator style={[styles.riarrowUpSLineIcon, styles.riarrowUpSLineIconPosition]} animating={true} color="#fff"/>
                        }
                    </Pressable>
                    <Pressable style={[styles.backArrow, styles.backArrowPosition]} onPress={() => navigation.goBack()}>
                        <Image style={styles.icon} resizeMode="cover"
                               source={
                                   require("@/assets/images/onboard/back_arrow.png")
                               }
                        />
                    </Pressable>
                    <View style={[styles.email, styles.emailLayout]}>
                        <TextInput
                            style={[styles.emailChild, styles.whatsPosition, styles.inputStyle]}
                            keyboardType={"default"}
                            value={company}
                            onChangeText={setCompany}
                            placeholder="Enter your company"
                            placeholderTextColor="rgba(13,1,64,0.60)"
                        />
                        <Text style={[styles.whatsYourCompany, styles.whatsTypo]}>What’s Your Company ?</Text>
                    </View>
                    <View style={[styles.fullName, styles.emailLayout]}>
                        <Text style={[styles.whatsYourJob, styles.whatsTypo]}>What’s Your Job Title?</Text>
                        <TextInput
                            style={[styles.emailChild, styles.whatsPosition, styles.inputStyle]}
                            value={title}
                            onChangeText={setTitle}
                            placeholder="Enter your job title"
                            placeholderTextColor="rgba(13,1,64,0.60)"
                        />
                    </View>
                    <View style={styles.progressBar}>
                        <View style={[styles.track, styles.barPosition]}/>
                        <View style={[styles.bar, styles.barPosition]}/>
                    </View>
                    <View style={[styles.currentlyEmployedYesChild, styles.ball, {backgroundColor: "#130160"}]}/>
                    <View style={[styles.currentlyEmployedYesItem, styles.ball, {backgroundColor: "#6A41FF"}]}/>
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
    inputStyle: {
        fontSize: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "rgba(13,1,64,0.20)",
    },
    ball: {
        borderRadius: 1000
    },
    frameParentLayout: {
        height: 48,
        width: 350
    },
    whatsPosition: {
        left: 0,
        position: "absolute"
    },
    whatsTypo: {
        fontSize: 14,
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    riarrowUpSLineIconPosition: {
        top: 8,
        position: "absolute"
    },
    backArrowPosition: {
        left: 32,
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
        fontSize: 12,
        top: 43,
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
    enterYourEmployment: {
        top: 155,
        fontSize: 30,
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        color: "#0d0140",
        left: 32,
        position: "absolute"
    },
    next: {
        lineHeight: 24,
        color: "#fff"
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
        height: 48,
        width: 350
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
        top: 60,
        width: 28,
        height: 28
    },
    emailChild: {
        top: 26,
        height: 50,
        borderRadius: 10,
        left: 0,
        width: 350
    },
    ifs: {
        left: 17,
        width: 19
    },
    whatsYourCompany: {
        width: 239,
        left: 0,
        position: "absolute",
        top: 0,
        color: "#0d0140",
        fontSize: 14
    },
    email: {
        top: 384
    },
    softwareEngineer: {
        left: 33,
        width: 113
    },
    whatsYourJob: {
        width: 264,
        left: 0,
        position: "absolute",
        top: 0,
        color: "#0d0140",
        fontSize: 14
    },
    fullName: {
        top: 284
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
        top: 120,
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
