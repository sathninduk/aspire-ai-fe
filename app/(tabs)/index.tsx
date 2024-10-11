import * as React from "react";
import {useEffect} from "react";
import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {BACKEND_URL} from "@/config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Pathway = () => {

    const [loading, setLoading] = React.useState(true);
    const [userData, setUserData] = React.useState({
        name: '',
        skills: [{
            title: '',
            progress: 0
        }]
    });

    const [loadingJobs, setLoadingJobs] = React.useState(true);
    const [loadingCourses, setLoadingCourses] = React.useState(true);
    const [jobsData, setJobsData] = React.useState([{
        title: '',
        company: '',
        location: '',
    }, {
        title: '',
        company: '',
        location: '',
    }])
    const [coursesData, setCoursesData] = React.useState([])

    const getUserData = async () => {
        const number = await AsyncStorage.getItem('number');
        try {
            axios.get(`${BACKEND_URL}/user/${number}`).then(res => {
                setUserData(res.data)
            });
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    const getJobs = async () => {
        const number = await AsyncStorage.getItem('number');
        try {
            axios.get(`${BACKEND_URL}/job/personalized?number=${number}`).then(res => {
                setJobsData(res.data)
            });
        } catch (err) {
            console.log(err);
        } finally {
            setLoadingJobs(false);
        }
    }

    const getCourses = async () => {
        const number = await AsyncStorage.getItem('number');
        try {
            axios.get(`${BACKEND_URL}/course/personalized?number=${number}`).then(res => {
                setCoursesData(res.data)
            });
        } catch (err) {
            console.log(err);
        } finally {
            setLoadingCourses(false);
        }
    }

    useEffect(() => {
        getUserData();
        getJobs();
        getCourses();
    }, []);

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.pathway}>
                <Text style={[styles.aspireai, styles.aspireaiTypo]}>AspireAI</Text>
                <View style={[styles.skill, styles.uiuxLayout]}>

                    <View style={[styles.leadership, styles.leadershipLayout1, {
                        backgroundColor: "#ebebf1",
                        borderRadius: 10
                    }]}>
                        <Text style={[styles.sqlTuning, styles.manageClr]}>
                            {userData.skills.length > 0 && truncateText(userData.skills[0].title, 20)}
                        </Text>
                    </View>
                    <View style={[styles.leadership2, styles.leadershipLayout, {
                        backgroundColor: "#ebebf1",
                        borderRadius: 10
                    }]}>
                        <Text style={[styles.softwareScalab, styles.manageClr, {
                            backgroundColor: "#ebebf1",
                            borderRadius: 10
                        }]}>
                            {userData.skills.length > 1 && truncateText(userData.skills[1].title, 20)}
                        </Text>
                    </View>
                    <View style={[styles.leadership1, styles.leadershipLayout1, {
                        backgroundColor: "#ebebf1",
                        borderRadius: 10
                    }]}>
                        <Text style={[styles.scrumManage, styles.manageClr]}>
                            {userData.skills.length > 2 && truncateText(userData.skills[2].title, 20)}
                        </Text>
                    </View>
                    <View style={[styles.leadership3, styles.leadership3Layout, {
                        backgroundColor: "#ebebf1",
                        borderRadius: 10
                    }]}>
                        <Text style={[styles.versionManage, styles.versionManageLayout]}>
                            {userData.skills.length > 3 && truncateText(userData.skills[3].title, 20)}
                        </Text>
                    </View>
                    <View style={[styles.leadership10, styles.leadership3Layout, {
                        backgroundColor: "#ebebf1",
                        borderRadius: 10
                    }]}>
                        <Text style={[styles.versionManage, styles.versionManageLayout]}>
                            {userData.skills.length > 4 && truncateText(userData.skills[4].title, 20)}
                        </Text>
                    </View>

                    {/*<Image style={[styles.icoutlineCloseIcon1, styles.icoutlineIconLayout]} resizeMode="cover" source="ic:outline-close.png" />*/}
                    {/*<Image style={[styles.addIcon, styles.iconLayout1]} resizeMode="cover" source="Add.png" />*/}
                    {/*<Image style={[styles.iconSkill, styles.iconLayout1]} resizeMode="cover" source={*/}
                    {/*    require('@/assets/images/SkillIcon.png')*/}
                    {/*} />*/}
                    <Image style={[styles.iconSkill, styles.iconLayout1]} resizeMode="cover" source={require("@/assets/images/pathway/skill.png")}/>
                    {/*<Image style={styles.skillChild} resizeMode="cover" source="Vector 73.png" />*/}
                    <Text style={[styles.skill1, styles.skill1Typo]}>Skills</Text>
                </View>
                <View style={styles.resume}>
                    <Image style={[styles.iconResume, styles.starLayout]} resizeMode="cover" source={
                        require("@/assets/images/pathway/job.png")
                    } />
                    {/*<Image style={[styles.resumeChild, styles.childLayout]} resizeMode="cover" source="Vector 74.png" />*/}
                    <Text style={[styles.jobOpenings, styles.jobOpeningsClr]}>Job Openings</Text>
                    <View style={[styles.uiuxDesignerParent, styles.uiuxLayout]}>
                        <View style={[styles.uiuxDesigner, styles.uiuxLayout]}>
                            <Text style={[styles.seniorSoftwareEngineer, styles.ifs1IconPosition]}>{jobsData[0].title}</Text>
                            <Text style={[styles.codegenColombo, styles.ifs1IconPosition]}>{jobsData[0].company}</Text>
                        </View>
                        {/*<Image style={styles.cg1Icon} resizeMode="cover" source="cg 1.png" />*/}
                    </View>
                    <Pressable style={[styles.seeMore3, styles.seePosition]} onPress={() => {
                    }}>
                        <Text style={[styles.seeMore4, styles.seeTypo]}>See more</Text>
                    </Pressable>
                </View>
                <View style={[styles.vectorParent, styles.groupInnerLayout]}>
                    <Text style={[styles.codegenColombo, styles.ifs1IconPosition]}>{jobsData[1].title}</Text>
                    <Text style={[styles.seniorSoftwareEngineer, styles.ifs1IconPosition]}>{jobsData[1].company}</Text>
                </View>
                <View style={[styles.ellipseParent, styles.parentShadowBox]}>
                    {/*<Image style={styles.frameItem} resizeMode="cover" source="Ellipse 139.png" />*/}
                    <Text style={[styles.basicsOfUiux2, styles.basicsPosition]}>View</Text>
                    <View style={styles.rectangleGroup}>
                        <View style={[styles.frameInner, styles.frameLayout]}/>
                        <View style={[styles.shapes, styles.shapesLayout3]}>
                            {/*<Image style={[styles.ellipseIcon, styles.shapesChildLayout]} resizeMode="cover" source="Ellipse 117.png" />*/}
                            {/*<Image style={[styles.shapesChild1, styles.shapesLayout]} resizeMode="cover" source="Ellipse 118.png" />*/}
                            {/*<Image style={[styles.shapesChild2, styles.shapesLayout3]} resizeMode="cover" source="Ellipse 119.png" />*/}
                            <Text style={[styles.silverdoleSelvester, styles.basicsTypo]}>Silverdole Selvester</Text>
                        </View>
                        {/*<Image style={[styles.image64Icon, styles.shapesLayout]} resizeMode="cover" source="image 64.png" />*/}
                        <Text style={[styles.basicsOfUiux, styles.basicsTypo]}>{`Basics of UI/UX Design`}</Text>
                    </View>
                    {/*<Image style={styles.frameChild1} resizeMode="cover" source="Rectangle 6438.png" />*/}
                </View>
                <View style={[styles.basicsOfUiuxDesignParent, styles.parentShadowBox]}>
                    <Text style={[styles.basicsOfUiux2, styles.basicsPosition]}>View</Text>
                    {/*<Image style={styles.frameChild1} resizeMode="cover" source="Rectangle 6438.png" />*/}
                    <View style={styles.rectangleGroup}>
                        <View style={[styles.frameInner, styles.frameLayout]}/>
                        <View style={[styles.shapes, styles.shapesLayout3]}>
                            {/*<Image style={[styles.ellipseIcon, styles.shapesChildLayout]} resizeMode="cover" source="Ellipse 117.png" />*/}
                            {/*<Image style={[styles.shapesChild1, styles.shapesLayout]} resizeMode="cover" source="Ellipse 118.png" />*/}
                            {/*<Image style={[styles.shapesChild2, styles.shapesLayout3]} resizeMode="cover" source="Ellipse 119.png" />*/}
                            <Text style={[styles.silverdoleSelvester, styles.basicsTypo]}>Silverdole Selvester</Text>
                        </View>
                        {/*<Image style={[styles.image64Icon, styles.shapesLayout]} resizeMode="cover" source="image 64.png" />*/}
                        <Text style={[styles.basicsOfUiux, styles.basicsTypo]}>{`Basics of UI/UX Design`}</Text>
                    </View>
                </View>
                <Pressable style={[styles.seeMore5, styles.seePosition]} onPress={() => {
                }}>
                    <Text style={[styles.seeMore6, styles.seeTypo]}>See more</Text>
                </Pressable>
                <Image style={[styles.editIcon, styles.iconLayout]} resizeMode="cover" source={
                    require("@/assets/images/pathway/viewed_courses.png")
                } />
                <Text style={[styles.courseSuggestions, styles.frameChildLayout]}>Course Suggestions</Text>
                <View style={[styles.youMightNeedToFillBelowGWrapper, styles.youWrapperPosition]}>
                    <Text style={[styles.youMightNeed, styles.youMightNeedTypo]}>{`Hey, ${userData.name.split(' ')[0]}! Let's see how can you enhance\nyour skills.`}</Text>
                </View>
                <View style={[styles.onceYouSatisfiesWithYourGWrapper, styles.youWrapperPosition]}>
                    <Text style={[styles.youMightNeed, styles.youMightNeedTypo]}>{`Once you satisfies with your gap filling, try to apply\nfollowing openings.`}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    pathway: {
        flex: 1,
        width: "100%",
        height: 1300,
        overflow: "hidden",
        backgroundColor: "#f9f9f9"
    },
    aspireaiTypo: {
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    uiuxLayout: {
        height: 178,
        position: "absolute"
    },
    leadershipLayout1: {
        width: 172,
        height: 36,
        position: "absolute"
    },
    icoutlineIconLayout1: {
        height: 14,
        top: "50%"
    },
    leadershipPosition: {
        opacity: 0.2,
        borderRadius: 10,
        left: 0,
        top: 0
    },
    manageClr: {
        color: "#524b6b",
        fontSize: 12
    },
    skill1Position: {
        top: 2,
        position: "absolute"
    },
    icoutlineIconLayout: {
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden"
    },
    iconLayout1: {
        height: 24,
        position: "absolute"
    },
    skill1Typo: {
        color: "#150a33",
        fontSize: 14,
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    leadershipLayout: {
        width: 167,
        height: 36,
        position: "absolute"
    },
    leadership3Layout: {
        width: 170,
        height: 36,
        position: "absolute"
    },
    versionManageLayout: {
        width: 137,
        textAlign: "left"
    },
    childLayout: {
        height: 1,
        width: 353,
        position: "absolute"
    },
    seeTypo: {
        color: "#7551ff",
        fontFamily: "DM Sans",
        fontSize: 14,
        textAlign: "left"
    },
    frameLayout: {
        height: 210,
        width: 354,
        borderRadius: 15,
        left: 0,
        top: 0,
        position: "absolute"
    },
    shapesLayout3: {
        height: 373,
        width: 355,
        position: "absolute"
    },
    shapesChildLayout: {
        height: 213,
        width: 205,
        left: 25,
        position: "absolute"
    },
    shapesLayout: {
        height: 293,
        position: "absolute"
    },
    basicsTypo: {
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        textAlign: "left",
        position: "absolute"
    },
    easyParentLayout: {
        height: 22,
        position: "absolute"
    },
    easyTypo: {
        fontFamily: "Poppins-Light",
        fontWeight: "300",
        top: 0,
        textAlign: "left",
        position: "absolute"
    },
    starLayout: {
        height: 21,
        position: "absolute"
    },
    groupChildLayout: {
        height: 17,
        width: 17,
        left: 0,
        position: "absolute"
    },
    textLayout: {
        lineHeight: 21,
        fontSize: 16,
        left: 25
    },
    h52mGroupLayout: {
        height: 18,
        position: "absolute"
    },
    h52mTypo: {
        fontFamily: "Poppins-Regular",
        top: 0,
        textAlign: "left",
        position: "absolute"
    },
    jobOpeningsClr: {
        color: "#150b3d",
        fontSize: 14
    },
    groupInnerPosition: {
        borderRadius: 20,
        left: 0,
        top: 0
    },
    fullLayout: {
        width: 82,
        height: 26,
        top: 0,
        position: "absolute"
    },
    childBg: {
        backgroundColor: "#cbc9d4",
        borderRadius: 8,
        opacity: 0.2,
        left: 0
    },
    engineerTypo: {
        fontSize: 10,
        top: 6,
        color: "#524b6b",
        fontFamily: "DM Sans",
        textAlign: "left",
        left: "50%",
        position: "absolute"
    },
    seniorLayout: {
        width: 114,
        height: 26,
        top: 0,
        position: "absolute"
    },
    optionsIconLayout: {
        height: 20,
        width: 20,
        left: 314,
        position: "absolute"
    },
    ifs1IconPosition: {
        left: 20,
        position: "absolute"
    },
    seePosition: {
        left: "50%",
        position: "absolute"
    },
    groupInnerLayout: {
        height: 177,
        width: 352,
        position: "absolute"
    },
    parentShadowBox: {
        height: 214,
        backgroundColor: "#fff",
        shadowOpacity: 1,
        elevation: 35,
        shadowRadius: 35,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.05)",
        borderRadius: 20,
        left: 28,
        position: "absolute",
        overflow: "hidden"
    },
    basicsPosition: {
        top: 147,
        fontSize: 18,
        color: "#000",
        left: 160
    },
    iconLayout: {
        width: 22,
        height: 22,
        position: "absolute"
    },
    frameViewShadowBox: {
        height: 267,
        width: 246,
        top: 4,
        backgroundColor: "#fff",
        shadowOpacity: 1,
        elevation: 35,
        shadowRadius: 35,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.05)",
        borderRadius: 20,
        position: "absolute",
        overflow: "hidden"
    },
    youMightNeedTypo: {
        fontFamily: "DM Sans",
        fontWeight: "500",
        textAlign: "left",
        position: "absolute"
    },
    frameChildLayout: {
        height: 28,
        position: "absolute"
    },
    samanthaPosition: {
        left: 48,
        position: "absolute"
    },
    youWrapperPosition: {
        height: 74, //- change here
        // height: 400,
        left: "50%",
        position: "absolute",
        overflow: "hidden",
        backgroundColor: "#f9f9f9"
    },
    menuBarIconSpaceBlock: {
        marginLeft: -207,
        width: 414
    },
    aspireai: {
        marginLeft: -57,
        fontSize: 28,
        color: "#0d0140",
        textAlign: "left",
        left: "50%",
        position: "absolute",
        top: 50
    },
    icoutlineCloseIcon: {
        right: 14,
        width: 14,
        marginTop: -7,
        height: 14,
        position: "absolute",
        overflow: "hidden"
    },
    leadershipChild: {
        height: 36,
        width: 172,
        position: "absolute"
    },
    sqlTuning: {
        left: 13,
        fontFamily: "DM Sans",
        top: 10,
        textAlign: "left",
        position: "absolute"
    },
    leadership: {
        marginTop: 0,
        right: 178,
        height: 36,
        top: 241
    },
    seeMore: {
        color: "#7551ff",
        fontFamily: "DM Sans",
        fontSize: 12,
        left: 0,
        top: 0,
        textAlign: "left",
        position: "absolute"
    },
    mingcutedownFillIcon: {
        left: 63,
        width: 12,
        height: 12,
        overflow: "hidden"
    },
    seeMoreParent: {
        top: 162,
        left: 137,
        width: 75,
        height: 16,
        position: "absolute"
    },
    scrumManage: {
        left: 9,
        width: 123,
        fontFamily: "DM Sans",
        top: 10,
        textAlign: "left",
        position: "absolute"
    },
    leadership1: {
        left: 1,
        top: 290,
        height: 36
    },
    icoutlineCloseIcon1: {
        marginTop: 23,
        width: "4.42%",
        right: "55.14%",
        left: "40.43%",
        height: 14,
        top: "50%"
    },
    addIcon: {
        top: -14,
        left: 315,
        display: "none",
        width: 24,
        height: 24
    },
    iconSkill: {
        width: 26,
        left: 4,
        top: 157
    },
    skillChild: {
        top: 30,
        width: 350,
        height: 0,
        left: 0,
        position: "absolute"
    },
    skill1: {
        left: 40,
        top: 160,
        position: "absolute"
    },
    leadershipInner: {
        opacity: 0.2,
        borderRadius: 10,
        left: 0,
        top: 0
    },
    softwareScalab: {
        width: 155,
        left: 12,
        fontFamily: "DM Sans",
        top: 10,
        textAlign: "left",
        position: "absolute"
    },
    icoutlineCloseIcon2: {
        width: "9.28%",
        right: "7.38%",
        left: "83.34%",
        height: 14,
        top: "50%",
        marginTop: -7
    },
    leadership2: {
        top: 240,
        left: 183
    },
    rectangleIcon: {
        opacity: 0.2,
        borderRadius: 10,
        left: 0,
        top: 0
    },
    versionManage: {
        left: 12,
        color: "#524b6b",
        fontSize: 12,
        fontFamily: "DM Sans",
        top: 10,
        position: "absolute"
    },
    icoutlineCloseIcon3: {
        height: "38.89%",
        width: "9.23%",
        top: "30.56%",
        right: "7.93%",
        bottom: "30.56%",
        left: "82.84%",
        maxHeight: "100%"
    },
    leadership3: {
        left: 183,
        top: 195
    },
    leadership10: {
        left: 1,
        top: 195
    },
    skill: {
        marginTop: 0,
        right: 33,
        width: 351,
        top: 0,
    },
    pathwayChild: {
        top: 395,
        marginLeft: -179,
        height: 1,
        left: "50%"
    },
    seeMore2: {
        height: 26
    },
    seeMore1: {
        left: 328,
        top: 409,
        position: "absolute"
    },
    frameChild: {
        backgroundColor: "#c74c21"
    },
    shapesChild: {
        top: 83
    },
    shapesItem: {
        top: 82,
        width: 279,
        left: 10,
        height: 293
    },
    shapesInner: {
        top: 97,
        left: 0
    },
    silverdoleSelvester: {
        top: 89,
        left: 84,
        lineHeight: 15,
        textTransform: "uppercase",
        fontFamily: "DM Sans",
        color: "rgba(255, 255, 255, 0.7)",
        fontSize: 12,
        fontWeight: "500"
    },
    shapes: {
        top: -40,
        left: -62
    },
    image64Icon: {
        left: -33,
        width: 196,
        top: 0
    },
    basicsOfUiux: {
        top: 66,
        left: 20,
        fontSize: 24,
        lineHeight: 30,
        color: "#fff"
    },
    outlineBookmark: {
        left: 306,
        width: 24,
        height: 24,
        top: 10
    },
    rectangleParent: {
        overflow: "hidden"
    },
    basicsOfUiux1: {
        top: 258,
        fontSize: 20,
        lineHeight: 25,
        color: "#000",
        left: 4,
        width: 351
    },
    easy: {
        lineHeight: 20,
        fontSize: 16,
        color: "#000",
        left: 0
    },
    groupChild: {
        top: 1
    },
    text1: {
        color: "#000"
    },
    text2: {
        color: "rgba(0, 0, 0, 0.5)"
    },
    text: {
        fontFamily: "Poppins-Light",
        fontWeight: "300",
        top: 0,
        textAlign: "left",
        position: "absolute"
    },
    starParent: {
        left: 60,
        width: 84,
        top: 1
    },
    groupItem: {
        left: 46,
        width: 4,
        height: 4,
        top: 10,
        position: "absolute"
    },
    easyParent: {
        top: 226,
        width: 144,
        left: 4
    },
    h52m: {
        lineHeight: 18,
        fontFamily: "Poppins-Regular",
        color: "rgba(0, 0, 0, 0.5)",
        fontSize: 14,
        left: 22
    },
    h52mParent: {
        width: 79,
        left: 0,
        top: 0
    },
    lessons: {
        lineHeight: 18,
        fontFamily: "Poppins-Regular",
        color: "rgba(0, 0, 0, 0.5)",
        fontSize: 14,
        left: 0
    },
    lessonsWrapper: {
        width: 72,
        left: 22,
        top: 0
    },
    materialSymbolsmenuBookOutIcon: {
        top: 1,
        overflow: "hidden"
    },
    groupContainer: {
        left: 97,
        width: 94,
        top: 0
    },
    outlineUsers: {
        top: 0
    },
    outlineUsersParent: {
        left: 209,
        width: 78,
        top: 1
    },
    groupParent: {
        top: 293,
        width: 287,
        height: 19,
        left: 4,
        position: "absolute"
    },
    text3: {
        top: 227,
        left: 301,
        color: "#5c4baf",
        fontSize: 18,
        lineHeight: 21,
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        textAlign: "left",
        position: "absolute"
    },
    frameParent: {
        top: 435,
        left: 433,
        height: 312,
        width: 355,
        position: "absolute"
    },
    iconResume: {
        left: 7,
        top: 0,
        width: 14
    },
    resumeChild: {
        top: 32,
        left: 0
    },
    jobOpenings: {
        top: 3,
        left: 43,
        width: 95,
        height: 22,
        position: "absolute",
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    uiuxDesignerChild: {
        width: 352,
        height: 178,
        position: "absolute"
    },
    fullTimeChild: {
        width: 82,
        height: 26,
        top: 0,
        position: "absolute"
    },
    fullTime1: {
        marginLeft: -20
    },
    fullTime: {
        left: 89
    },
    designChild: {
        width: 79,
        height: 26,
        top: 0,
        position: "absolute"
    },
    engineer: {
        marginLeft: -20.5
    },
    design: {
        width: 79,
        height: 26,
        left: 0,
        top: 0,
        position: "absolute"
    },
    seniorDesignerChild: {
        backgroundColor: "#cbc9d4",
        borderRadius: 8,
        opacity: 0.2,
        left: 0
    },
    seniorEngineer: {
        marginLeft: -37
    },
    seniorDesigner: {
        left: 181
    },
    fullTimeParent: {
        top: 128,
        left: 16,
        width: 295,
        height: 26,
        position: "absolute"
    },
    optionsIcon: {
        top: 21
    },
    seniorSoftwareEngineer: {
        top: 70,
        color: "#150a33",
        fontSize: 14,
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    codegenColombo: {
        top: 92,
        fontFamily: "OpenSans-Regular",
        color: "#524b6b",
        fontSize: 12,
        textAlign: "left"
    },
    uiuxDesigner: {
        width: 352,
        left: 0,
        top: 0
    },
    cg1Icon: {
        width: 140,
        height: 37,
        left: 22,
        top: 35,
        position: "absolute"
    },
    uiuxDesignerParent: {
        top: 0,
        width: 352,
        left: 0
    },
    seeMore4: {
        marginLeft: -30,
        height: 16
    },
    seeMore3: {
        top: 220
    },
    resume: {
        top: 1015,
        height: 473,
        left: 28,
        width: 353,
        position: "absolute"
    },
    groupInner: {
        borderRadius: 20,
        left: 0,
        top: 0
    },
    optionsIcon1: {
        top: 19
    },
    ifs1Icon: {
        top: 21,
        width: 79,
        height: 36
    },
    vectorParent: {
        top: 1100,
        left: 28
    },
    frameItem: {
        top: 12,
        left: 193,
        width: 39,
        height: 39,
        position: "absolute"
    },
    basicsOfUiux2: {
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        textAlign: "left",
        position: "absolute"
    },
    h52mGroup: {
        top: 183,
        width: 79,
        left: 12
    },
    text4: {
        lineHeight: 21,
        fontSize: 16,
        left: 25,
        color: "#000"
    },
    starGroup: {
        top: 181,
        left: 108,
        width: 48
    },
    frameInner: {
        backgroundColor: "#6a41ff"
    },
    ellipseIcon: {
        top: 18
    },
    shapesChild1: {
        top: 5,
        width: 279,
        left: 10,
        height: 293
    },
    shapesChild2: {
        left: 0,
        top: 0
    },
    rectangleGroup: {
        top: -9,
        height: 149,
        width: 352,
        borderRadius: 15,
        left: 0,
        position: "absolute",
        overflow: "hidden"
    },
    frameChild1: {
        top: 236,
        left: 296,
        borderRadius: 50,
        width: 0,
        height: 5,
        position: "absolute"
    },
    ellipseParent: {
        top: 420,
        width: 353
    },
    viewedCourses: {
        top: 732,
        left: 66,
        width: 142,
        height: 29,
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        position: "absolute"
    },
    skillIcon: {
        top: 730,
        left: 32
    },
    basicsOfUiuxDesignParent: {
        top: 660,
        width: 352
    },
    seeMore6: {
        marginLeft: -30,
        height: 26
    },
    seeMore5: {
        top: 900
    },
    frameChild3: {
        left: -11,
        width: 265,
        height: 140,
        top: 0,
        position: "absolute"
    },
    outlineBookmark1: {
        top: 20,
        left: 201,
        width: 24,
        height: 24
    },
    basicsOfUiux6: {
        top: 147,
        fontSize: 18,
        color: "#000",
        left: 12
    },
    frameChild5: {
        top: 214,
        width: 28,
        left: 14,
        height: 28
    },
    samanthaStewart: {
        top: 216,
        fontSize: 16,
        color: "#000",
        fontFamily: "DM Sans",
        textAlign: "left"
    },
    frameView: {
        left: 300
    },
    frameChild8: {
        top: 216,
        width: 28,
        left: 14,
        height: 28
    },
    samanthaStewart1: {
        top: 218,
        fontSize: 16,
        color: "#000",
        fontFamily: "DM Sans",
        textAlign: "left"
    },
    rectangleParent1: {
        left: 28
    },
    frameGroup: {
        top: 437,
        width: 414,
        height: 293,
        left: 0,
        position: "absolute"
    },
    editIcon: {
        top: 368,
        left: 33
    },
    courseSuggestions: {
        top: 370,
        left: 67,
        color: "#150b3d",
        fontSize: 14,
        width: 137,
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    youMightNeed: {
        top: 22,
        left: 31,
        color: "#707070",
        fontSize: 14
    },
    youMightNeedToFillBelowGWrapper: {
        top: 80,
        backgroundColor: "transparent",
        marginLeft: -207,
        width: 414
    },
    onceYouSatisfiesWithYourGWrapper: {
        marginLeft: -206,
        top: 940,
        width: 412
    },
    pathwayItem: {
        top: 767,
        marginLeft: -179,
        height: 1,
        left: "50%"
    },
    fullTime2: {
        left: 87
    },
    seniorDesigner1: {
        left: 177
    },
    fullTimeGroup: {
        top: 1539,
        width: 291,
        height: 26
    },
    menuBarIcon: {
        bottom: 0,
        height: 72,
        left: "50%",
        position: "absolute",
        overflow: "hidden"
    },
});

export default Pathway;
