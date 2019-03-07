    const path=require("path");
   const copy_plugin=require("copy-webpack-plugin");
   const html_plugin=require("html-webpack-plugin");
    module.exports={
        mode:"none",
        entry:'./src/javascripts/index.js',
        output:{
            filename:"index.js",
            path:path.join(__dirname,"../dev")},
        plugins: [new copy_plugin([{
            from:"./src/static",to:"static"
        }]), new html_plugin({
            template:"./src/index.html",
            filename:"index.html",
        })
        ],
        devServer:{
            port:2019,
            proxy:{
                "/api":{
                    target:"http://localhost:1027",
                    changeOrigin:true,
                }

            }
        },
        module:{
            rules:[
                {test:/.html$/,use:"string-loader"},
                {test:/.(jpg)|(jpeg)|(gif)|(png)$/,use:{loader:"url-loader",
                options:{limit:"10240"}}},
                {test:/.(css|scss)$/,use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]}
            ]
        }


        }