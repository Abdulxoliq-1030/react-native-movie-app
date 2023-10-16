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
import Loader from "../components/loader";

export default function Home({ navigation }) {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTrendingMovie = async () => {
    const data = await fetchTrendingMovie();
    data.results && setTrending(data.results);
    setIsLoading(false);
  };

  const getUpcomingMovie = async () => {
    const data = await fetchUpcomingMovie();
    data.results && setUpcoming(data.results);
  };

  const getTopRatedMovie = async () => {
    const data = await fetchTopRatedMovie();
    data.results && setTopRated(data.results);
  };

  const popularMovie = async () => {
    const data = await fetchPopularMovie();
    data.results && setPopular(data.results);
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

      {isLoading ? (
        <Loader />
      ) : (
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
          {trending.length > 0 && (
            <TrendingMovie trending={trending.reverse()} />
          )}
        </ScrollView>
      )}
    </View>
  );
}
