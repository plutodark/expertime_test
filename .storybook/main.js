const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });
    config.module.rules.push({
      // test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      test: /\.(woff|woff2|eot|ttf)$/,
      use: [{
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        }
      }],
      include: path.resolve(__dirname, '../')
    });
    // Return the altered config
    return config;
  }
};
