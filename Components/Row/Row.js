import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

function Row({ fetchURL, title, navigation, tv, movie }) {
  const [movies, setMovies] = useState([]);
  var mediaType;
  if (tv) {
    mediaType = "TV";
  }
  if (movie) {
    mediaType = "Movie";
  }

  useEffect(() => {
    // console.log("fetch data called");
    async function fetchData() {
      await axios
        .get(fetchURL)
        .then((req) => {
          setMovies(req.data.results);
        })
        .catch((err) => {});
    }
    fetchData();
  }, [fetchURL]);

  return (
    <View marginHorizontal={10} style={styles.wrapper}>
      <Text style={styles.text}>{title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {movies &&
          movies.map((movie, idx) => (
            <View key={idx}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    movie.media_type === "movie" ? "Movie" : mediaType ? mediaType : "TV",
                    movie.id
                  )
                }
              >
                <Image
                  resizeMethod="resize"
                  style={styles.image}
                  resizeMode="cover"
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
                    height: 150,
                    width: 100,
                  }}
                ></Image>
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 40,
  },
  text: {
    color: "white",
    fontFamily: "monospace",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 10,
  },
  image: {
    // marginTop: 5,
    marginRight: 8,
    // borderRadius: 3,
    backfaceVisibility: "hidden",
  },
});

export default Row;
