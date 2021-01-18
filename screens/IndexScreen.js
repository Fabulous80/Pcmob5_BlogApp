import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { commonStyles } from "../styles/commonStyles";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { API, API_ALL_POSTS, API_DELETE_POST_ID } from "../hooks/useAPI";
import { Card, CardItem, Body } from "native-base";

export default function IndexScreen({ navigation }) {
  const isDarkModeOn = useSelector((state) => state.prefs.darkMode);

  return (
    <View
      style={[
        commonStyles.container,
        isDarkModeOn && { backgroundColor: "black" },
      ]}
    >
      <Text style={isDarkModeOn && { color: "white" }}>Index Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
