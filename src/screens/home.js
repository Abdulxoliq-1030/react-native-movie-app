import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  fetchPopularMovie,
  fetchTopRatedMovie,
  fetchTrendingMovie,
  fetchUpcomingMovie,
} from "../api";
import TrendingMovie from "../components/trending-movie";
import TopRatedMovie from "../components/top-rated-movie";
import UpcomingMovie from "../components/upcoming-movie";

export default function Home({ navigation }) {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);

  const getTrendingMovie = async () => {
    const data = await fetchTrendingMovie();
    setTrending(data.results);
  };

  const getUpcomingMovie = async () => {
    const data = await fetchUpcomingMovie();
    setUpcoming(data.results);
  };

  const getTopRatedMovie = async () => {
    const data = await fetchTopRatedMovie();
    setTopRated(data.results);
  };

  const popularMovie = async () => {
    const data = await fetchPopularMovie();
    setPopular(data.results);
  };

  useEffect(() => {
    getTrendingMovie();
    getUpcomingMovie();
    getTopRatedMovie();
    popularMovie();
  }, []);

  return (
    <View className="flex-1 bg-slate-900">
      <SafeAreaView>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Text style={{ color: "#fff", fontSize: 40 }}>Movie</Text>
          <MagnifyingGlassIcon size={30} strokeWidth={2} color={"#fff"} />
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {trending.length > 0 && (
          <UpcomingMovie
            upcoming={trending.reverse()}
            title={"Trending movie"}
          />
        )}
        {upcoming.length > 0 && <TrendingMovie trending={topRated} />}
        {popular.length > 0 && (
          <UpcomingMovie upcoming={popular} title={"Popular movie"} />
        )}
        {topRated.length > 0 && (
          <UpcomingMovie upcoming={upcoming} title="Upcoming movie" />
        )}
        {trending.length > 0 && <TrendingMovie trending={trending.reverse()} />}
      </ScrollView>
    </View>
  );
}
