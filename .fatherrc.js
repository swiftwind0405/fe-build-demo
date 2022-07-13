const type = process.env.BUILD_TYPE;

let config = {};

if (type === 'lib') {
  config = {
    cjs: { type: 'babel', lazy: true },
    esm: false,
    extraBabelPlugins: [
      ["module-resolver", {
        "extensions": [".js", ".jsx", ".json", ".ts", ".tsx"],
        "root": ["./"],
        "alias": {
          "@": "./src"
        }
      }],
    ],
    disableTypeCheck: true,
  };
}

if (type === 'es') {
  config = {
    cjs: false,
    esm: {
      type: 'babel',
    },
    extraBabelPlugins: [
      ["module-resolver", {
        "extensions": [".js", ".jsx", ".json", ".ts", ".tsx"],
        "root": ["./"],
        "alias": {
          "@": "./src"
        }
      }],
    ],
    disableTypeCheck: false,
  };
}


export default config;
