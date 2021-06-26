let config = {
  mode: 'production',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/home/happycod3r/projects/kotron/examples/todo-app/build/js/packages/todo-app/kotlin-dce/todo-app.js"]
};

config.output = {
    path: "/home/happycod3r/projects/kotron/examples/todo-app/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "todo-app.js"
            : "todo-app-[name].js";
    },
    library: "todo-app",
    libraryTarget: "umd",
    globalObject: "this"
};

// resolve modules
config.resolve.modules.unshift("/home/happycod3r/projects/kotron/examples/todo-app/build/js/packages/todo-app/kotlin-dce")

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'source-map';
config.ignoreWarnings = [/Failed to parse source map/]

// dev server
config.devServer = {
  "open": true,
  "static": [
    "/home/happycod3r/projects/kotron/examples/todo-app/build/processedResources/js/main"
  ]
};

// css settings
;(function(config) {
    ;(function(config) {
       const use = [
           {
               loader: 'css-loader',
               options: {},
           }
       ]
       use.unshift({
           loader: 'style-loader',
           options: {}
       })
       
       config.module.rules.push({
           test: /\.css$/,
           use: use,
           
           
       })

   })(config);
            
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/home/happycod3r/projects/kotron/examples/todo-app/build/reports/webpack/todo-app/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
