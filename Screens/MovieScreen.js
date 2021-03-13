import React, { useEffect, useState } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import axios from "axios";

import MovieTvBanner from "../Components/MovieTvBanner/index";
import Row from "../Components/Row/Row";
import { HomeRequests } from "../Components/Requests";
import Description from "../Components/Description/Description";
import SeasonBanners from "../Components/SeasonBanners/SeasonBanners";

const { scale } = Dimensions.get("screen");

function MovieScreen({ route, navigation }) {
  const [showDetails, setShowSetails] = useState({});

  const id = route.params;


  useEffect(() => {
    async function fetchDatas() {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=d0a6b59ce5d4305ca6cf3e0124eeec2f&language=en-US`
        )
        .then((req) => {
          // console.log(req);
          setShowSetails(req.data);
          // console.log(showDetails);
          // console.log(genres);
        })
        .catch((err) => {
          //   console.log(err);
        });
    }
    fetchDatas();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#222" }}>
      <MovieTvBanner showDetails={showDetails} />
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
        }}
        style={{
          position: "absolute",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          backgroundColor: "transparent",
          zIndex: 5,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            width: Dimensions.get("screen").width,
            height: scale > 2.5 ? 255 : 305,
          }}
        />
        <View
          style={{
            flex: 1,
            // bottom: 110,
            // height: "50%",
            backgroundColor: "#222",
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
          }}
        >
          <Description showDetails={showDetails} />
        </View>
      </ScrollView>
    </View>
  );
}

export default MovieScreen;
