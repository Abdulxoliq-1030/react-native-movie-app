import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import { fetchSearchMovie } from "../api";
import { debounce } from "lodash";

export default function Search() {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (searchText) => {
    if (searchText && searchText.length > 3) {
      setIsLoading(true);
      fetchSearchMovie({
        query: searchText,
        page: "1",
        include_adult: false,
        language: "en-US",
      }).then((data) => {
        setIsLoading(false);
        setResults(data.results);
      });
    } else {
      setResults([]);
      setIsLoading(false);
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-400 rounded-full">
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder="Search movie"
          placeholderTextColor={"lightgray"}
          className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wide"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="rounded-full p-3 m-1 bg-neutral-400"
        >
          <XMarkIcon color={"#fff"} size={25} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
