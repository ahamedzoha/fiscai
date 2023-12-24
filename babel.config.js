module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@assets": "./src/assets",
            "@utils": "./src/utils",
            "@hooks": "./src/hooks",
            "@constants": "./src/constants",
            "@navigation": "./src/navigation",
            "@services": "./src/services",
            "@contexts": "./src/contexts",
          },
        },
      ],
      // Add any other plugins here
    ],
  };
};
