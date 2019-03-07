const style=require("../stylesheets/index.scss");
const appHomePageRender=require("./controllers/home-page");

const routerRender=require("./routes/router");
console.log(routerRender);
appHomePageRender();
routerRender();  
