import { Image, Text, TouchableHighlight, View } from "react-native";
import SearchBar from "./SearchBar";
import ProgressBar from "./ProgressBar";
import { router } from 'expo-router';

function SkillBadge() {
    return (
        <View>
            <SearchBar />
            <View style={{ flex: 1, gap: 30, marginTop: 34 }}>
                <SkillProgress onPress={() => router.navigate("/skills/view-skill-status")} />
                <SkillProgress />
                <SkillProgress />
                <SkillProgress />
                <SkillProgress />
            </View>
        </View>
    )
}

function SkillProgress({ onPress }: { onPress?: () => void }) {
    return (
        <TouchableHighlight onPress={() => { onPress?.() }} style={{ flex: 1 }}>
            <>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    <Image source={require("../../assets/images/Filter.png")} resizeMode="contain" style={{ height: 40, marginRight: 12, marginBottom: 16 }} />
                    <Text>{"Project Management"}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row", gap: 5 , alignItems: "center"}}><ProgressBar /><Text>80%</Text></View>
            </>
        </TouchableHighlight>
    )
}

export default SkillBadge;