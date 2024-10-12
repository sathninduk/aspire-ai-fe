import * as React from "react";
import { StyleSheet, View } from "react-native";

interface ProgressBarProps {
    progress: number; // Expecting a value between 0 and 100
}

const ProgressBar1: React.FC<ProgressBarProps> = ({ progress }) => {
    // Clamp the progress value to be between 0 and 100
    const clampedProgress = Math.min(Math.max(progress, 0), 100);

    return (
        <View style={styles.progressBar}>
            <View style={[styles.progressBarChild, { width: `${clampedProgress}%` }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    progressBarChild: {
        position: "absolute",
        height: "100%",
        top: 0,
        left: 0,
        borderRadius: 8,
        backgroundColor: "#6a41fe",
    },
    progressBar: {
        borderRadius: 4,
        backgroundColor: "#b1a1ef",
        flex: 1,
        width: "100%",
        height: 8,
        overflow: "hidden",
    },
});

export default ProgressBar1;
