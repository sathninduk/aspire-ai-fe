import * as React from "react";
import {Text, StyleSheet, Image, View, Pressable} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import {useNavigation, ParamListBase} from "@react-navigation/native";

const OnboadingChat = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <View style={[styles.onboadingChat5, styles.iconLayout]}>
            <View style={[styles.groupParent, styles.chat2Position]}>
                <Pressable style={[styles.frameWrapper, styles.nextParentLayout]} onPress={()=>{}}>
                    <View style={[styles.nextParent, styles.nextParentLayout]}>
                        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
                        {/*<Image style={styles.vectorIcon} resizeMode="cover" source="Vector.png" />*/}
                    </View>
                </Pressable>
                {/*<Image style={styles.groupChild} resizeMode="cover" source="Ellipse 151.png" />*/}
                {/*<Image style={styles.groupItem} resizeMode="cover" source="Ellipse 154.png" />*/}
            </View>
            <Text style={[styles.aspireai, styles.nextTypo]}>AspireAI</Text>
            <View style={[styles.chat2, styles.chat2Position]}>
                <Text style={[styles.whatKindOf, styles.whatKindOfTypo]}>What kind of roles or industries are you most interested in exploring?</Text>
            </View>
            <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
                {/*<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="back arrow.png" />*/}
            </Pressable>
            {/*<Image style={[styles.onboadingChat5Child, styles.chat2Position]} resizeMode="cover" source="Rectangle 61.png" />*/}
            <Text style={[styles.yourAnswer, styles.whatKindOfTypo]}>Your Answer</Text>
            {/*<Image style={styles.onboadingChat5Item} resizeMode="cover" source="Ellipse 152.png" />*/}
        </View>);
};

const styles = StyleSheet.create({
    iconLayout: {
        overflow: "hidden",
        width: "100%"
    },
    chat2Position: {
        left: 32,
        position: "absolute"
    },
    nextParentLayout: {
        height: 48,
        width: 350,
        left: 0,
        position: "absolute"
    },
    nextTypo: {
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    whatKindOfTypo: {
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
        top: 0
    },
    frameWrapper: {
        top: 278
    },
    groupChild: {
        left: 293,
        width: 178,
        height: 155,
        top: 0,
        position: "absolute"
    },
    groupItem: {
        top: 91,
        left: 248,
        width: 121,
        height: 124,
        position: "absolute"
    },
    groupParent: {
        top: 513,
        width: 471,
        height: 326
    },
    aspireai: {
        marginLeft: -57,
        top: 61,
        left: "50%",
        fontSize: 28,
        color: "#0d0140",
        position: "absolute"
    },
    whatKindOf: {
        fontSize: 13,
        color: "#524b6b",
        top: 0,
        width: 350,
        left: 0,
        fontFamily: "DM Sans"
    },
    chat2: {
        top: 234,
        height: 34,
        width: 350
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
    onboadingChat5Child: {
        top: 314,
        height: 98,
        borderRadius: 10,
        width: 350
    },
    yourAnswer: {
        top: 331,
        left: 68,
        fontSize: 12,
        color: "#aaa6b9",
        width: 183
    },
    onboadingChat5Item: {
        top: 534,
        left: -43,
        width: 94,
        height: 82,
        position: "absolute"
    },
    onboadingChat5: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        height: 896
    }
});

export default OnboadingChat;
