import * as React from "react";
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase, useNavigation} from "@react-navigation/native";

const OnboadingChat = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const handleNext = () => {
        navigation.navigate("questions/seeker/step2");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.onboadingChat1, styles.iconLayout]}>
                    <View style={styles.groupParent}>
                        <Pressable style={[styles.frameWrapper, styles.nextParentLayout]} onPress={handleNext}>
                            <View style={[styles.nextParent, styles.nextParentPosition]}>
                                <Text style={[styles.next, styles.nextTypo]}>Next</Text>
                                <Image style={styles.vectorIcon} resizeMode="cover" source={
                                    require("@/assets/images/onboard/next.png")
                                }/>
                            </View>
                        </Pressable>
                        <View style={[styles.groupChild, styles.ball, {backgroundColor: "#130160"}]}/>
                        <View style={[styles.groupItem, styles.ball, {backgroundColor: "#6A41FF"}]}/>
                        <View style={[styles.groupInner, styles.ball, {backgroundColor: "#6A41FF"}]}/>
                    </View>
                    <Text style={[styles.aspireai, styles.nextTypo]}>AspireAI</Text>
                    <View style={[styles.chat2, styles.chat2Layout]}>
                        <Text style={[styles.canYouBriefly, styles.nextTypo]}>What fields and areas have you studied and mastered?</Text>
                    </View>
                    <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
                        <Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={
                            require("@/assets/images/onboard/back_arrow.png")
                        }/>
                    </Pressable>
                    <TextInput
                        style={[styles.onboadingChat1Child, styles.canYouBrieflyLayout, styles.textArea]}
                        placeholder="Your Answer"
                        placeholderTextColor="#aaa6b9"
                        multiline={true}
                        numberOfLines={4}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    textArea: {
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
    iconLayout: {
        overflow: "hidden",
        width: "100%"
    },
    nextParentLayout: {
        height: 48,
        width: 350,
        position: "absolute"
    },
    nextParentPosition: {
        top: 0,
        left: 0
    },
    nextTypo: {
        fontFamily: "DM Sans",
        fontWeight: "700",
        textAlign: "left"
    },
    chat2Layout: {
        height: 71,
        width: 350,
        position: "absolute"
    },
    canYouBrieflyLayout: {
        width: 350,
        position: "absolute"
    },
    next: {
        lineHeight: 24,
        color: "#fff",
        width: 261,
        textAlign: "left",
        fontSize: 14,
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    vectorIcon: {
        height: 32,
        width: 35,
    },
    nextParent: {
        borderRadius: 14,
        backgroundColor: "#130160",
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1.2,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 17,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        gap: 37,
        left: 0,
        height: 48,
        width: 350,
        position: "absolute"
    },
    frameWrapper: {
        top: 270,
        left: 92
    },
    groupChild: {
        top: 36,
        width: 178,
        height: 166,
        left: 32,
        position: "absolute"
    },
    groupItem: {
        top: 64,
        left: 422,
        width: 94,
        height: 82,
        position: "absolute"
    },
    groupInner: {
        width: 121,
        height: 124,
        left: 0,
        position: "absolute"
    },
    groupParent: {
        top: 521,
        left: -60,
        width: 516,
        height: 318,
        position: "absolute"
    },
    aspireai: {
        marginLeft: -57,
        top: 53,
        left: "50%",
        fontSize: 28,
        color: "#0d0140",
        textAlign: "left",
        position: "absolute"
    },
    chat2Child: {
        opacity: 0.1,
        left: 0,
        top: 0
    },
    canYouBriefly: {
        top: 9,
        color: "#524b6b",
        textAlign: "left",
        fontSize: 16,
        fontFamily: "DM Sans",
        fontWeight: "700",
        left: 0,
        width: 350,
        position: "absolute"
    },
    chat2: {
        top: 228,
        left: 32
    },
    icon: {
        height: "100%",
        borderRadius: 10
    },
    backArrow: {
        top: 60,
        width: 28,
        height: 28,
        left: 32,
        position: "absolute"
    },
    onboadingChat1Child: {
        top: 314,
        height: 98,
        borderRadius: 10,
        left: 32
    },
    yourAnswer: {
        top: 331,
        left: 68,
        fontSize: 12,
        fontFamily: "DM Sans",
        color: "#aaa6b9",
        width: 183,
        textAlign: "left",
        position: "absolute"
    },
    onboadingChat1: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        height: 896
    }
});

export default OnboadingChat;
