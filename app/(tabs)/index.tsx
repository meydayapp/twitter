import {
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import tweets from "@/assets/data/tweets";
import Tweet from "@/components/Tweet";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      <Link href={"/new-tweet"} asChild>
        <Entypo
          name="plus"
          size={24}
          color="white"
          style={styles.floatingButton}
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {
    padding: 15,
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#1c9bF0",

    position: "absolute",
    bottom: 15,
    padding: 10,
    right: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    overflow: "hidden",
  },
});
