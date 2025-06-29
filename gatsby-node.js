

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

// WORKS FOR DEVELOP NOT BUILD
// const path = require('path');

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === 'build-html') {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           // Null-load react-icons and other problematic client-only modules
//           {
//             test: /react-icons/,
//             use: loaders.null(),
//           },
//           // Null-load all less files from node_modules at SSR
//           {
//             test: /\.less$/,
//             include: /node_modules/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }

//   // Load your project's less files normally
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /\.less$/,
//           exclude: /node_modules/,
//           use: [
//             loaders.style(),
//             loaders.css(),
//             {
//               loader: require.resolve('less-loader'),
//               options: { lessOptions: { javascriptEnabled: true } },
//             },
//           ],
//         },
//       ],
//     }
//   })
// };


/////// BREAK /////////

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             // Null-load all CSS files
//             test: /\.(css|less)$/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html" || stage === "develop-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /bad-module/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }

// const path = require('path');

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === 'build-html') {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           // Null-load less files inside node_modules during SSR
//           {
//             test: /\.less$/,
//             include: /node_modules/,
//             use: loaders.null(),
//           }
//         ],
//       },
//     })
//   }

//   // Always process your project's less files
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /\.less$/,
//           exclude: /node_modules/, // Don't re-process node_modules
//           use: [
//             loaders.style(),
//             loaders.css(),
//             {
//               loader: require.resolve('less-loader'),
//               options: { lessOptions: { javascriptEnabled: true } }
//             }
//           ]
//         }
//       ],
//     }
//   })
// }


// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           // ✅ Match styles inside src/styles/**/*.less — process normally
//           {
//             test: /\.less$/,
//             include: /src\/styles/,             // <- specifically allow this path
//             use: [
//               loaders.css(),
//               {
//                 loader: require.resolve('less-loader'),
//                 options: { lessOptions: { javascriptEnabled: true } },
//               },
//             ],
//           },
//           // ❌ Null-load all other less files outside src/styles
//           {
//             test: /\.less$/,
//             exclude: /src\/styles/,
//             use: loaders.null(),
//           },
//           // ❌ Null-load all other css files outside src/styles
//           {
//             test: /\.css$/,
//             exclude: /src\/styles/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   } else {
//     // ✅ Everything else (develop, build-javascript) — process as usual
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /\.less$/,
//             use: [
//               loaders.style(),
//               loaders.css(),
//               {
//                 loader: require.resolve('less-loader'),
//                 options: { lessOptions: { javascriptEnabled: true } },
//               },
//             ],
//           },
//           {
//             test: /\.css$/,
//             use: [loaders.style(), loaders.css()],
//           },
//         ],
//       },
//     })
//   }
// }

// // gatsby-node.js
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     // SSR build - null-load all styles
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /\.(less|css)$/, // Match BOTH less and css
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   } else {
//     // Dev and client-side builds
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /\.less$/,
//             use: [
//               loaders.style(),
//               loaders.css(),
//               {
//                 loader: require.resolve('less-loader'),
//                 options: { lessOptions: { javascriptEnabled: true } },
//               },
//             ],
//           },
//           {
//             test: /\.css$/,
//             use: [loaders.style(), loaders.css()],
//           },
//         ],
//       },
//     })
//   }
// }


// exports.onCreateWebpackConfig = ({ stage, loaders, actions, getConfig }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           // Null-load any less files
//           {
//             test: /\.less$/,
//             use: [
//               loaders.null(),
//               loaders.css(),
//               {
//                 loader: require.resolve('less-loader'),
//                 options: { lessOptions: { javascriptEnabled: true } },
//               },
//             ],
//           },
//           // Null-load any style-loader (this matches any CSS files)
//           {
//             test: /\.css$/, // Also match plain CSS
//             use: loaders.null(),
//           }
//         ],
//       },
//     })
//   }
// };


// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     // During SSR, replace style-loader with null-loader (no-op)
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /\.less$/,
//             use: [
//               loaders.null(),  // <-- here replace style-loader with null-loader
//               loaders.css(),
//               {
//                 loader: require.resolve('less-loader'),
//                 options: {
//                   lessOptions: {
//                     javascriptEnabled: true,
//                   },
//                 },
//               },
//             ],
//           },
//           {
//             // Also exclude react-icons during SSR (optional, but recommended)
//             test: /react-icons/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   } else {
//     // For other stages (normal build), use normal style-loader
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /\.less$/,
//             use: [
//               loaders.style(),
//               loaders.css(),
//               {
//                 loader: require.resolve('less-loader'),
//                 options: {
//                   lessOptions: {
//                     javascriptEnabled: true,
//                   },
//                 },
//               },
//             ],
//           },
//         ],
//       },
//     })
//   }
// }