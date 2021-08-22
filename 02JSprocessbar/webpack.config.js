const {resolve} = require('path')
module.exports = {
    entry:'./index.js',
    output:{
        filename: 'bundle.js',
        path:resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[],
    mode: 'development',

    devServer:{
        contentBase:resolve(__dirname, 'dist'),
        compress:true,
        port:3000,
        open:true,
    }
}