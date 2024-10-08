import * as React from "react";
import {Text, StyleSheet, Image, Pressable, View} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import {useNavigation, ParamListBase} from "@react-navigation/native";

const YourLadder = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <View style={[styles.yourLadder, styles.iconLayout]}>
            <Text style={styles.aspireai}>AspireAI</Text>
            <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
                {/*<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="back arrow.png" />*/}
            </Pressable>
            <Text style={styles.continueToSee}>Continue to see your pathway</Text>
            <Pressable style={styles.menuBar} onPress={()=>{}}>
                <View style={styles.applyPosition}>
                    {/*<Image style={[styles.applyNowChild, styles.applyPosition]} resizeMode="cover" source="Rectangle 10.png" />*/}
                    <Text style={styles.continue}>Continue</Text>
                </View>
            </Pressable>
            {/*<Image style={styles.yourLadderChild} resizeMode="cover" source="Ellipse 154.png" />*/}
            {/*<Image style={styles.yourLadderItem} resizeMode="cover" source="Ellipse 151.png" />*/}
            {/*<Image style={styles.yourLadderInner} resizeMode="cover" source="Ellipse 152.png" />*/}
        </View>);
};

const styles = StyleSheet.create({
    iconLayout: {
        overflow: "hidden",
        width: "100%"
    },
    applyPosition: {
        top: 0,
        marginLeft: -122.5,
        height: 50,
        width: 245,
        left: "50%",
        position: "absolute"
    },
    aspireai: {
        top: 73,
        left: 140,
        textAlign: "left",
        color: "#0d0140",
        fontFamily: "DM Sans",
        fontWeight: "700",
        fontSize: 28,
        position: "absolute"
    },
    icon: {
        borderRadius: 5,
        height: "100%"
    },
    backArrow: {
        left: 33,
        top: 21,
        width: 28,
        height: 28,
        position: "absolute"
    },
    continueToSee: {
        top: 362,
        left: 88,
        textAlign: "center",
        width: 238,
        color: "#0d0140",
        fontFamily: "DM Sans",
        fontWeight: "700",
        fontSize: 28,
        position: "absolute"
    },
    applyNowChild: {
        borderRadius: 14
    },
    continue: {
        marginTop: -9,
        marginLeft: -34.5,
        top: "50%",
        fontSize: 14,
        letterSpacing: 0.8,
        textTransform: "capitalize",
        color: "#fff",
        left: "50%",
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        position: "absolute"
    },
    menuBar: {
        marginLeft: -122,
        top: 479,
        height: 50,
        width: 245,
        left: "50%",
        position: "absolute"
    },
    yourLadderChild: {
        top: 743,
        left: 73,
        width: 121,
        height: 124,
        position: "absolute"
    },
    yourLadderItem: {
        top: 687,
        left: -65,
        width: 178,
        height: 155,
        position: "absolute"
    },
    yourLadderInner: {
        top: 546,
        left: 356,
        width: 94,
        height: 82,
        position: "absolute"
    },
    yourLadder: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        height: 896
    }
});

export default YourLadder;
