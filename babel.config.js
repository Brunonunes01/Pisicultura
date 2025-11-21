module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ... outros plugins
      // O plugin do Reanimated DEVE ser o último da lista.
      'react-native-reanimated/plugin', 
    ],
  };
};