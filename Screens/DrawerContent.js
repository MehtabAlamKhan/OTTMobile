import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { height } = Dimensions.get("screen");
// console.log(height);
const iconSize = 25;

function DrawerContent(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111",
        paddingTop: 60,
      }}
    >
      <DrawerContentScrollView {...props}>
        <View>          
          <Drawer.Section>
            <DrawerItem
              style={{ display: "flex", color: "white" }}
              label={({ focused, color }) => (
                <Text
                  style={{
                    color: "white",
                    fontFamily: "monospace",
                    fontSize: 16,
                  }}
                >
                  Home
                </Text>
              )}
              icon={({ focused, color, size }) => (
                <Icon
                  // style={{ position: "absolute", right: 10 }}
                  color="white"
                  size={iconSize}
                  name="home-outline"
                />
              )}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />

            <DrawerItem
              style={{ display: "flex", color: "white" }}
              label={({ focused, color }) => (
                <Text
                  style={{
                    color: "white",
                    fontFamily: "monospace",
                    fontSize: 16,
                  }}
                >
                  Search
                </Text>
              )}
              icon={({ focused, color, size }) => (
                <Icon
                  // style={{ position: "absolute", right: 10 }}
                  color="white"
                  size={iconSize}
                  name="magnify"
                />
              )}
              onPress={() => {
                props.navigation.navigate("Search");
              }}
            />
            <DrawerItem
              style={{ display: "flex", color: "white" }}
              label={({ focused, color }) => (
                <Text
                  style={{
                    color: "white",
                    fontFamily: "monospace",
                    fontSize: 16,
                  }}
                >
                  Bookmarks
                </Text>
              )}
              icon={({ focused, color, size }) => (
                <Icon
                  // style={{ position: "absolute", right: 10 }}
                  color="white"
                  size={iconSize}
                  name="bookmark-multiple-outline"
                />
              )}
              onPress={() => {
                props.navigation.navigate("Bookmarks");
              }}
            />
            <DrawerItem
              style={{ display: "flex", color: "white" }}
              label={({ focused, color }) => (
                <Text
                  style={{
                    color: "white",
                    fontFamily: "monospace",
                    fontSize: 16,
                  }}
                >
                  Profile
                </Text>
              )}
              icon={({ focused, color, size }) => (
                <Icon
                  // style={{ position: "absolute", right: 10 }}
                  color="white"
                  size={iconSize}
                  name="account-box"
                />
              )}
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            />
            <DrawerItem
              style={{ display: "flex", color: "white" }}
              label={({ focused, color }) => (
                <Text
                  style={{
                    color: "white",
                    fontFamily: "monospace",
                    fontSize: 16,
                  }}
                >
                  Friends
                </Text>
              )}
              icon={({ focused, color, size }) => (
                <Icon
                  // style={{ position: "absolute", right: 10 }}
                  color="white"
                  size={iconSize}
                  name="account-multiple-plus"
                />
              )}
              onPress={() => {
                props.navigation.navigate("Friends");
              }}
            />
            <DrawerItem
              style={{ display: "flex", color: "white" }}
              label={({ focused, color }) => (
                <Text
                  style={{
                    color: "white",
                    fontFamily: "monospace",
                    fontSize: 16,
                  }}
                >
                  Settings
                </Text>
              )}
              icon={({ focused, color, size }) => (
                <Icon
                  // style={{ position: "absolute", right: 10 }}
                  color="white"
                  size={iconSize}
                  name="cog"
                />
              )}
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
            
            
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section>
        <DrawerItem
          style={{ display: "flex", color: "white" }}
          label={({ focused, color }) => (
            <Text
              style={{ color: "white", fontFamily: "monospace", fontSize: 16 }}
            >
              Sign Out
            </Text>
          )}
          icon={({ focused, color, size }) => (
            <Icon
              // style={{ position: "absolute", right: 10 }}
              color="white"
              size={iconSize}
              name="exit-to-app"
            />
          )}
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({});

export default DrawerContent;
