import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import Banner from "../Components/Banner/Banner.js";
import NavBar from "../Components/NavBar/NavBar.js";
import Row from "../Components/Row/Row";
import { HomeRequests } from "../Components/Requests";

function HomeScreen({ navigation }) {
  // const [black, setBlack] = useState(false);

  // console.log(navigation);

  return (
    <View style={{ flex: 1, backgroundColor: "#111" }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#111" }}
        showsVerticalScrollIndicator={false}
      >
        <Banner
          fetchURL={HomeRequests.fetchNetflixOriginals}
          navigation={navigation}
          tv
        />
        <Row
          fetchURL={HomeRequests.fetchPopularTvShows}
          title={"POPULAR TV SHOWS"}
          navigation={navigation}
          tv
        />
        <Row
          fetchURL={HomeRequests.fetchTopRated}
          title={"TOP RATED"}
          navigation={navigation}
          tv
        />
        <Row
          fetchURL={HomeRequests.fetchTrending}
          title={"TRENDING"}
          navigation={navigation}
        />
        <Row
          fetchURL={HomeRequests.fetchActionMovies}
          title={"ACTION MOVIES"}
          navigation={navigation}
          movie
        />
        <Row
          fetchURL={HomeRequests.fetchHorrorMovies}
          title={"Horror Movies"}
          navigation={navigation}
          movie
        />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
