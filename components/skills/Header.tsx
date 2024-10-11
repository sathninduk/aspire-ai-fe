import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ onChange, active }: { onChange: (screen: string) => void, active: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skills</Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => onChange?.("viewed")}>
          <Text style={[styles.tab, active === "viewed" ? styles.activeTab : {}]}>Viewed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onChange?.("overview")}>
          <Text style={[styles.tab, active === "overview" ? styles.activeTab : {}]} >Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onChange?.("sbadge")}>
          <Text style={[styles.tab, [styles.tab, active === "sbadge" ? styles.activeTab : {}]]}>Skill Badge</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginVertical: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  tab: {
    fontSize: 16,
    color: 'gray',
    paddingVertical: 6,
  },
  activeTab: {
    color: '#8A6AF7',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: '#8A6AF7',
  },
});

export default Header;
