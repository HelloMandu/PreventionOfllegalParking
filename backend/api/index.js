const Koa = require('koa');
const Router = require('koa-router');
const section = require('./section');

const app = new Koa();
const router = new Router();

router.get('/', ctx=>{
    ctx.body="test"
})

router.use('/section', section.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () =>{
    console.log("4000good");
})