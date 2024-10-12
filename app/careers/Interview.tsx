import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { BACKEND_URL } from '@/config';

