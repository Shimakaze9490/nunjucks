let router = require("koa-router")();

router.prefix("/users");

router.get("/", function *(next) {
    // add yield
    yield this.body = "this is a users response!";
});

router.get("/bar", function *(next) {
    yield this.body = "this is a users/bar response!";
});

module.exports = router;
