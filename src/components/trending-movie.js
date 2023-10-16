import React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import MovieCard from "./movie-card";
import Loader from "./loader";

const { width, height } = Dimensions.get("window");

export default function TrendingMovie({ trending }) {
  return (
    <View className="mb-5">
      <Carousel
        data={trending}
        renderItem={({ item }) => <MovieCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.7}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}
