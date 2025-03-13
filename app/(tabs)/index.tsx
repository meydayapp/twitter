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

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      <Pressable style={styles.floatingButton}></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {},
});
