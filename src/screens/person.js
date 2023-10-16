import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchPersonDetail, fetchPersonMovies } from "../api";
import Loader from "../components/loader";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";

export default function Person() {
  const { params: id } = useRoute();
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState({});
  const [personMovies, setPersonMovies] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const navigation = useNavigation();

  const getPersonDetail = async () => {
    const data = await fetchPersonDetail(id);
    setPerson(data);
    setIsLoading(false);
  };
  const getPersonMovies = async () => {
    const data = await fetchPersonMovies(id);
    setPersonMovies(data.cast);
  };

  useEffect(() => {
    getPersonDetail();
    getPersonMovies();
  }, [id]);

  return (
    <ScrollView
      className="flex-1 bg-slate-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <SafeAreaView
        className={
          "absolute z-20 w-full flex-row justify-between items-center px-4"
        }
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon color={"#fff"} strokeWidth={2.5} size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => setIsFavourite((prev) => !prev)}
        >
          <HeartIcon
            color={isFavourite ? "red" : "white"}
            strokeWidth={2.5}
            size={35}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {isLoading ? <Loader /> : <Text>Person</Text>}
    </ScrollView>
  );
}
