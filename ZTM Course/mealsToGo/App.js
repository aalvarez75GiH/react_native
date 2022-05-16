import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";

console.log(StatusBar.currentHeight);
export default function App() {
  // const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    // setSearchQuery(query);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar
          // placeholder="San Francisco"
          // onChangeText={onChangeSearch}
          // value={searchQuery}
          />
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    color: "#ffffff",
    padding: 30,
  },
  search: {
    backgroundColor: "green",
    padding: 16,
    // marginTop: 0
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "orange",
  },
});
