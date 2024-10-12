import * as React from "react";
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

interface SpecializationProps {
    containerStyle?: StyleProp<ViewStyle>;
    selected?: boolean;
    title: string;  // Added title prop
    coursesCount: number;  // Added coursesCount prop
    icon: any;  // Icon source as a prop
}

const Specialization = ({ 
    containerStyle, 
    selected, 
    title, 
    coursesCount, 
    icon 
}: SpecializationProps) => {
    return (
        <View style={[styles.rectangleView, containerStyle, {
            backgroundColor: selected ? "#6a41ff" : "#f2f2f2" // Default background for unselected
        }]}>
            <Image style={styles.iconDesign} resizeMode="contain" source={icon} />
            <Text style={[styles.design, { color: selected ? "#fff" : "#150b3d" }]}>
                {title}
            </Text>
            <Text style={[styles.courses, { color: selected ? "#fff" : "#150b3d" }]}>
                {coursesCount} Courses
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    rectangleView: {
        borderRadius: 25,
        overflow: "hidden",
        padding: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    iconDesign: {
        width: 67,
        height: 67,
        marginBottom: 18,
    },
    design: {
        fontSize: 14,
        fontWeight: "700",
        fontFamily: "DMSans-Bold",
        textAlign: "center",
        marginBottom: 12,
    },
    courses: {
        fontSize: 12,
        fontFamily: "DMSans-Regular",
        textAlign: "center",
    },
});

export default Specialization;
