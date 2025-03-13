import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";

const user = {
  id: "u1",
  username: "kentcdodds",
  name: "Kent C. Dodds",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/thumbnail.png",
};

export default function NewTweet() {
  const [text, setText] = useState("");
  const router = useRouter();

  const onTweetPress = () => {
    console.warn("Tweeted: ", text);

    setText("");
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 20 }}>
            Cancel
          </Link>
          <Pressable onPress={onTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <Image src={user.image} style={styles.image} />
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="What's happening?"
            multiline
            numberOfLines={5}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
