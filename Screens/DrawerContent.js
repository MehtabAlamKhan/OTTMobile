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
          <Text>Hello</Text>
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
              style={{ position: "absolute", right: 10 }}
              color="white"
              size={30}
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
