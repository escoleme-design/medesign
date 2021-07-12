const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  components: './src/index.ts',
  snippets: './playroom/snippets.js',
  outputPath: './dist',
  webpackConfig: () => ({
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          include: [
            path.resolve(__dirname, 'src', 'sass')
        ],
        use: ['style-loader', {
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: false,
          },
        }, 'css-loader', 'sass-loader']
        }
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      
    },
  }),
};