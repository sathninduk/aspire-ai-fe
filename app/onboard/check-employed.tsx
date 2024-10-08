import * as React from "react";
import {Text, StyleSheet, View, Image, Pressable} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import {useNavigation, ParamListBase} from "@react-navigation/native";

const CurrentyEmployed = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <View style={[styles.currentyEmployed, styles.iconLayout]}>
            <Text style={styles.areYouCurrently}>{`Are You Currently
          					Employed ?`}</Text>
            <View style={styles.frameParent}>
                <View style={[styles.nextWrapper, styles.saveChildBg]}>
                    <Text style={styles.next}>Next</Text>
                </View>
                {/*<Image style={[styles.riarrowUpSLineIcon, styles.nextWrapperLayout]} resizeMode="cover" source="ri:arrow-up-s-line.png" />*/}
            </View>
            <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
                {/*<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="back arrow.png" />*/}
            </Pressable>
            {/*<Image style={styles.currentyEmployedChild} resizeMode="cover" source="Ellipse 151.png" />*/}
            {/*<Image style={styles.currentyEmployedItem} resizeMode="cover" source="Ellipse 154.png" />*/}
            <View style={styles.buttonRemoveSave}>
                <Pressable style={[styles.save, styles.saveChildLayout]} onPress={()=>{}}>
                    <View style={[styles.saveChild, styles.saveChildLayout]} />
                    <Text style={[styles.no, styles.noTypo]}>no</Text>
                </Pressable>
                <Pressable style={[styles.remove, styles.saveChildLayout]} onPress={()=>{}}>
                    <View style={[styles.removeChild, styles.saveChildLayout]} />
                    <Text style={[styles.yes, styles.noTypo]}>Yes</Text>
                </Pressable>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    iconLayout: {
        width: "100%",
        overflow: "hidden"
    },
    saveChildBg: {
        backgroundColor: "#130160",
        left: 0
    },
    nextWrapperLayout: {
        borderRadius: 14,
        position: "absolute"
    },
    saveChildLayout: {
        width: 175,
        height: 50,
        top: 0,
        position: "absolute"
    },
    noTypo: {
        textTransform: "capitalize",
        letterSpacing: 0.8,
        left: "50%",
        top: "50%",
        marginTop: -9,
        fontSize: 14,
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        position: "absolute"
    },
    areYouCurrently: {
        top: 127,
        fontSize: 30,
        color: "#0d0140",
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        left: 34,
        position: "absolute"
    },
    next: {
        lineHeight: 24,
        color: "#fff",
        fontSize: 14,
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    nextWrapper: {
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1.2,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 17,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        borderRadius: 14,
        position: "absolute",
        top: 0,
        backgroundColor: "#130160",
        height: 48,
        width: 350
    },
    riarrowUpSLineIcon: {
        top: 8,
        left: 314,
        width: 36,
        height: 32,
        overflow: "hidden"
    },
    frameParent: {
        top: 791,
        height: 48,
        width: 350,
        left: 32,
        position: "absolute"
    },
    icon: {
        borderRadius: 10,
        height: "100%",
        overflow: "hidden"
    },
    backArrow: {
        top: 18,
        height: 28,
        width: 28,
        left: 32,
        position: "absolute"
    },
    currentyEmployedChild: {
        top: -98,
        left: 291,
        width: 193,
        height: 207,
        position: "absolute"
    },
    currentyEmployedItem: {
        top: 39,
        left: 351,
        width: 115,
        height: 105,
        position: "absolute"
    },
    saveChild: {
        shadowColor: "rgba(153, 171, 198, 0.18)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 62,
        elevation: 62,
        shadowOpacity: 1,
        borderTopRightRadius: 14,
        borderBottomRightRadius: 14,
        backgroundColor: "#130160",
        left: 0
    },
    no: {
        marginLeft: -11.53,
        width: 23,
        color: "#fff"
    },
    save: {
        left: 173
    },
    removeChild: {
        borderTopLeftRadius: 14,
        borderBottomLeftRadius: 14,
        backgroundColor: "#d6cdfe",
        left: 0,
        width: 175
    },
    yes: {
        marginLeft: -14.33,
        color: "#130160",
        width: 28
    },
    remove: {
        left: 0,
        width: 175
    },
    buttonRemoveSave: {
        top: 272,
        width: 348,
        height: 50,
        left: 34,
        position: "absolute"
    },
    currentyEmployed: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        height: 896,
        overflow: "hidden"
    }
});

export default CurrentyEmployed;
