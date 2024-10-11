import * as React from "react";
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

const Specialization = ({ containerStyle, selected }: { containerStyle?: StyleProp<ViewStyle>, selected?: boolean }) => {
    return (
        <View style={[styles.rectangleView, containerStyle, {
            backgroundColor: selected ? "#6a41ff" : ""
        }]}>
            <Image style={styles.iconDesign} resizeMode="contain" source={require("../../assets/images/icon_design.png")} />
            <Text style={[styles.design, { color: selected ? "#fff" : "#150b3d" }]}>Design</Text>
            <Text style={[styles.courses, { color: selected ? "#fff" : "#150b3d" }]}>140 Courses</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    rectangleView: {
        borderRadius: 25,
        overflow: "hidden",
        // backgroundColor: "#6a41ff",
        // flex: 1,
        // width: "100%",
        // height: 180,
        padding: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    iconDesign: {
        flex: 1,
        width: 67,
        height: 67,
        marginBottom: 18
    },
    design: {
        fontSize: 14,
        fontWeight: "700",
        fontFamily: "DMSans-Bold",
        // color: "#fff",
        textAlign: "center",
        marginBottom: 12
        // width: 50
    },
    courses: {
        fontSize: 12,
        fontFamily: "DMSans-Regular",
        // color: "#fff",
        textAlign: "center",
        width: 75
    }
});

export default Specialization;
