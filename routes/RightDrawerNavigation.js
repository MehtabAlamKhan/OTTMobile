import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./homeStack";
import SearchScreen from "../Screens/SearchScreen";
import Profile from "./../Screens/Profile";
import Friends from "./../Screens/Friends";
import Settings from "./../Screens/Settings";
import SearchStack from "./searchStack";
import DrawerContent from "../Screens/DrawerContent";

const Drawer = createDrawerNavigator();

export default function LeftDrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerPosition="right"
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Search" component={SearchStack} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Friends" component={Friends} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
