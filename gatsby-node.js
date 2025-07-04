exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.less$/,
            // Apply to all LESS files (including your own)
            use: loaders.null(),
          },
          {
            test: /react-icons/,
            use: loaders.null(),
          },
        ],
      },
    });
  } else {
    // Only run this on the browser/client side
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.less$/,
            use: [
              loaders.style(),
              loaders.css(),
              {
                loader: require.resolve('less-loader'),
                options: {
                  lessOptions: {
                    javascriptEnabled: true,
                  },
                },
              },
            ],
          },
        ],
      },
    });
  }
};
