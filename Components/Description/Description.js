import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";

import UserScore from "../UserScore";
import bookmark from "../../assets/icons/bookmark.js";
import play from "../../assets/icons/play.js";

const { scale } = Dimensions.get("screen");

function Description({ showDetails }) {
  const genres = showDetails.genres;

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.title}>
        {showDetails.name || showDetails.title || showDetails.original_name}
        {showDetails.episode_run_time && (
          <Text
            style={{
              fontSize: scale > 2.5 ? 12 : 18,
              color: "yellow",
              fontFamily: "monospace",
            }}
          >
            {"   " + showDetails.episode_run_time[0]}mins
          </Text>
        )}
      </Text>
      <View style={styles.genreCont}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {genres &&
            genres.map((g) => (
              <Text numberOfLines={1} style={styles.genre} key={g.id}>
                {g.name + ","}
              </Text>
            ))}
        </ScrollView>
      </View>
      <View style={styles.iconsCont}>
        <UserScore score={showDetails.vote_average} width={40} />
        <SvgXml xml={play} style={styles.play} width={40} height="100%" />
        <SvgXml xml={bookmark} style={styles.play} width={40} height="100%" />
      </View>
      <View 
      
      style={styles.overview}>
        <Text
          style={{
            color: "green",
            fontSize: scale > 2.5 ? 19 : 22,
            fontWeight: "bold",
          }}
        >
          Overview
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.description}>{showDetails?.overview}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontFamily: "monospace",
    fontSize: scale > 2.5 ? 21 : 23,
    fontWeight: "bold",
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  genreCont: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  genre: {
    color: "#d3d3d3",
    fontFamily: "monospace",
    fontSize: scale > 2.5 ? 12 : 17,
  },
  iconsCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    width: 200,
    marginBottom: 15,
    paddingLeft: 20,
  },
  overview: {
    padding: scale > 2.5 ? 14 : 15,
    paddingTop: 5,
    backgroundColor: "#00000062",
    borderRadius: 10,
    maxHeight: 200,
    overflow: "hidden",
    marginHorizontal: 10,
    marginBottom: 15,
  },
  description: {
    color: "white",
    fontSize: scale > 2.5 ? 14 : 15,
    fontFamily: "monospace",
    lineHeight: scale > 2.5 ? 18 : 22,
  },
});

export default Description;
