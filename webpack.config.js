var webpack           = require('webpack');
var path              = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var plugins = [ 
    //Biztositja a megjelolt globalis valtozok letezeset az egyes modulok szamara
    new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
        'window.jQuery': 'jquery'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin(
        {
            name: [
                'app',
                'vendor', 
                'polyfills'
            ],
            minChunks: Infinity
        }
    ),
    /* Az osszecsomagolt js bundle filebol kiveszi kulon fileba a css blokkokat */
    new ExtractTextPlugin("./assets/css/style.css")/*,
    new webpack.optimize.UglifyJsPlugin({
        mangle: {
            except: ['RouterLink', 'NgFor', 'NgModel']
        }
    })*/
];

module.exports = {
    
    resolve: { 
        root: [ path.join(__dirname, 'src') ],
        extensions: ['', '.ts', '.js', '.scss'/*, '.css', '.jpg', '.png', '.html'*/]
    },
  
    entry: {
        vendor: './src/main/resources/public/vendor.ts',
        polyfills: './src/main/resources/public/polyfills.ts',
        app: './src/main/resources/public/main.ts'
    },
    
    output: {
        path: path.join(__dirname, '/target/classes/public/'),
        filename: 'js/[name].bundle.js'
    },
    
    /**
     * Cannot cache SourceMaps for modules and need to regenerate complete SourceMap for the chunk. It’s something for production.
     */
    devtool: "source-map",
    
    module: {
        
        preLoaders: [
            { test: /\.ts$/, loader: 'tslint-loader', exclude: [ path.join(__dirname, ('node_modules')) ] },
            { test: /\.js$/, loader: 'source-map-loader', exclude: /node_modules(\/|\\)rxjs/ }
        ],
        
        loaders: [
            //{ test: /\.css$/,  loaders: ['style', 'css']},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract(['css?sourceMap', 'sass?sourceMap']) },
            { test: /\.ts$/,   loader: 'ts' },
            //{ test: /\.html$/, loader: 'raw' },
            //{ test: /\.(jpg|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader : 'file?name=./[name].[ext]' }
            //{ test: /\.(jpe?g|png|gif)(\?[a-z0-9]+)?$/i, loader : 'file?name=./assets/images/[name].[ext]"' },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/i, loader : 'url' }
        ],
        
        noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles', 'typings') ]
    },
    
    sassLoader: {
        includePaths: [path.resolve(__dirname, './src/main/resources/public/assets')],
        sourceComments: true,
        outputStyle: "compact"
    },
    
    plugins: plugins
    
};

