import * as React from "react";
import {Text, StyleSheet, View, Pressable, Image, ScrollView} from "react-native";

const CourseHome = () => {

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.courseHome}>
            <Text style={styles.skills}>Skills</Text>
            <View style={[styles.seniorDesignerParent, styles.parentPosition]}>
                <View style={[styles.seniorDesigner, styles.seniorLayout1]}>
                    <View style={[styles.seniorDesignerChild, styles.designerChildPosition]} />
                    <Text style={styles.overview}>Overview</Text>
                </View>
                <Pressable style={[styles.seniorDesigner, styles.seniorLayout1]} onPress={()=>{}}>
                    <View style={[styles.seniorDesignerItem, styles.seniorPosition]} />
                    <Text style={[styles.viewed, styles.viewedPosition]}>Viewed</Text>
                </Pressable>
                <Pressable style={styles.seniorLayout} onPress={()=>{}}>
                    <View style={[styles.seniorDesignerInner, styles.seniorLayout]} />
                    <Text style={[styles.skillBadge, styles.viewedPosition]}>Skill Badge</Text>
                </Pressable>
            </View>
            <Text style={[styles.courseRecommendations, styles.specializationTypo]}>Course Recommendations</Text>
            <Text style={[styles.topSearchedCourses, styles.search1Typo]}>Top Searched Courses</Text>
            <View style={[styles.leadershipParent, styles.parentPosition]}>
                <View style={styles.leadershipPosition}>
                    {/*<Image style={[styles.leadershipChild, styles.leadershipPosition]} resizeMode="cover" source="Rectangle 16.png" />*/}
                    <Text style={[styles.dataScience, styles.dataScienceTypo]}>Data Science</Text>
                </View>
                <View style={[styles.teamwork, styles.teamworkLayout]}>
                    {/*<Image style={[styles.teamworkChild, styles.teamworkLayout]} resizeMode="cover" source="Rectangle 16.png" />*/}
                    <Text style={[styles.digitalMarketing, styles.specializationLayout]}>Digital Marketing</Text>
                </View>
                <View style={[styles.targetOriented, styles.targetLayout]}>
                    {/*<Image style={[styles.targetOrientedChild, styles.targetLayout]} resizeMode="cover" source="Rectangle 16.png" />*/}
                    <Text style={[styles.timeManagement, styles.timeManagementPosition]}>Time Management</Text>
                </View>
                <View style={[styles.consistent, styles.consistentLayout]}>
                    {/*<Image style={[styles.consistentChild, styles.consistentLayout]} resizeMode="cover" source="Rectangle 16.png" />*/}
                    <Text style={[styles.publicSpeaking, styles.timeManagementPosition]}>Public Speaking</Text>
                </View>
                <View style={[styles.visioner, styles.visionerLayout]}>
                    {/*<Image style={[styles.visionerChild, styles.visionerLayout]} resizeMode="cover" source="Rectangle 16.png" />*/}
                    <Text style={styles.seoBasics}>SEO Basics</Text>
                </View>
            </View>
            <View style={[styles.header, styles.headerPosition]}>
                <Pressable style={styles.filter} onPress={()=>{}}>
                    {/*<Image style={styles.icon} resizeMode="cover" source="Filter.png" />*/}
                </Pressable>
                <Pressable style={styles.searchPosition} onPress={()=>{}}>
                    {/*<Image style={[styles.searchChild, styles.searchPosition]} resizeMode="cover" source="Rectangle 3.png" />*/}
                    {/*<Image style={styles.iconSearch} resizeMode="cover" source="Icon Search.png" />*/}
                    <Text style={[styles.search1, styles.search1Position]}>Search</Text>
                </Pressable>
            </View>
            <View style={[styles.spesialisasi, styles.parentPosition]}>
                <Text style={[styles.specialization, styles.specializationLayout]}>Specialization</Text>
                <View style={[styles.uiuxDesigner, styles.uiuxLayout]}>
                    <View style={[styles.uiuxDesignerChild, styles.uiuxLayout]} />
                    <Text style={[styles.design, styles.designTypo]}>Design</Text>
                    <Text style={[styles.courses, styles.coursesTypo]}>140 Courses</Text>
                    <View style={styles.uiuxDesignerItem} />
                    {/*<Image style={[styles.iconDesign, styles.iconLayout]} resizeMode="cover" source="Icon Design.png" />*/}
                </View>
                <View style={[styles.finance, styles.uiuxLayout]}>
                    {/*<Image style={styles.financeChild} resizeMode="cover" source="Rectangle 12.png" />*/}
                    <Text style={[styles.finance1, styles.designTypo]}>Finance</Text>
                    <Text style={[styles.courses1, styles.coursesTypo]}>250 Courses</Text>
                    {/*<Image style={[styles.icon1, styles.icon1Position]} resizeMode="cover" source="Icon.png" />*/}
                </View>
                <View style={[styles.restaurant, styles.educationPosition]}>
                    <View style={styles.childShadowBox} />
                    <Text style={[styles.restaurant1, styles.designTypo]}>Restaurant</Text>
                    <Text style={[styles.courses2, styles.coursesTypo]}>85 Courses</Text>
                    {/*<Image style={[styles.icon1, styles.icon1Position]} resizeMode="cover" source="Icon.png" />*/}
                </View>
                <View style={[styles.education, styles.educationPosition]}>
                    <View style={styles.childShadowBox} />
                    <Text style={[styles.education1, styles.coursesPosition]}>Education</Text>
                    <Text style={[styles.courses3, styles.coursesTypo]}>120 Courses</Text>
                    {/*<Image style={[styles.iconDesign, styles.iconLayout]} resizeMode="cover" source="Icon.png" />*/}
                </View>
                <View style={[styles.health, styles.healthPosition]}>
                    <View style={styles.childShadowBox} />
                    <Text style={[styles.health1, styles.designTypo]}>Health</Text>
                    <Text style={[styles.courses4, styles.coursesTypo]}>235  Courses</Text>
                    {/*<Image style={[styles.icon4, styles.iconLayout]} resizeMode="cover" source="Icon.png" />*/}
                </View>
                <View style={[styles.programmer, styles.healthPosition]}>
                    <View style={styles.childShadowBox} />
                    <Text style={[styles.programmer1, styles.designTypo]}>Programmer</Text>
                    <Text style={[styles.courses5, styles.icon1Position]}>412 Courses</Text>
                    {/*<Image style={[styles.icon4, styles.iconLayout]} resizeMode="cover" source="Icon.png" />*/}
                </View>
            </View>
            <View style={[styles.rectangleParent, styles.rectangleParentShadowBox]}>
                {/*<Image style={styles.frameChild} resizeMode="cover" source="Rectangle 6448.png" />*/}
                {/*<Image style={[styles.frameItem, styles.search1Position]} resizeMode="cover" source="Ellipse 139.png" />*/}
                <Text style={[styles.basicsOfUiux, styles.basicsTypo]}>Basics of UI/UX Design</Text>
                <View style={styles.h52mParent}>
                    <Text style={[styles.h52m, styles.h52mTypo]}>12h 52m</Text>
                    {/*<Image style={styles.outlineClock} resizeMode="cover" source="outline / clock.png" />*/}
                </View>
                <View style={styles.starParent}>
                    {/*<Image style={styles.outlineClock} resizeMode="cover" source="Star 8.png" />*/}
                    <Text style={[styles.text, styles.h52mTypo]}>4.7</Text>
                </View>
                <View style={styles.frameInner} />
                <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                    <View style={[styles.rectangleView, styles.rectangleLayout]} />
                    <View style={[styles.shapes, styles.shapesLayout]}>
                        {/*<Image style={[styles.shapesChild, styles.headerPosition]} resizeMode="cover" source="Ellipse 117.png" />*/}
                        {/*<Image style={[styles.shapesItem, styles.shapesItemLayout]} resizeMode="cover" source="Ellipse 118.png" />*/}
                        {/*<Image style={[styles.shapesInner, styles.shapesLayout]} resizeMode="cover" source="Ellipse 119.png" />*/}
                        <Text style={[styles.silverdoleSelvester, styles.basicsTypo]}>Silverdole Selvester</Text>
                    </View>
                    {/*<Image style={[styles.image64Icon, styles.shapesItemLayout]} resizeMode="cover" source="image 64.png" />*/}
                    <Text style={[styles.basicsOfUiux1, styles.basicsTypo]}>{`Basics of UI/UX
            						Design `}</Text>
                </View>
                {/*<Image style={styles.rectangleIcon} resizeMode="cover" source="Rectangle 6438.png" />*/}
                <Text style={styles.viewCourse}>View Course</Text>
            </View>
            <View style={[styles.rectangleContainer, styles.rectangleParentShadowBox]}>
                {/*<Image style={styles.frameChild} resizeMode="cover" source="Rectangle 6448.png" />*/}
                {/*<Image style={[styles.frameItem, styles.search1Position]} resizeMode="cover" source="Ellipse 139.png" />*/}
                <Text style={[styles.basicsOfUiux, styles.basicsTypo]}>Basics of UI/UX Design</Text>
                <View style={styles.h52mParent}>
                    <Text style={[styles.h52m, styles.h52mTypo]}>12h 52m</Text>
                    {/*<Image style={styles.outlineClock} resizeMode="cover" source="outline / clock.png" />*/}
                </View>
                <View style={styles.starParent}>
                    {/*<Image style={styles.outlineClock} resizeMode="cover" source="Star 8.png" />*/}
                    <Text style={[styles.text, styles.h52mTypo]}>4.7</Text>
                </View>
                <View style={styles.frameInner} />
                <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                    <View style={[styles.rectangleView, styles.rectangleLayout]} />
                    <View style={[styles.shapes, styles.shapesLayout]}>
                        {/*<Image style={[styles.shapesChild, styles.headerPosition]} resizeMode="cover" source="Ellipse 117.png" />*/}
                        {/*<Image style={[styles.shapesItem, styles.shapesItemLayout]} resizeMode="cover" source="Ellipse 118.png" />*/}
                        {/*<Image style={[styles.shapesInner, styles.shapesLayout]} resizeMode="cover" source="Ellipse 119.png" />*/}
                        <Text style={[styles.silverdoleSelvester, styles.basicsTypo]}>Silverdole Selvester</Text>
                    </View>
                    {/*<Image style={[styles.image64Icon, styles.shapesItemLayout]} resizeMode="cover" source="image 64.png" />*/}
                    <Text style={[styles.basicsOfUiux1, styles.basicsTypo]}>{`Basics of UI/UX
            						Design `}</Text>
                </View>
                {/*<Image style={styles.rectangleIcon} resizeMode="cover" source="Rectangle 6438.png" />*/}
                <Text style={styles.viewCourse}>View Course</Text>
            </View>
            <View style={[styles.rectangleParent1, styles.rectangleParentShadowBox]}>
                {/*<Image style={styles.frameChild} resizeMode="cover" source="Rectangle 6448.png" />*/}
                {/*<Image style={[styles.frameItem, styles.search1Position]} resizeMode="cover" source="Ellipse 139.png" />*/}
                <Text style={[styles.basicsOfUiux, styles.basicsTypo]}>Basics of UI/UX Design</Text>
                <View style={styles.h52mParent}>
                    <Text style={[styles.h52m, styles.h52mTypo]}>12h 52m</Text>
                    {/*<Image style={styles.outlineClock} resizeMode="cover" source="outline / clock.png" />*/}
                </View>
                <View style={styles.starParent}>
                    {/*<Image style={styles.outlineClock} resizeMode="cover" source="Star 8.png" />*/}
                    <Text style={[styles.text, styles.h52mTypo]}>4.7</Text>
                </View>
                <View style={styles.frameInner} />
                <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                    <View style={[styles.rectangleView, styles.rectangleLayout]} />
                    <View style={[styles.shapes, styles.shapesLayout]}>
                        {/*<Image style={[styles.shapesChild, styles.headerPosition]} resizeMode="cover" source="Ellipse 117.png" />*/}
                        {/*<Image style={[styles.shapesItem, styles.shapesItemLayout]} resizeMode="cover" source="Ellipse 118.png" />*/}
                        {/*<Image style={[styles.shapesInner, styles.shapesLayout]} resizeMode="cover" source="Ellipse 119.png" />*/}
                        <Text style={[styles.silverdoleSelvester, styles.basicsTypo]}>Silverdole Selvester</Text>
                    </View>
                    {/*<Image style={[styles.image64Icon, styles.shapesItemLayout]} resizeMode="cover" source="image 64.png" />*/}
                    <Text style={[styles.basicsOfUiux1, styles.basicsTypo]}>{`Basics of UI/UX
            						Design `}</Text>
                </View>
                {/*<Image style={styles.rectangleIcon} resizeMode="cover" source="Rectangle 6438.png" />*/}
                <Text style={styles.viewCourse}>View Course</Text>
            </View>
            {/*<Image style={styles.menuBarIcon} resizeMode="cover" source="Menu bar.png" />*/}
        </View>
        </ScrollView>
            );
};

const styles = StyleSheet.create({
    parentPosition: {
        width: 364,
        left: 25,
        position: "absolute"
    },
    seniorLayout1: {
        width: 115,
        height: 40
    },
    designerChildPosition: {
        backgroundColor: "#6a41ff",
        left: 0,
        top: 0
    },
    seniorPosition: {
        backgroundColor: "#cbc9d4",
        opacity: 0.2,
        borderRadius: 8,
        left: 0,
        top: 0,
        position: "absolute"
    },
    viewedPosition: {
        color: "#524b6b",
        height: 16,
        fontFamily: "DM Sans",
        fontSize: 12,
        top: "50%",
        marginTop: -8,
        textAlign: "left",
        left: "50%",
        position: "absolute"
    },
    seniorLayout: {
        width: 116,
        height: 40
    },
    specializationTypo: {
        color: "#150a33",
        fontSize: 16,
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    search1Typo: {
        fontFamily: "DM Sans",
        textAlign: "left"
    },
    leadershipPosition: {
        height: 37,
        width: 110,
        left: 0,
        top: 0,
        position: "absolute"
    },
    dataScienceTypo: {
        textAlign: "center",
        marginTop: -8.45,
        height: 17,
        color: "#524b6b",
        fontFamily: "DM Sans",
        fontSize: 12,
        top: "50%",
        left: "50%"
    },
    teamworkLayout: {
        width: 141,
        height: 37,
        top: 0,
        position: "absolute"
    },
    specializationLayout: {
        width: 113,
        position: "absolute"
    },
    targetLayout: {
        width: 148,
        height: 37,
        left: 0,
        position: "absolute"
    },
    timeManagementPosition: {
        marginTop: -8.5,
        height: 17,
        textAlign: "center",
        color: "#524b6b",
        fontFamily: "DM Sans",
        fontSize: 12,
        top: "50%",
        left: "50%",
        position: "absolute"
    },
    consistentLayout: {
        width: 136,
        height: 37,
        position: "absolute"
    },
    visionerLayout: {
        width: 96,
        height: 37,
        top: 0,
        position: "absolute"
    },
    headerPosition: {
        left: 25,
        position: "absolute"
    },
    searchPosition: {
        width: 312,
        left: 0,
        top: 0,
        height: 40,
        position: "absolute"
    },
    search1Position: {
        top: 12,
        position: "absolute"
    },
    uiuxLayout: {
        height: 180,
        width: 174,
        position: "absolute"
    },
    designTypo: {
        top: 110,
        textAlign: "center",
        fontSize: 14,
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    coursesTypo: {
        top: 139,
        textAlign: "center",
        fontFamily: "DM Sans",
        fontSize: 12
    },
    iconLayout: {
        height: 67,
        width: 73,
        top: 25
    },
    icon1Position: {
        marginLeft: -36.74,
        left: "50%",
        position: "absolute"
    },
    educationPosition: {
        top: 237,
        height: 180,
        width: 174,
        position: "absolute"
    },
    coursesPosition: {
        marginLeft: -37.29,
        width: 75,
        left: "50%",
        position: "absolute"
    },
    healthPosition: {
        top: 432,
        height: 180,
        width: 174,
        position: "absolute"
    },
    rectangleParentShadowBox: {
        height: 228,
        elevation: 35,
        shadowRadius: 35,
        shadowColor: "rgba(0, 0, 0, 0.05)",
        backgroundColor: "#fff",
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 4
        },
        borderRadius: 20,
        width: 364,
        left: 25,
        position: "absolute",
        overflow: "hidden"
    },
    basicsTypo: {
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        textAlign: "left",
        position: "absolute"
    },
    h52mTypo: {
        fontFamily: "Poppins-Regular",
        top: 0,
        textAlign: "left",
        position: "absolute"
    },
    rectangleLayout: {
        width: 368,
        borderRadius: 15,
        position: "absolute"
    },
    shapesLayout: {
        height: 373,
        width: 355,
        position: "absolute"
    },
    shapesItemLayout: {
        height: 293,
        position: "absolute"
    },
    skills: {
        marginLeft: -34,
        top: 73,
        fontSize: 28,
        color: "#0d0140",
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        left: "50%",
        position: "absolute"
    },
    seniorDesignerChild: {
        opacity: 0.2,
        borderRadius: 8,
        backgroundColor: "#6a41ff",
        height: 40,
        width: 115,
        position: "absolute"
    },
    overview: {
        marginLeft: -26.5,
        width: 53,
        height: 16,
        top: "50%",
        marginTop: -8,
        color: "#6a41ff",
        fontFamily: "DM Sans",
        fontSize: 12,
        textAlign: "left",
        left: "50%",
        position: "absolute"
    },
    seniorDesigner: {
        height: 40
    },
    seniorDesignerItem: {
        height: 40,
        width: 115
    },
    viewed: {
        marginLeft: -20.5,
        width: 41
    },
    seniorDesignerInner: {
        backgroundColor: "#cbc9d4",
        opacity: 0.2,
        borderRadius: 8,
        left: 0,
        top: 0,
        position: "absolute"
    },
    skillBadge: {
        marginLeft: -29.76,
        width: 61
    },
    seniorDesignerParent: {
        top: 133,
        flexDirection: "row",
        alignItems: "center",
        gap: 9
    },
    courseRecommendations: {
        top: 1063,
        left: 25,
        position: "absolute"
    },
    topSearchedCourses: {
        top: 197,
        left: 29,
        color: "#150b3d",
        fontSize: 14,
        position: "absolute"
    },
    leadershipChild: {
        borderRadius: 10,
        opacity: 0.2
    },
    dataScience: {
        marginLeft: -43.85,
        width: 88,
        height: 17,
        position: "absolute"
    },
    teamworkChild: {
        borderRadius: 10,
        opacity: 0.2,
        left: 0
    },
    digitalMarketing: {
        marginLeft: -55.73,
        height: 17,
        textAlign: "center",
        marginTop: -8.45,
        color: "#524b6b",
        fontFamily: "DM Sans",
        fontSize: 12,
        top: "50%",
        left: "50%"
    },
    teamwork: {
        left: 118
    },
    targetOrientedChild: {
        borderRadius: 10,
        opacity: 0.2,
        top: 0
    },
    timeManagement: {
        marginLeft: -62,
        width: 123
    },
    targetOriented: {
        top: 47
    },
    consistentChild: {
        borderRadius: 10,
        opacity: 0.2,
        left: 0,
        top: 0
    },
    publicSpeaking: {
        marginLeft: -53.59,
        width: 107
    },
    consistent: {
        left: 165,
        top: 47
    },
    visionerChild: {
        borderRadius: 10,
        opacity: 0.2,
        left: 0
    },
    seoBasics: {
        marginLeft: -37.78,
        width: 75,
        marginTop: -8.5,
        height: 17,
        textAlign: "center",
        color: "#524b6b",
        fontFamily: "DM Sans",
        fontSize: 12,
        top: "50%",
        left: "50%",
        position: "absolute"
    },
    visioner: {
        left: 268
    },
    leadershipParent: {
        top: 233,
        height: 84
    },
    icon: {
        height: "100%",
        width: "100%"
    },
    filter: {
        left: 325,
        width: 40,
        top: 0,
        height: 40,
        position: "absolute"
    },
    searchChild: {
        borderRadius: 10
    },
    iconSearch: {
        top: 8,
        width: 27,
        height: 24,
        left: 17,
        position: "absolute"
    },
    search1: {
        left: 60,
        width: 44,
        color: "#aaa6b9",
        fontFamily: "DM Sans",
        textAlign: "left",
        fontSize: 12
    },
    header: {
        top: 341,
        width: 365,
        height: 40
    },
    specialization: {
        left: 2,
        color: "#150a33",
        fontSize: 16,
        textAlign: "left",
        fontFamily: "DM Sans",
        fontWeight: "700",
        top: 0
    },
    uiuxDesignerChild: {
        borderRadius: 25,
        backgroundColor: "#6a41ff",
        left: 0,
        top: 0
    },
    design: {
        width: 50,
        color: "#fff",
        marginLeft: -24.6,
        top: 110,
        left: "50%",
        position: "absolute"
    },
    courses: {
        marginLeft: -37.29,
        width: 75,
        left: "50%",
        position: "absolute",
        color: "#fff"
    },
    uiuxDesignerItem: {
        top: 20,
        left: 67,
        width: 51,
        height: 47,
        position: "absolute"
    },
    iconDesign: {
        left: 51,
        position: "absolute"
    },
    uiuxDesigner: {
        top: 42,
        width: 174,
        left: 0
    },
    financeChild: {
        borderRadius: 20,
        height: 180,
        width: 174,
        left: 0,
        top: 0,
        position: "absolute"
    },
    finance1: {
        marginLeft: -29.34,
        width: 59,
        color: "#150b3d",
        left: "50%",
        position: "absolute"
    },
    courses1: {
        marginLeft: -38.86,
        width: 78,
        color: "#aaa6b9",
        left: "50%",
        position: "absolute"
    },
    icon1: {
        height: 67,
        width: 73,
        top: 25
    },
    finance: {
        left: 190,
        top: 42,
        width: 174
    },
    childShadowBox: {
        backgroundColor: "#fff",
        shadowOpacity: 1,
        elevation: 30,
        shadowRadius: 30,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(153, 171, 198, 0.2)",
        borderRadius: 20,
        height: 180,
        width: 174,
        left: 0,
        top: 0,
        position: "absolute"
    },
    restaurant1: {
        marginLeft: -40.97,
        width: 82,
        color: "#150b3d",
        left: "50%",
        position: "absolute"
    },
    courses2: {
        marginLeft: -34.63,
        width: 70,
        color: "#aaa6b9",
        left: "50%",
        position: "absolute"
    },
    restaurant: {
        left: 190
    },
    education1: {
        top: 110,
        textAlign: "center",
        fontSize: 14,
        fontFamily: "DM Sans",
        fontWeight: "700",
        color: "#150b3d"
    },
    courses3: {
        marginLeft: -37.29,
        width: 75,
        left: "50%",
        position: "absolute",
        color: "#aaa6b9"
    },
    education: {
        left: 0
    },
    health1: {
        width: 49,
        marginLeft: -24.6,
        top: 110,
        left: "50%",
        position: "absolute",
        color: "#150b3d"
    },
    courses4: {
        marginLeft: -40.46,
        width: 81,
        color: "#aaa6b9",
        left: "50%",
        position: "absolute"
    },
    icon4: {
        left: 57,
        position: "absolute"
    },
    health: {
        left: 0
    },
    programmer1: {
        marginLeft: -45.2,
        width: 91,
        color: "#150b3d",
        left: "50%",
        position: "absolute"
    },
    courses5: {
        width: 74,
        top: 139,
        textAlign: "center",
        fontFamily: "DM Sans",
        fontSize: 12,
        color: "#aaa6b9"
    },
    programmer: {
        left: 190
    },
    spesialisasi: {
        top: 405,
        height: 612
    },
    frameChild: {
        left: -11,
        width: 319,
        height: 140,
        top: 0,
        position: "absolute"
    },
    frameItem: {
        left: 193,
        width: 39,
        height: 39
    },
    basicsOfUiux: {
        top: 160,
        fontSize: 18,
        color: "#000",
        left: 17
    },
    h52m: {
        left: 22,
        lineHeight: 18,
        color: "rgba(0, 0, 0, 0.5)",
        fontSize: 14
    },
    outlineClock: {
        top: 1,
        width: 17,
        height: 17,
        left: 0,
        position: "absolute"
    },
    h52mParent: {
        top: 196,
        width: 79,
        height: 18,
        left: 17,
        position: "absolute"
    },
    text: {
        lineHeight: 21,
        color: "#000",
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        left: 25
    },
    starParent: {
        top: 194,
        left: 113,
        width: 48,
        height: 21,
        position: "absolute"
    },
    frameInner: {
        top: 136,
        left: -5,
        backgroundColor: "#b8a9ff",
        width: 150,
        height: 4,
        position: "absolute"
    },
    rectangleView: {
        height: 154,
        backgroundColor: "#6a41ff",
        left: 0,
        top: 0
    },
    shapesChild: {
        top: 18,
        width: 205,
        height: 213
    },
    shapesItem: {
        top: 5,
        left: 10,
        width: 279
    },
    shapesInner: {
        left: 0,
        top: 0
    },
    silverdoleSelvester: {
        top: 89,
        left: 185,
        lineHeight: 15,
        textTransform: "uppercase",
        color: "rgba(255, 255, 255, 0.7)",
        fontSize: 12
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
    basicsOfUiux1: {
        top: 66,
        left: 123,
        fontSize: 24,
        lineHeight: 30,
        color: "#fff"
    },
    rectangleGroup: {
        top: -2,
        left: -4,
        height: 149,
        overflow: "hidden"
    },
    rectangleIcon: {
        top: 236,
        left: 296,
        borderRadius: 50,
        width: 0,
        height: 5,
        position: "absolute"
    },
    viewCourse: {
        top: 199,
        left: 273,
        color: "#6a41ff",
        fontFamily: "DM Sans",
        fontSize: 12,
        textAlign: "left",
        position: "absolute"
    },
    rectangleParent: {
        top: 1108
    },
    rectangleContainer: {
        top: 1360
    },
    rectangleParent1: {
        top: 1612
    },
    menuBarIcon: {
        bottom: 0,
        width: 414,
        height: 72,
        left: 0,
        position: "absolute"
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    courseHome: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        height: 1960,
        overflow: "hidden",
        width: "100%"
    }
});

export default CourseHome;
