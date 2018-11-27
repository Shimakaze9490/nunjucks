/* 此为koa模板生成的app.js文件。保留 */
let app = require("koa")(),
    logger = require("koa-logger"),
    json = require("koa-json"),
    views = require("koa-views"),
    onerror = require("koa-onerror");

let index = require("./routes/index");
let users = require("./routes/users");

// error handler
onerror(app);

// global middlewares
app.use(views("views", {
    root: __dirname + "/views",
    default: "jade"
}));
app.use(require("koa-bodyparser")());
app.use(json());
app.use(logger());

app.use(function *(next){
    let start = new Date;
    yield next;
    let ms = new Date - start;
    // eslint-disable-next-line
    console.log("%s %s - %s", this.method, this.url, ms);
});

app.use(require("koa-static")(__dirname + "/public"));

// routes definition
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
    // eslint-disable-next-line
    console.error("server error", err, ctx);
});

module.exports = app;
