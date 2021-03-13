import React from "react";
import Svg, { Circle } from "react-native-svg";
import { View } from "react-native";
import { Text } from "react-native";

function UserScore({ score, width }) {
  function percentage() {
    // console.log(Math.floor((116 / 10) * score));
    return Math.floor((100 / 10) * score);
  }

  function color() {
    if (score >= 8.5) {
      return "#31f031";
    } else if (score >= 8 && score < 8.5) {
      return "#b7f031";
    } else if (score >= 7 && score < 8) {
      return "#edf031";
    } else if (score >= 6 && score < 7) {
      return "#f0c331";
    } else if (score >= 4 && score < 6) {
      return "#f07731";
    } else {
      return "#dd2121";
    }
  }

  return (
    <View
      style={{
        height: "100%",
        width: width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: width === 35 ? "rgba(17, 17, 17, 0.7)" : "",
      }}
    >
      <Svg style={{ width: "100%", height: "100%" }}>
        <Circle
          r={width === 35 ? "15" : "17"}
          cx="50%"
          cy="50%"
          stroke="none"
          fill="none"
          strokeWidth="5"
          strokeDasharray={`${score === 0 ? "100" : "0"}`}
        ></Circle>
        <Circle
          r={width === 35 ? "15" : "17"}
          cx="50%"
          cy="50%"
          stroke={color()}
          fill="none"
          strokeWidth="5"
          strokeDasharray={`${percentage()}`}
        ></Circle>
      </Svg>
      <Text
        style={{
          position: "absolute",
          color: "white",
          fontSize: 12,
        }}
        id="circle-percentage"
      >
        {score === 0 ? "NA" : `${score}`}
      </Text>
    </View>
  );
}

export default UserScore;
