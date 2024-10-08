import * as React from "react";
import {Text, StyleSheet, Image, View, Pressable} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import {useNavigation, ParamListBase} from "@react-navigation/native";

const OnboadingChat = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <View style={[styles.onboadingChat4, styles.iconLayout]}>
            <View style={styles.groupParent}>
                <Pressable style={[styles.groupWrapper, styles.wrapperLayout]} onPress={()=>{}}>
                    <Pressable style={[styles.frameWrapper, styles.groupItemPosition]} onPress={()=>{}}>
                        <View style={[styles.nextParent, styles.groupItemPosition]}>
                            <Text style={[styles.next, styles.nextTypo]}>Next</Text>
                            {/*/!*<Image style={styles.vectorIcon} resizeMode="cover" source="Vector.png" />*!/*/}
                        </View>
                    </Pressable>
                </Pressable>
                {/*<Image style={styles.groupChild} resizeMode="cover" source="Ellipse 154.png" />*/}
                {/*<Image style={[styles.groupItem, styles.groupItemPosition]} resizeMode="cover" source="Ellipse 151.png" />*/}
                {/*<Image style={styles.groupInner} resizeMode="cover" source="Ellipse 152.png" />*/}
            </View>
            <Text style={[styles.aspireai, styles.nextTypo]}>AspireAI</Text>
            <View style={[styles.chat2, styles.chat2Layout]}>
                {/*<Image style={[styles.chat2Child, styles.chat2Layout]} resizeMode="cover" source="Rectangle 98.png" />*/}
                <Text style={[styles.areYouInterested, styles.yourAnswerTypo]}>Are you interested in transitioning to a new field, advancing in your current role, or exploring different job opportunities?</Text>
            </View>
            <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
                {/*<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="back arrow.png" />*/}
            </Pressable>
            {/*<Image style={styles.onboadingChat4Child} resizeMode="cover" source="Rectangle 61.png" />*/}
            <Text style={[styles.yourAnswer, styles.yourAnswerTypo]}>Your Answer</Text>
        </View>);
};

const styles = StyleSheet.create({
    iconLayout: {
        overflow: "hidden",
        width: "100%"
    },
    wrapperLayout: {
        height: 48,
        width: 350,
        position: "absolute"
    },
    groupItemPosition: {
        top: 0,
        left: 0
    },
    nextTypo: {
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    chat2Layout: {
        height: 90,
        width: 350,
        position: "absolute"
    },
    yourAnswerTypo: {
        fontFamily: "DM Sans",
        textAlign: "left",
        position: "absolute"
    },
    next: {
        fontSize: 14,
        lineHeight: 24,
        color: "#fff",
        width: 261
    },
    vectorIcon: {
        width: 11,
        height: 17
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
        left: 0,
        height: 48,
        width: 350,
        position: "absolute"
    },
    groupWrapper: {
        top: 273,
        left: 93
    },
    groupChild: {
        top: 56,
        left: 138,
        width: 121,
        height: 124,
        position: "absolute"
    },
    groupItem: {
        width: 178,
        height: 155,
        left: 0,
        position: "absolute"
    },
    groupInner: {
        top: 26,
        left: 418,
        width: 94,
        height: 82,
        position: "absolute"
    },
    groupParent: {
        top: 518,
        left: -61,
        width: 512,
        height: 321,
        position: "absolute"
    },
    aspireai: {
        marginLeft: -57,
        top: 61,
        left: "50%",
        fontSize: 28,
        color: "#0d0140",
        position: "absolute"
    },
    chat2Child: {
        opacity: 0.1,
        left: 0,
        top: 0
    },
    areYouInterested: {
        top: 32,
        fontSize: 13,
        color: "#524b6b",
        left: 0,
        width: 350
    },
    chat2: {
        top: 201,
        left: 32
    },
    icon: {
        height: "100%",
        borderRadius: 10
    },
    backArrow: {
        left: 33,
        top: 21,
        width: 28,
        height: 28,
        position: "absolute"
    },
    onboadingChat4Child: {
        top: 314,
        height: 98,
        borderRadius: 10,
        left: 32,
        width: 350,
        position: "absolute"
    },
    yourAnswer: {
        top: 331,
        left: 68,
        fontSize: 12,
        color: "#aaa6b9",
        width: 183
    },
    onboadingChat4: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        height: 896
    }
});

export default OnboadingChat;
