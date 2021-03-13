import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  Keyboard,
} from "react-native";

const height = StatusBar.currentHeight;

function NavBar({ navigation, back }) {
  // console.log("start========================================================");
  // console.log(navigation);

  return (
    <View
      style={{
        // position: "absolute",
        marginTop: height,
        backgroundColor: "#111",
        width: "100%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // padding: 5,
        paddingHorizontal: 15,
        zIndex: 5,
      }}
    >
      <View style={styles.leftCont}>
        {back && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.cont}>
              <Image
                source={require("../../assets/icons/previous.png")}
                style={styles.logo}
              ></Image>
            </View>
          </TouchableOpacity>
        )}
        <View style={styles.cont}>
          <Image
            source={require("../../assets/icons/google.png")}
            style={styles.logo}
          ></Image>
        </View>
      </View>
      <View style={styles.rightCont}>
        <TouchableOpacity>
          <View style={styles.cont}>
            <Image
              source={require("../../assets/icons/messenger.png")}
              style={styles.menu}
            ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <View style={styles.cont}>
            <Image
              source={require("../../assets/icons/menu.png")}
              style={styles.menu}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  leftCont: {
    height: "100%",
    width: "50%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  rightCont: {
    // backgroundColor: "red",
    height: "100%",
    width: "50%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  menu: {
    height: 26,
    width: 26,
    zIndex: 6,
    marginLeft: 20,
  },
  logo: {
    height: 28,
    width: 28,
    zIndex: 6,
    marginRight: 20,
  },
});

export default NavBar;
