import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

const { scale } = Dimensions.get("screen");

function MovieTvBanner({ showDetails }) {
  return (
    <View style={styles.bannerWrapper}>
      <Image
        // resizeMethod="resize"
        resizeMode="cover"
        style={styles.BgImage}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${showDetails?.backdrop_path}`,
        }}
        blurRadius={4}
      />
      <Image
        //   resizeMethod="resize"
        resizeMode="cover"
        style={styles.poster}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${showDetails?.poster_path}`,
        }}
      />
      <View style={styles.fade} />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerWrapper: {
    position: "absolute",
    zIndex: 1,
    height: scale > 2.5 ? 285 : 330,
    width: "100%",
    // justifyContent: "center",
  },
  fade: {
    position: "absolute",
    backgroundColor: "#0000007a",
    height: scale > 2.5 ? 285 : 330,
    width: "100%",
    zIndex: -1,
  },
  BgImage: {
    height: scale > 2.5 ? 285 : 330,
    width: "100%",
    zIndex: -2,
  },
  poster: {
    position: "absolute",
    width: scale > 2.5 ? 150 : 180,
    height: scale > 2.5 ? 220 : 270,
    top: scale > 2.5 ? 15 : 18,
    // zIndex: 2,
    backgroundColor: "transparent",
    alignSelf: "center",
    borderRadius: 6,
    borderWidth: 3,
    borderColor: "red",
  },
});

export default MovieTvBanner;
