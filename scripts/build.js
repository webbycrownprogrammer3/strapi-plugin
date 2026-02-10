const path = require('path');
const fs = require('fs-extra');
const webpack = require('webpack');

const isWatch = process.argv.includes('--watch');
const isProduction = process.env.NODE_ENV === 'production';

// Clean dist folder
const distPath = path.resolve(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  fs.removeSync(distPath);
}
fs.ensureDirSync(distPath);

// Copy server files
const serverSrc = path.resolve(__dirname, '../server/src');
const serverDist = path.resolve(__dirname, '../dist/server');

if (fs.existsSync(serverSrc)) {
  fs.copySync(serverSrc, serverDist);
}

// Build admin panel
const adminConfig = {
  mode: isProduction ? 'production' : 'development',
  entry: path.resolve(__dirname, '../admin/src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist/admin'),
    filename: 'index.js',
    library: {
      type: 'commonjs2',
    },
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-router-dom': 'react-router-dom',
    '@strapi/design-system': '@strapi/design-system',
    '@strapi/icons': '@strapi/icons',
    '@strapi/strapi': '@strapi/strapi',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
};

const compiler = webpack(adminConfig);

if (isWatch) {
  compiler.watch({}, (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stats.toString({ colors: true }));
  });
} else {
  compiler.run((err, stats) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    if (stats.hasErrors()) {
      console.error(stats.toString({ colors: true }));
      process.exit(1);
    }
    console.log(stats.toString({ colors: true }));
  });
}
