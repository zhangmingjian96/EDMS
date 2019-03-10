    const path=require("path");
   const copy_plugin=require("copy-webpack-plugin");
   const html_plugin=require("html-webpack-plugin");
    module.exports={
        mode:"none",
        entry:{
            index:"./src/javascripts/index",
            login:"./src/javascripts/login",
        },
        output:{
            filename:"[name].js",
            path:path.join(__dirname,"../dev")},
        plugins: [
            new copy_plugin([{
            from:"./src/static",to:"static"
        }]),
         new html_plugin({
            template:"./src/index.html",
            filename:"index.html",
            chunks:["index"],
        }),

        new html_plugin({
            template:"./src/login.html",
            filename:"login.html",
            chunks:["login"],
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