import * as React from "react";
import {Text, StyleSheet, Image, View, Pressable} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import {useNavigation, ParamListBase} from "@react-navigation/native";

const OnboadingChat = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
      <View style={[styles.onboadingChat3, styles.iconLayout]}>
        <View style={styles.groupParent}>
          <Pressable style={[styles.frameWrapper, styles.nextParentLayout]} onPress={() => navigation.navigate("OnboadingChat")}>
            <View style={[styles.nextParent, styles.nextParentLayout]}>
              <Text style={[styles.next, styles.nextTypo]}>Next</Text>
              {/*<Image style={styles.vectorIcon} resizeMode="cover" source="Vector.png" />*/}
            </View>
          </Pressable>
          {/*<Image style={[styles.riarrowUpSLineIcon, styles.backArrowLayout]} resizeMode="cover" source="ri:arrow-up-s-line.png" />*/}
          {/*<Image style={styles.groupChild} resizeMode="cover" source="Ellipse 151.png" />*/}
          {/*<Image style={styles.groupItem} resizeMode="cover" source="Ellipse 154.png" />*/}
          {/*<Image style={styles.groupInner} resizeMode="cover" source="Ellipse 152.png" />*/}
        </View>
        <Text style={[styles.aspireai, styles.nextTypo]}>AspireAI</Text>
        <View style={[styles.chat2, styles.chat2Position]}>
          <Text style={[styles.whatSpecificSkills, styles.yourAnswerTypo]}>What specific skills or areas are you looking to develop or improve?</Text>
        </View>
        <Pressable style={[styles.backArrow, styles.backArrowLayout]} onPress={() => navigation.goBack()}>
          {/*<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="back arrow.png" />*/}
        </Pressable>
        {/*<Image style={[styles.onboadingChat3Child, styles.chat2Position]} resizeMode="cover" source="Rectangle 61.png" />*/}
        <Text style={[styles.yourAnswer, styles.yourAnswerTypo]}>Your Answer</Text>
      </View>);
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden"
  },
  nextParentLayout: {
    height: 48,
    width: 350,
    position: "absolute"
  },
  nextTypo: {
    textAlign: "left",
    fontFamily: "DM Sans",
    fontWeight: "700"
  },
  backArrowLayout: {
    height: 28,
    position: "absolute"
  },
  chat2Position: {
    left: 32,
    width: 350,
    position: "absolute"
  },
  yourAnswerTypo: {
    fontFamily: "DM Sans",
    textAlign: "left",
    position: "absolute"
  },
  next: {
    fontSize: 14,
    lineHeight: 24,
    color: "#fff",
    width: 261
  },
  vectorIcon: {
    width: 11,
    height: 17
  },
  nextParent: {
    borderRadius: 14,
    backgroundColor: "#130160",
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1.2,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 17,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    gap: 37,
    left: 0,
    top: 0
  },
  frameWrapper: {
    top: 325,
    left: 79
  },
  riarrowUpSLineIcon: {
    top: 275,
    left: 377,
    width: 35,
    overflow: "hidden"
  },
  groupChild: {
    left: 363,
    width: 178,
    height: 155,
    top: 0,
    position: "absolute"
  },
  groupItem: {
    top: 84,
    left: 318,
    width: 121,
    height: 124,
    position: "absolute"
  },
  groupInner: {
    top: 47,
    width: 94,
    height: 82,
    left: 0,
    position: "absolute"
  },
  groupParent: {
    top: 466,
    left: -47,
    width: 541,
    height: 373,
    position: "absolute"
  },
  aspireai: {
    marginLeft: -57,
    top: 61,
    left: "50%",
    fontSize: 28,
    color: "#0d0140",
    position: "absolute"
  },
  whatSpecificSkills: {
    fontSize: 13,
    color: "#524b6b",
    left: 0,
    top: 0,
    width: 350,
    fontFamily: "DM Sans"
  },
  chat2: {
    top: 234,
    height: 34
  },
  icon: {
    height: "100%",
    borderRadius: 10,
    overflow: "hidden"
  },
  backArrow: {
    left: 33,
    top: 21,
    width: 28
  },
  onboadingChat3Child: {
    top: 314,
    height: 98,
    borderRadius: 10
  },
  yourAnswer: {
    top: 331,
    left: 68,
    fontSize: 12,
    color: "#aaa6b9",
    width: 183
  },
  onboadingChat3: {
    backgroundColor: "#f9f9f9",
    flex: 1,
    height: 896,
    overflow: "hidden"
  }
});

export default OnboadingChat;
