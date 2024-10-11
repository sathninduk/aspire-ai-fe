import * as React from "react";
import {useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

const BuildingYourLadder = () => {

    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const handleNext = () => {
        navigation.navigate("onboard/reveal-ladder");
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.buildingYourLadder}>
            <Text style={styles.buildingYourPathway}>{`Building Your\nPathway`}</Text>
            {/*<Image style={styles.buildingYourLadderChild} resizeMode="cover" source="Frame 1.png" />*/}
        </View>);
};

const styles = StyleSheet.create({
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
        width: "100%",
        height: 896,
        overflow: "hidden"
    }
});

export default BuildingYourLadder;
