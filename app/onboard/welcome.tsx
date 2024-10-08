import * as React from "react";
import {Text, StyleSheet, Image, View, Pressable} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import {useNavigation, ParamListBase} from "@react-navigation/native";

const Welcome = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <View style={[styles.welcome, styles.iconLayout]}>
            <Text style={[styles.helloLouisWelcome, styles.nextTypo]}>{`Hello Louis\nWelcome to AspireAI`}</Text>
            <Pressable style={[styles.welcomeInner, styles.nextParentLayout]} onPress={()=>{}}>
                <View style={[styles.nextParent, styles.nextParentLayout]}>
                    <Text style={[styles.next, styles.nextTypo]}>Next</Text>
                    {/*<Image style={styles.vectorIcon} resizeMode="cover" source="Vector.png" />*/}
                </View>
            </Pressable>
            <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
                {/*<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="back arrow.png" />*/}
            </Pressable>
            <View style={styles.progressBar}>
                <View style={[styles.track, styles.barPosition]} />
                <View style={[styles.bar, styles.barPosition]} />
            </View>
            {/*<Image style={styles.welcomeChild} resizeMode="cover" source="Group 31.png" />*/}
            {/*<Image style={styles.welcomeItem} resizeMode="cover" source="Ellipse 151.png" />*/}
            {/*<Image style={styles.ellipseIcon} resizeMode="cover" source="Ellipse 154.png" />*/}
        </View>);
};

const styles = StyleSheet.create({
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
        top: 361,
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
        width: 11,
        height: 17
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
        top: 18,
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
        top: 68,
        height: 8,
        width: 350,
        left: 32,
        position: "absolute"
    },
    welcomeChild: {
        top: 234,
        left: 160,
        width: 93,
        height: 93,
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
