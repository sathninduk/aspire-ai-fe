import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

const AIChat = () => {

  return (
      <View style={styles.aiChat}>
        <View style={[styles.workExperience, styles.workLayout1]}>
          {/*<Image style={[styles.workExperienceChild, styles.aboutItemLayout]} resizeMode="cover" source="Rectangle 162.png" />*/}
          <Text style={[styles.whatsOnYour, styles.iWantTo1Typo]}>What’s on your mind, Go ahead!</Text>
          {/*<Image style={[styles.mingcuteaiLineIcon, styles.mingcuteaiIconLayout]} resizeMode="cover" source="mingcute:ai-line.png" />*/}
        </View>
        <View style={[styles.aboutMe, styles.aboutLayout]}>
          {/*<Image style={[styles.aboutMeChild, styles.aboutLayout]} resizeMode="cover" source="Rectangle 162.png" />*/}
          <Text style={[styles.heyIAm, styles.heyIAmPosition]}>{`Hey, I am done with QA! I want to
          					change my career`}</Text>
          {/*<Image style={[styles.icon, styles.iconPosition]} resizeMode="cover" source="Icon.png" />*/}
        </View>
        <View style={[styles.aboutMe1, styles.aboutLayout]}>
          {/*<Image style={[styles.aboutMeItem, styles.aboutLayout]} resizeMode="cover" source="Rectangle 162.png" />*/}
          <Text style={[styles.iWantTo, styles.heyIAmPosition]}>I want to become a DevOps Engineer</Text>
          {/*<Image style={[styles.icon1, styles.iconPosition]} resizeMode="cover" source="Icon.png" />*/}
        </View>
        <View style={[styles.workExperience1, styles.workLayout]}>
          {/*<Image style={[styles.workExperienceItem, styles.workLayout]} resizeMode="cover" source="Rectangle 162.png" />*/}
          <Text style={[styles.iWantTo1, styles.iWantTo1Typo]}>{`I want to become a DevOps Engineer is a promising ambition,
          					I just updated your pathway accordingly.`}</Text>
          {/*<Image style={[styles.mingcuteaiLineIcon1, styles.mingcuteaiIconLayout]} resizeMode="cover" source="mingcute:ai-line.png" />*/}
        </View>
        <View style={[styles.resume, styles.resumeLayout]}>
          {/*<Image style={[styles.resumeChild, styles.resumeLayout]} resizeMode="cover" source="Rectangle 162.png" />*/}
          <View style={[styles.sendMessageParent, styles.addIconLayout]}>
            <Text style={styles.sendMessage}>Send message...</Text>
            {/*<Image style={[styles.addIcon, styles.addIconLayout]} resizeMode="cover" source="Add.png" />*/}
          </View>
        </View>
        {/*<Image style={styles.menuBarIcon} resizeMode="cover" source="Menu bar.png" />*/}
      </View>);
};

const styles = StyleSheet.create({
  workLayout1: {
    height: 57,
    position: "absolute"
  },
  aboutItemLayout: {
    borderRadius: 15,
    top: 0
  },
  iWantTo1Typo: {
    height: 17,
    width: 207,
    color: "#150b3d",
    fontFamily: "DM Sans",
    left: 47,
    top: "50%",
    textAlign: "left",
    fontSize: 14,
    position: "absolute"
  },
  mingcuteaiIconLayout: {
    height: 24,
    width: 24,
    left: 0,
    position: "absolute",
    overflow: "hidden"
  },
  aboutLayout: {
    height: 74,
    position: "absolute"
  },
  heyIAmPosition: {
    height: 43,
    left: "50%",
    textAlign: "left",
    color: "#150b3d",
    fontFamily: "DM Sans",
    fontSize: 14,
    top: "50%",
    position: "absolute"
  },
  iconPosition: {
    top: 50,
    height: 24,
    width: 24,
    position: "absolute"
  },
  workLayout: {
    height: 122,
    position: "absolute"
  },
  resumeLayout: {
    height: 47,
    width: 371,
    position: "absolute"
  },
  addIconLayout: {
    height: 26,
    position: "absolute"
  },
  workExperienceChild: {
    width: 239,
    left: 31,
    borderRadius: 15,
    height: 57,
    position: "absolute"
  },
  whatsOnYour: {
    marginTop: -8.5
  },
  mingcuteaiLineIcon: {
    top: 33
  },
  workExperience: {
    top: 156,
    width: 270,
    left: 20
  },
  aboutMeChild: {
    width: 272,
    left: 0,
    borderRadius: 15,
    top: 0
  },
  heyIAm: {
    marginTop: -18,
    marginLeft: -134.5,
    width: 217
  },
  icon: {
    left: 279
  },
  aboutMe: {
    top: 68,
    left: 90,
    width: 303
  },
  aboutMeItem: {
    width: 228,
    left: 0,
    borderRadius: 15,
    top: 0
  },
  iWantTo: {
    marginTop: -19,
    marginLeft: -110.5,
    width: 182
  },
  icon1: {
    left: 235
  },
  aboutMe1: {
    top: 227,
    left: 132,
    width: 259
  },
  workExperienceItem: {
    width: 213,
    borderRadius: 15,
    top: 0,
    left: 31
  },
  iWantTo1: {
    marginTop: -47
  },
  mingcuteaiLineIcon1: {
    top: 98
  },
  workExperience1: {
    top: 315,
    width: 254,
    left: 20
  },
  resumeChild: {
    left: 0,
    borderRadius: 15,
    top: 0
  },
  sendMessage: {
    top: 3,
    fontWeight: "600",
    fontFamily: "OpenSans-SemiBold",
    color: "#a49eb5",
    width: 123,
    left: 0,
    textAlign: "left",
    fontSize: 14,
    position: "absolute"
  },
  addIcon: {
    left: 318,
    width: 27,
    top: 0,
    height: 26
  },
  sendMessageParent: {
    top: 11,
    left: 12,
    width: 345
  },
  resume: {
    top: 763,
    left: 22
  },
  menuBarIcon: {
    top: 824,
    width: 414,
    height: 72,
    left: 0,
    position: "absolute"
  },
  aiChat: {
    backgroundColor: "#f9f9f9",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden"
  }
});

export default AIChat;
