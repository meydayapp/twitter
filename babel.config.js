module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require.resolve("expo-router/babel"), // ✅ Required if using Expo Router
      "react-native-reanimated/plugin",
    ],
  };
};
