module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './src',  // Match this to your `tsconfig.json` paths
          },
        },
      ],
    ],
  };
};
