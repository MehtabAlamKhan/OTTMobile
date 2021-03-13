import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";

const { scale } = Dimensions.get("screen");

function SeasonBanners({ showDetails }) {
  const [seasons, setSeasons] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    if (showDetails.seasons) {
      setSeasons(showDetails.seasons);
    }
  }, [showDetails]);

  const renderItems = ({ item, index }) => {
    return (
      <View key={index}>
        <Image
          style={styles.image}
          resizeMethod="resize"
          resizeMode="cover"
          source={{
            uri: `${baseUrl}${item.poster_path || showDetails.poster_path}`,
            height: scale > 2.5 ? 170 : 210,
            width: scale > 2.5 ? 115 : 140,
          }}
        />
        <View style={styles.desCont}>
          <Text style={styles.des}>{item.name}</Text>
          <Text style={styles.des}>No of Episodes : {item.episode_count}</Text>
          <Text style={styles.des}>Released on : {item.air_date}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.season}>SEASONS</Text>
      <FlatList
        data={seasons}
        keyExtractor={(season) => season.name}
        removeClippedSubviews
        renderItem={renderItems}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  season: { color: "white", fontSize: scale > 2.5 ? 18 : 20, marginBottom: 5 },
  image: {
    marginBottom: 5,
    marginRight: 10,
  },
  desCont: {
    paddingRight: 10,
  },
  des: {
    color: "white",
    display: "flex",
    fontSize: scale > 2.5 ? 10 : 12,
  },
});

export default SeasonBanners;
