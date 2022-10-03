module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['macros'],
  };
};

// module.exports = function (api) {
//   api.cache(true);
//   return {
//     plugins: ['macros'],
//   }
// }
