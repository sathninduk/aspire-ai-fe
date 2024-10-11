import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function ButtonTop({ text }: { text: string }) {
    return (
        <View style={styles.rectangleView}>
            <Text numberOfLines={1} style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rectangleView: {
        borderRadius: 8,
        backgroundColor: "#6a41ff",
        // flex: 1,
        padding:16,
        // width: "100%",
        // height: 40,
        opacity: 0.2,
        // justifyContent: "center",
        // alignItems: "center",
        // alignSelf: "flex-start"
    },
    text: {
        fontSize: 12,
        fontFamily: "DMSans-Regular",
        color: "#524b6b",
        textAlign: "center",
        width: 88,
        height: 17
    }
});

export default ButtonTop;