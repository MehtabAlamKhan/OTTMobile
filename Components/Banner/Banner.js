import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";

import { styles } from "./styles";
import { SvgXml } from "react-native-svg";
import UserScore from "../UserScore";
import bookmark from "../../assets/icons/bookmark.js";
import play from "../../assets/icons/play.js";

function Banner({ fetchURL, navigation }) {
  const [movies, setMovie] = useState([]);
  const { landscape } = useDeviceOrientation();
  

  async function fetchData() {
    await axios
      .get(fetchURL)
      .then((res) => {
        // setRefreshing(false);
        // console.log(res.data.results);
        setMovie(res.data.results);
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  // console.log(movies);

  useEffect(() => {
    fetchData();
  }, [fetchURL]);

  var { width } = useDimensions().window;
  useEffect(() => {
    width = Dimensions.get("screen").width;
  }, [landscape]);

  const renderItems = ({ item, index }) => {
    return (
      <View style={styles.bannerCont} >
        {/* {console.log(movie?.name)} */}

        <Image
          resizeMethod="resize"
          resizeMode="cover"
          style={styles.imageBanner}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item?.backdrop_path}`,
            width: width,
            height: 240,
          }}
        ></Image>
        <View style={styles.detailsCont}>
          <TouchableOpacity onPress={() => navigation.navigate("TV", item.id)}>
            <Text numberOfLines={1} style={styles.title}>
              {item?.name || item?.title || item?.original_name}
            </Text>
          </TouchableOpacity>
          <View style={styles.iconsCont}>
            <UserScore score={item.vote_average} width={35} />
            <TouchableHighlight>
              <SvgXml xml={play} style={styles.play} width={35} height="100%" />
            </TouchableHighlight>
            <SvgXml
              xml={bookmark}
              style={styles.play}
              width={35}
              height="100%"
            />
          </View>
          <Text numberOfLines={3} style={styles.description}>
            {item?.overview}
          </Text>
        </View>
        <LinearGradient
          colors={["transparent", "#111"]}
          style={styles.linearGrad}
        />
      </View>
    );
  };

  return (
    movies && (
      <View
        style={{
          position: "relative",
          flex: 1,
          zIndex: -1,
          height: landscape ? 370 : 270,
          width: width,
          marginBottom: 40,
        }}
      >
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItems}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          pagingEnabled
        />
      </View>
    )
  );
}

export default Banner;
