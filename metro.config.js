// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);
defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);
defaultConfig.resolver.sourceExts = [
  ...defaultConfig.resolver.sourceExts,
  (process.env.RN_SRC_EXT || "").split(","),
  "svg",
];

module.exports = defaultConfig;
