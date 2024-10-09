import * as React from "react";
import {Text, StyleSheet, Image, View, Pressable} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import {useNavigation, ParamListBase} from "@react-navigation/native";

const Preferences = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <View style={styles.preferences}>
            <View style={[styles.addEducation, styles.addEducationLayout]}>
                <Text style={[styles.myPreferences, styles.preferencesTypo]}>My Preferences</Text>
                <View style={[styles.jobTitle, styles.companyLayout]}>
                    {/*<Image style={[styles.jobTitleChild, styles.addEducationLayout]} resizeMode="cover" source="Rectangle 59.png" />*/}
                    <Text style={[styles.frontEndOrFullStack, styles.nextjsTypo]}>Front-end or full-stack roles.</Text>
                    <Text style={[styles.careerSituation, styles.preferredTypo]}>Career Situation</Text>
                </View>
                <View style={[styles.company, styles.companyLayout]}>
                    {/*<Image style={[styles.jobTitleChild, styles.addEducationLayout]} resizeMode="cover" source="Rectangle 59.png" />*/}
                    <Text style={[styles.nextjsReactFullStack, styles.nextjsTypo]}>Next.js, React, full-stack.</Text>
                    <Text style={[styles.skillsToDevelop, styles.preferredTypo]}>Skills to Develop</Text>
                </View>
                <View style={[styles.company1, styles.companyLayout]}>
                    {/*<Image style={[styles.jobTitleChild, styles.addEducationLayout]} resizeMode="cover" source="Rectangle 59.png" />*/}
                    <Text style={[styles.frontEndOrFullStack, styles.nextjsTypo]}>Front-end or full-stack roles.</Text>
                    <Text style={[styles.skillsToDevelop, styles.preferredTypo]}>Career Interests</Text>
                </View>
                <View style={[styles.company2, styles.companyLayout]}>
                    {/*<Image style={[styles.jobTitleChild, styles.addEducationLayout]} resizeMode="cover" source="Rectangle 59.png" />*/}
                    <Text style={[styles.techAndSoftware, styles.nextjsTypo]}>Tech and software.</Text>
                    <Text style={[styles.preferredIndustries, styles.preferredTypo]}>Preferred Industries</Text>
                </View>
                <View style={[styles.company3, styles.companyLayout]}>
                    {/*<Image style={[styles.jobTitleChild, styles.addEducationLayout]} resizeMode="cover" source="Rectangle 59.png" />*/}
                    <Text style={[styles.javaProjectsNextjs, styles.nextjsTypo]}>Java projects, Next.js, React.</Text>
                    <Text style={[styles.preferredCourses, styles.preferredTypo]}>Preferred Courses</Text>
                </View>
            </View>
            <Pressable style={[styles.back, styles.backLayout]} onPress={() => navigation.goBack()}>
                <View style={[styles.backChild, styles.backLayout]} />
                {/*<Image style={styles.backItem} resizeMode="cover" source="Arrow 1.png" />*/}
            </Pressable>
            <Pressable style={[styles.save, styles.saveLayout]} onPress={()=>{}}>
                <View style={[styles.saveChild, styles.saveLayout]} />
                <Text style={[styles.updatePreferences, styles.preferencesTypo]}>Update Preferences</Text>
            </Pressable>
        </View>);
};

const styles = StyleSheet.create({
    addEducationLayout: {
        width: 335,
        position: "absolute"
    },
    preferencesTypo: {
        textAlign: "left",
        fontFamily: "DMSans-Bold",
        fontWeight: "700",
        position: "absolute"
    },
    companyLayout: {
        height: 66,
        left: 0,
        width: 335,
        position: "absolute"
    },
    nextjsTypo: {
        color: "#524b6b",
        fontFamily: "DMSans-Regular",
        left: 24,
        top: 38,
        fontSize: 12,
        textAlign: "left",
        position: "absolute"
    },
    preferredTypo: {
        fontSize: 12,
        textAlign: "left",
        color: "#150b3d",
        fontFamily: "DMSans-Bold",
        fontWeight: "700",
        left: 0,
        top: 0,
        position: "absolute"
    },
    backLayout: {
        height: 24,
        position: "absolute"
    },
    saveLayout: {
        height: 50,
        width: 335,
        position: "absolute"
    },
    myPreferences: {
        fontSize: 16,
        width: 123,
        color: "#150b3d",
        textAlign: "left",
        fontFamily: "DMSans-Bold",
        fontWeight: "700",
        left: 0,
        top: 0
    },
    jobTitleChild: {
        top: 26,
        borderRadius: 10,
        height: 40,
        left: 0
    },
    frontEndOrFullStack: {
        width: 161
    },
    careerSituation: {
        width: 97
    },
    jobTitle: {
        top: 52
    },
    nextjsReactFullStack: {
        width: 136
    },
    skillsToDevelop: {
        width: 96
    },
    company: {
        top: 138
    },
    company1: {
        top: 224
    },
    techAndSoftware: {
        width: 105
    },
    preferredIndustries: {
        width: 118
    },
    company2: {
        top: 310
    },
    javaProjectsNextjs: {
        width: 157
    },
    preferredCourses: {
        width: 107
    },
    company3: {
        top: 396
    },
    addEducation: {
        top: 94,
        height: 462,
        left: 39
    },
    backChild: {
        left: 6,
        width: 24,
        top: 0
    },
    backItem: {
        top: 12,
        maxHeight: "100%",
        width: 18,
        left: 0,
        position: "absolute"
    },
    back: {
        top: 32,
        left: 20,
        width: 30
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
        borderRadius: 14,
        backgroundColor: "#130160",
        left: 0,
        top: 0
    },
    updatePreferences: {
        marginTop: -9,
        marginLeft: -75.5,
        top: "50%",
        left: "50%",
        fontSize: 14,
        letterSpacing: 0.8,
        textTransform: "capitalize",
        color: "#fff",
        width: 152,
        textAlign: "left",
        fontFamily: "DMSans-Bold",
        fontWeight: "700"
    },
    save: {
        top: 779,
        left: 39
    },
    preferences: {
        borderRadius: 30,
        backgroundColor: "#f9f9f9",
        flex: 1,
        width: "100%",
        height: 896,
        overflow: "hidden"
    }
});

export default Preferences;
