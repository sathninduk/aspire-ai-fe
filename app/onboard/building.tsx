import * as React from "react";
import {Text, StyleSheet, Image, Pressable, View} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import {useNavigation, ParamListBase} from "@react-navigation/native";

const BuildingYourLadder = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <View style={[styles.buildingYourLadder, styles.iconLayout]}>
            <Text style={styles.buildingYourPathway}>{`Building Your Pathway`}</Text>
            <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
                {/*<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="back arrow.png" />*/}
            </Pressable>
            {/*<Image style={styles.buildingYourLadderChild} resizeMode="cover" source="Frame 1.png" />*/}
        </View>);
};

const styles = StyleSheet.create({
    iconLayout: {
        width: "100%",
        overflow: "hidden"
    },
    buildingYourPathway: {
        top: 477,
        left: 88,
        fontSize: 28,
        fontWeight: "700",
        fontFamily: "DM Sans",
        color: "#0d0140",
        textAlign: "center",
        width: 238,
        position: "absolute"
    },
    icon: {
        borderRadius: 10,
        height: "100%",
        overflow: "hidden"
    },
    backArrow: {
        left: 33,
        top: 21,
        width: 28,
        height: 28,
        position: "absolute"
    },
    buildingYourLadderChild: {
        marginTop: -101,
        marginLeft: -49,
        top: "50%",
        left: "50%",
        borderRadius: 100,
        width: 100,
        height: 100,
        position: "absolute",
        overflow: "hidden"
    },
    buildingYourLadder: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        height: 896,
        overflow: "hidden"
    }
});

export default BuildingYourLadder;
