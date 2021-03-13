import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NavBar from "../Components/NavBar/NavBar";
import TVScreen from "../Screens/TVScreen";
import MovieScreen from "../Screens/MovieScreen";
import SearchScreen from "./../Screens/SearchScreen";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator>
    <Screen
      name="Search"
      options={{ header: NavBar }}
      component={SearchScreen}
    />
    <Screen
      name="TV"
      options={{
        header: (navigation) => <NavBar navigation={navigation.navigation} back />,
      }}
      component={TVScreen}
    />
    <Screen
      name="Movie"
      options={{
        header: (navigation) => <NavBar navigation={navigation.navigation} back />,
      }}
      component={MovieScreen}
    />
  </Navigator>
);

const HomeScreenNavigator = () => <HomeNavigator />;
export default HomeScreenNavigator;
