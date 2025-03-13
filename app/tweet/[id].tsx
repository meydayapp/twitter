import { View, Text } from "react-native";
import tweets from "@/assets/data/tweets";
import Tweet from "@/components/Tweet";
import { useLocalSearchParams } from "expo-router";

export default function TweetScreen() {
  // const searchParams = useSearchParams();
  const { id } = useLocalSearchParams();
  console.warn(id);

  const tweet = tweets.find((t) => t.id === id);

  if (!tweet) {
    return (
      <View>
        <Text>Tweet not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Tweet tweet={tweet} />
    </View>
  );
}
