const Koa = require("koa");
const app = new Koa();
const port = 3000;
const nunjucks = require("nunjucks");

/* 声明：存放模板的目录，views;opts为功能参数 */
nunjucks.configure("views", { autoescape: true });
/* Context上下文环境。 */
app.use(async ctx => {
    ctx.response.type = "html";
    // ctx.response.body = "<h1>今天星期二</h1>"
    // 页面渲染，并传递参数
    ctx.response.body = nunjucks.render("hello.html", { name: "nunjucks" });
});
app.listen(port, res => {
    // eslint-disable-next-line
    console.log("running server at port:"+ port);
});