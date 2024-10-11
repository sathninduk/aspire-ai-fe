import * as React from "react";
import {ActivityIndicator, Image, Pressable, StyleSheet, Text, View} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase, useNavigation} from "@react-navigation/native";
import axios from "axios";
import {BACKEND_URL} from "@/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {MD2Colors} from "react-native-paper";

const CurrentlyEmployed = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const [loading, setLoading] = React.useState(false);
    const [isEmployed, setIsEmployed] = React.useState(false);

    const handleEmployed = async () => {
        setLoading(true);
        const number = await AsyncStorage.getItem("number");
        try {
            axios.put(`${BACKEND_URL}/user/employed`, {
                number,
                isEmployed
            }).then(() => {
                if (isEmployed) {
                    navigation.navigate("onboard/employment-details");
                } else if (!isEmployed) {
                    navigation.navigate("onboard/check-status");
                }
            })
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={[styles.currentyEmployed, styles.iconLayout]}>
            <Text style={styles.areYouCurrently}>{`Are You Currently\nEmployed?`}</Text>
            <Pressable onPress={handleEmployed}>
                <View style={styles.frameParent}>
                    <View style={[styles.nextWrapper, styles.saveChildBg]}>
                        <Text style={styles.next}>Next</Text>
                    </View>
                    {!loading ?
                        <Image style={[styles.riarrowUpSLineIcon, styles.nextWrapperLayout]} resizeMode="cover"
                               source={require("@/assets/images/onboard/next.png")}/> :
                        <ActivityIndicator style={[styles.riarrowUpSLineIcon, styles.nextWrapperLayout]}
                                           animating={true} color={MD2Colors.white}/>
                    }
                </View>
            </Pressable>
            <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
                <Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={
                    require("@/assets/images/onboard/back_arrow.png")
                }/>
            </Pressable>
            <View style={[styles.currentyEmployedChild, styles.ball, {backgroundColor: "#130160"}]}/>
            <View style={[styles.currentyEmployedItem, styles.ball, {backgroundColor: "#6A41FF"}]}/>
            <View style={styles.buttonRemoveSave}>
                <Pressable style={[styles.save, styles.saveChildLayout]} onPress={() => setIsEmployed(false)}>
                    <View style={[
                        !isEmployed ? styles.removeChild : styles.saveChild, // inactive
                        styles.saveChildLayout,
                        {borderTopRightRadius: 14, borderBottomRightRadius: 14}
                    ]}/>
                    <Text style={[
                        isEmployed ? styles.no : styles.yes, // inactive
                        styles.noTypo]}>no</Text>
                </Pressable>
                <Pressable style={[styles.remove, styles.saveChildLayout]} onPress={() => setIsEmployed(true)}>
                    <View style={[
                        isEmployed ? styles.removeChild : styles.saveChild, // active
                        styles.saveChildLayout,
                        {borderTopLeftRadius: 14, borderBottomLeftRadius: 14}
                    ]}/>
                    <Text style={[
                        !isEmployed ? styles.no : styles.yes, // active
                        styles.noTypo]}>Yes</Text>
                </Pressable>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    ball: {
        borderRadius: 1000,
    },
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
        top: 155,
        left: 34,
        fontSize: 30,
        color: "#0d0140",
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
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
        top: 60,
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
        backgroundColor: "#d6cdfe",
        left: 0
    },
    no: {
        marginLeft: -11.53,
        color: "#7559ff",
    },
    save: {
        left: 173
    },
    removeChild: {
        backgroundColor: "#130160",
        left: 0,
        width: 175
    },
    yes: {
        marginLeft: -14.33,
        color: "#fff",
    },
    remove: {
        left: 0,
        width: 175
    },
    buttonRemoveSave: {
        top: 287,
        left: 33,
        width: 348,
        height: 50,
        position: "absolute",
        borderRadius: 14,
    },
    currentyEmployed: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        height: 896,
        overflow: "hidden"
    }
});

export default CurrentlyEmployed;
