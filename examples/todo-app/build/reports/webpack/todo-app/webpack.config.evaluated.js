{
  mode: 'production',
  resolve: {
    modules: [
      '/home/happycod3r/projects/kotron/examples/todo-app/build/js/packages/todo-app/kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/home/happycod3r/projects/kotron/examples/todo-app/build/js/packages/todo-app/kotlin-dce/todo-app.js'
    ]
  },
  output: {
    path: '/home/happycod3r/projects/kotron/examples/todo-app/build/distributions',
    filename: [Function: filename],
    library: 'todo-app',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      '/home/happycod3r/projects/kotron/examples/todo-app/build/processedResources/js/main'
    ]
  },
  stats: {
    warnings: false,
    errors: false
  }
}