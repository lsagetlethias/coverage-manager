import * as Koa from 'koa';

const app = new Koa();

app.use(async (ctx, next) => {
    console.log('BEFORE AWAIT');
    console.log(ctx);
    await next();
    console.log('AFTER AWAIT');
});

app.listen(3000);