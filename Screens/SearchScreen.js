import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  Keyboard,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import axios from "axios";

import NavBar from "./../Components/NavBar/NavBar";

const { scale } = Dimensions.get("screen");

function SearchScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    // console.log(searchKey);
    if (!searchText) {
      setMovies([]);
      return;
    }
    async function fetchData() {
      setIsLoading(true);
      await axios
        .get(
          `https://api.themoviedb.org/3/search/multi?api_key=d0a6b59ce5d4305ca6cf3e0124eeec2f&language=en-US&query=${searchText}&page=1&include_adult=true`
        )
        .then((res) => {
          setMovies(res.data.results);
          // console.log(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {});
    }

    fetchData();
  }, [searchText]);

  const renderItems = ({ item }) => {
    const mediaType = item.media_type === "movie" ? "Movie" : "TV";
    return (
      (item.poster_path || item.backdrop_path) && (
        <TouchableOpacity
          onPress={() => navigation.navigate(mediaType, item.id)}
        >
          <View style={styles.eachCont}>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={{ uri: `${baseUrl}${item.poster_path}` }}
            ></Image>
            <View style={styles.des}>
              <Text style={styles.title}>
                {item.title || item.original_name}
              </Text>
              <Text style={styles.date}>Release Date: {item.release_date}</Text>
              <Text style={styles.rating}>Rating: {item.vote_average}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={{ backgroundColor: "#111", flex: 1, paddingHorizontal: 15 }}>
      
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#e7e7e778"
          selectionColor="#e7e7e7da"
          onChangeText={(text) => setSearchText(text)}
        />
      
      <View style={styles.resultCont}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={movies}
          renderItem={renderItems}
          onScroll={() => Keyboard.dismiss()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View></TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    color: "white",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#e7e7e7da",
    fontFamily: "monospace",
    padding: scale > 2.5 ? 5 : 8,
    paddingHorizontal: 10,
    fontSize: scale > 2.5 ? 14 : 16,
    marginTop: 10,
  },
  resultCont: { marginTop: 10, flex: 1 },
  eachCont: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    height: 150,
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
    // backgroundColor: "#4d4d4ddc",
    borderWidth: 2,
    borderColor: "#444444",
  },
  image: {
    height: 150,
    width: 100,
  },
  des: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 6,
    // backgroundColor: "aqua",
  },
  title: {
    // fontFamily: "monospace",
    fontSize: scale > 2.5 ? 16 : 18,
    color: "white",
    paddingRight: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  date: {
    fontSize: scale > 2.5 ? 11 : 13,
    fontFamily: "monospace",
    color: "white",
    paddingRight: 10,
    marginBottom: 2,
  },
  rating: {
    fontSize: scale > 2.5 ? 11 : 13,
    fontFamily: "monospace",
    color: "white",
    paddingRight: 10,
    marginBottom: 2,
  },
});

export default SearchScreen;
