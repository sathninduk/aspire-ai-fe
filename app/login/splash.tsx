import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable} from "react-native";

const SplashScreen = () => {

    return (
        <View style={styles.splashScreen}>
            <Text style={styles.aiDrivenGuideToContainer}>
                <Text style={styles.blankLine}>{`AI-driven guide to personalized career\nsuccess`}</Text>
            </Text>
            <Text style={[styles.aspireaiIsYour, styles.continueTypo]}>{`AspireAI is your AI-powered career coach, offering personalized pathways and resources to help you\nachieve your professional goals.`}</Text>
            {/*<Image style={[styles.riarrowUpSLineIcon, styles.riarrowIconLayout]} resizeMode="cover" source="ri:arrow-up-s-line.png" />*/}
            <View style={[styles.splashScreenItem, styles.splashLayout, styles.ball, {backgroundColor: '#6646E1'}]} />
            <View style={[styles.splashScreenInner, styles.splashLayout, styles.ball, {backgroundColor: '#130160'}]} />
            <View style={[styles.ellipseIcon, styles.ball, {backgroundColor: '#6A41FF'}]} />
            <Pressable style={styles.continueParent} onPress={()=>{}}>
                <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
                {/*<Image style={styles.riarrowIconLayout} resizeMode="cover" source="ri:arrow-up-s-line.png" />*/}
            </Pressable>
        </View>);
};

const styles = StyleSheet.create({
    continueTypo: {
        fontSize: 14,
        textAlign: "left"
    },
    riarrowIconLayout: {
        height: 32,
        width: 35,
        overflow: "hidden"
    },
    splashLayout: {
        height: 207,
        width: 193,
        position: "absolute"
    },
    splashScreenChild: {
        top: -36,
        left: -1,
        width: 375,
        height: 849,
        display: "none",
        position: "absolute"
    },
    blankLine: {
        color: "#000"
    },
    aiDriven: {
        color: "#6a41ff"
    },
    aiDrivenGuideToContainer: {
        top: 463,
        left: 22,
        fontSize: 40,
        lineHeight: 38,
        width: 331,
        height: 147,
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        position: "absolute"
    },
    aspireaiIsYour: {
        top: 671,
        left: 24,
        fontFamily: "DM Sans",
        color: "#524b6b",
        position: "absolute"
    },
    riarrowUpSLineIcon: {
        top: 725,
        left: 336,
        position: "absolute"
    },
    splashScreenItem: {
        top: -70,
        left: -13
    },
    splashScreenInner: {
        top: 12,
        left: -96
    },
    ellipseIcon: {
        top: 283,
        left: 352,
        width: 115,
        height: 105,
        position: "absolute"
    },
    continue: {
        lineHeight: 24,
        color: "#fff",
        width: 263,
        fontFamily: "DM Sans",
        fontWeight: "700",
        fontSize: 14
    },
    continueParent: {
        marginLeft: -179,
        top: 791,
        left: "50%",
        borderRadius: 14,
        backgroundColor: "#130160",
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1.2,
        width: 358,
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 17,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        gap: 37,
        position: "absolute"
    },
    splashScreen: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        width: "100%",
        height: 896,
        overflow: "hidden"
    },
    ball: {
        borderRadius: 1000
    }
});

export default SplashScreen;
