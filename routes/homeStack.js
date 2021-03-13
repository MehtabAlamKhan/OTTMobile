import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Screens/HomeScreen";
import NavBar from "../Components/NavBar/NavBar";
import TVScreen from "../Screens/TVScreen";
import MovieScreen from "../Screens/MovieScreen";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator>
    <Screen name="Home" options={{ header: NavBar }} component={Home} />
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
