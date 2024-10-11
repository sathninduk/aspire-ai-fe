import * as React from "react";
import { useState } from "react";
import {
    ActivityIndicator,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import { formatPhoneNumber } from "react-phone-number-input";
import axios from "axios";
import {BACKEND_URL} from "@/config";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

const SignIn = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const checkNumber = () => {
        setLoading(true);
        try {
            axios.get(`${BACKEND_URL}/user/${phoneNumber}`).then((res) => {
                navigation.navigate("login/otp", { number: phoneNumber });
            }).catch((err) => {
                if (err.message === "Request failed with status code 404") {
                    setError("Unregistered phone number");
                }
            });
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const handleSignupLink = () => {
        navigation.navigate("signup");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.signIn}>
                    <Text style={styles.signIn1}>Sign In</Text>
                    <Pressable style={styles.dontHaveAnContainer} onPress={() => {}}>
                        <Text style={styles.textTypo}>
                            <Text style={styles.dontHaveAnAccountYet}>
                                <Text style={styles.dontHaveAn}>Don’t have an account yet?</Text>
                                <Text style={styles.text1Typo}>{` `}</Text>
                            </Text>
                            <Text style={styles.text1Typo} onPress={handleSignupLink}>
                                <Text style={styles.sign}> Sign Up</Text>
                            </Text>
                        </Text>
                    </Pressable>
                    <View style={styles.signInInner}>
                        <View style={styles.frameParent}>
                            <TextInput
                                style={[
                                    styles.emailChild,
                                    styles.childLayout,
                                    styles.inputStyle
                                ]}
                                placeholder="Enter your phone number"
                                placeholderTextColor="rgba(13,1,64,0.60)"
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                                keyboardType="phone-pad"
                            />
                        </View>
                    </View>
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
                    <Pressable style={[styles.verifyYourNumberParent, styles.parentFlexBox]} onPress={checkNumber}>
                        <Text style={[styles.verifyYourNumber, styles.text2Typo]}>Verify Your Number</Text>
                        {!loading ?
                        <Image style={styles.riarrowIconLayout} resizeMode="cover"
                               source={require('@/assets/images/signin/arrow-up-s-line.svg')}/>
                            :
                            <ActivityIndicator style={styles.riarrowIconLayout} animating={true} color="#fff"/>}
                    </Pressable>
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
    parentFlexBox: {
        alignItems: "center",
        flexDirection: "row",
        borderStyle: "solid",
        height: 48,
        position: "absolute"
    },
    text2Typo: {
        lineHeight: 24,
        fontSize: 14,
        textAlign: "left"
    },
    riarrowIconLayout: {
        height: 32,
        width: 35,
        overflow: "hidden"
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
    emailChild: {
        top: 0,
        width: 350,
        left: 2
    },
    childLayout: {
        height: 50,
        borderRadius: 10,
        position: "absolute"
    },
    inputStyle: {
        fontSize: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "rgba(13,1,64,0.20)",
    },
    signIn: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        width: "100%",
        height: 896,
        overflow: "hidden"
    },
    signIn1: {
        top: 529,
        fontSize: 28,
        color: "#0d0140",
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        left: 28,
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
        left: 30,
        top: 572,
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
        width: 270,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderColor: "#6a41ff",
        backgroundColor: "rgba(225, 217, 255, 0.3)",
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        flexDirection: "row",
        borderStyle: "solid",
        top: 0,
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
        borderColor: "#6a41ff",
        backgroundColor: "rgba(225, 217, 255, 0.3)",
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        flexDirection: "row",
        borderStyle: "solid",
        top: 0,
        left: 0
    },
    frameParent: {
        width: 355,
        left: 0,
        top: 0,
        height: 48,
        position: "absolute"
    },
    signInInner: {
        top: 678,
        width: 311,
        height: 48,
        left: 28,
        position: "absolute"
    },
    riarrowUpSLineIcon: {
        top: 718,
        left: 336,
        position: "absolute"
    },
    enterYourPhone: {
        top: 639,
        fontFamily: "DM Sans",
        color: "#524b6b",
        left: 28,
        fontSize: 14,
        position: "absolute"
    },
    signInChild: {
        top: -70,
        left: 214
    },
    signInItem: {
        top: 13,
        left: 281
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
        left: 352,
        width: 115,
        height: 105,
        position: "absolute"
    },
    verifyYourNumber: {
        color: "#fff",
        width: 263,
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    verifyYourNumberParent: {
        marginLeft: -179,
        top: 791,
        left: "50%",
        borderRadius: 14,
        backgroundColor: "#130160",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1.2,
        width: 358,
        paddingLeft: 17,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        gap: 37,
        flexDirection: "row",
        borderStyle: "solid"
    },
    ball: {
        borderRadius: 1000
    }
});

export default SignIn;