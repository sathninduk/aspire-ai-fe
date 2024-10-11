import * as React from "react";
import { StyleSheet, View } from "react-native";

const ProgressBar1 = () => {

    return (
        <View style={styles.progressBar}>
            <View style={styles.progressBarChild} />
        </View>
    );
};

const styles = StyleSheet.create({
    progressBarChild: {
        position: "absolute",
        height: "100%",
        width: "50%",
        top: "0%",
        right: "50.16%",
        bottom: "0%",
        left: "-0.16%",
        borderRadius: 8,
        backgroundColor: "#6a41fe"
    },
    progressBar: {
        borderRadius: 4,
        backgroundColor: "#b1a1ef",
        flex: 1,
        width: "100%",
        height: 8,
        overflow: "hidden"
    }
});

export default ProgressBar1;
