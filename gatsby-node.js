exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    // During SSR, replace style-loader with null-loader (no-op)
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.less$/,
            use: [
              loaders.null(),  // <-- here replace style-loader with null-loader
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
          {
            // Also exclude react-icons during SSR (optional, but recommended)
            test: /react-icons/,
            use: loaders.null(),
          },
        ],
      },
    })
  } else {
    // For other stages (normal build), use normal style-loader
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
    })
  }
}