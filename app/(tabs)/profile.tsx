import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

const Logout = () => {

    return (
        <View style={styles.logout}>
            <View style={[styles.workExperience, styles.resumeLayout]}>
                {/*<Image style={[styles.workExperienceChild, styles.childPosition]} resizeMode="cover" source="Rectangle 162.png" />*/}
                <Text style={[styles.workExperience1, styles.preferencesPosition]}>Work experience</Text>
                {/*<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="Icon.png" />*/}
            </View>
            <View style={[styles.aboutMe, styles.resumeLayout]}>
                {/*<Image style={[styles.workExperienceChild, styles.childPosition]} resizeMode="cover" source="Rectangle 162.png" />*/}
                <Text style={[styles.workExperience1, styles.preferencesPosition]}>About me</Text>
                {/*<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="Icon.png" />*/}
            </View>
            <View style={[styles.education, styles.resumeLayout]}>
                {/*<Image style={[styles.workExperienceChild, styles.childPosition]} resizeMode="cover" source="Rectangle 162.png" />*/}
                <Text style={[styles.workExperience1, styles.preferencesPosition]}>Education</Text>
                {/*<Image style={styles.icon2} resizeMode="cover" source="Icon.png" />*/}
            </View>
            <View style={[styles.skill, styles.resumeLayout]}>
                {/*<Image style={[styles.workExperienceChild, styles.childPosition]} resizeMode="cover" source="Rectangle 162.png" />*/}
                <Text style={[styles.workExperience1, styles.preferencesPosition]}>Skill</Text>
                {/*<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="Icon.png" />*/}
            </View>
            <View style={[styles.resume, styles.resumeLayout]}>
                {/*<Image style={[styles.workExperienceChild, styles.childPosition]} resizeMode="cover" source="Rectangle 162.png" />*/}
                <Text style={[styles.workExperience1, styles.preferencesPosition]}>Preferences</Text>
                {/*<Image style={[styles.icon4, styles.iconPosition]} resizeMode="cover" source="Icon.png" />*/}
            </View>
            <View style={[styles.resume1, styles.resumeLayout]}>
                {/*<Image style={[styles.workExperienceChild, styles.childPosition]} resizeMode="cover" source="Rectangle 162.png" />*/}
                <Text style={[styles.workExperience1, styles.preferencesPosition]}>Logout</Text>
                {/*<Image style={[styles.icon5, styles.iconPosition]} resizeMode="cover" source="Icon.png" />*/}
            </View>
            <View style={[styles.backgroundParent, styles.menuBarIconPosition]}>
                {/*<Image style={[styles.backgroundParent, styles.menuBarIconPosition]} resizeMode="cover" source="Background.png" />*/}
                {/*<Image style={styles.maskGroupIcon} resizeMode="cover" source="Mask group.png" />*/}
                <Text style={styles.sathninduKottage}>Sathnindu Kottage</Text>
                <Text style={[styles.colomboSriLanka, styles.editProfile1Typo]}>Colombo, Sri Lanka</Text>
                <View style={[styles.editProfile, styles.editLayout]}>
                    {/*<Image style={[styles.editProfileChild, styles.editLayout]} resizeMode="cover" source="Rectangle 161.png" />*/}
                    <Text style={[styles.editProfile1, styles.editProfile1Typo]}>Edit profile</Text>
                    {/*<Image style={[styles.editIcon, styles.iconLayout]} resizeMode="cover" source="Edit.png" />*/}
                </View>
            </View>
            {/*<Image style={[styles.menuBarIcon, styles.menuBarIconPosition]} resizeMode="cover" source="Menu bar.png" />*/}
        </View>);
};

const styles = StyleSheet.create({
    resumeLayout: {
        height: 70,
        width: 359,
        position: "absolute"
    },
    childPosition: {
        left: 0,
        top: 0
    },
    preferencesPosition: {
        textAlign: "left",
        color: "#150b3d",
        fontSize: 14,
        left: 54,
        top: 25,
        position: "absolute"
    },
    iconLayout: {
        height: 24,
        width: 24,
        position: "absolute"
    },
    iconPosition: {
        height: 19,
        left: 25,
        top: 25,
        position: "absolute"
    },
    menuBarIconPosition: {
        width: 414,
        left: 0,
        position: "absolute"
    },
    editProfile1Typo: {
        fontFamily: "DM Sans",
        fontSize: 12,
        color: "#fff",
        textAlign: "left",
        position: "absolute"
    },
    editLayout: {
        height: 30,
        width: 120,
        position: "absolute"
    },
    workExperienceChild: {
        borderRadius: 15,
        height: 70,
        width: 359,
        position: "absolute"
    },
    workExperience1: {
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    icon: {
        top: 23,
        left: 20,
        height: 24
    },
    workExperience: {
        top: 335,
        left: 28,
        width: 359
    },
    aboutMe: {
        top: 255,
        left: 28,
        width: 359
    },
    icon2: {
        top: 21,
        height: 26,
        width: 24,
        left: 20,
        position: "absolute"
    },
    education: {
        top: 415,
        left: 28,
        width: 359
    },
    skill: {
        top: 495,
        left: 28,
        width: 359
    },
    preferences: {
        fontWeight: "600",
        fontFamily: "OpenSans-SemiBold"
    },
    icon4: {
        width: 14
    },
    resume: {
        top: 576,
        left: 28,
        width: 359
    },
    icon5: {
        width: 19
    },
    resume1: {
        top: 656,
        left: 28,
        width: 359
    },
    backgroundParent: {
        height: 220,
        top: 0,
        width: 414
    },
    maskGroupIcon: {
        top: 43,
        width: 50,
        height: 50,
        left: 27,
        position: "absolute"
    },
    sathninduKottage: {
        top: 100,
        lineHeight: 28,
        fontWeight: "500",
        fontFamily: "DM Sans",
        color: "#fff",
        textAlign: "left",
        fontSize: 14,
        left: 28,
        position: "absolute"
    },
    colomboSriLanka: {
        top: 126,
        left: 27
    },
    editProfileChild: {
        borderRadius: 6,
        opacity: 0.1,
        left: 0,
        top: 0
    },
    editProfile1: {
        top: 7,
        left: 15
    },
    editIcon: {
        top: 3,
        left: 86
    },
    editProfile: {
        top: 161,
        left: 267
    },
    menuBarIcon: {
        bottom: 0,
        height: 72,
        overflow: "hidden"
    },
    logout: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        width: "100%",
        height: 896,
        overflow: "hidden"
    }
});

export default Logout;
