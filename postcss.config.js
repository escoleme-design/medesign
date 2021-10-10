// module.exports = {
//     plugins: [
//         require("postcss-preset-env"),
//         require("postcss-import"),
//         require("tailwindcss"),
//         require("autoprefixer"),
//         require("postcss-nested"),
//     ],
// };

var tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    require("postcss-import"),

    tailwindcss("./tailwind.config.js"),
    require('autoprefixer'),
    require("postcss-nested"),
  ]
};