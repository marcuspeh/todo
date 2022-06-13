import Koa from 'koa'
import bodyParser from 'koa-bodyparser';

import routes from './routes/index'

require('dotenv').config()

const app:Koa = new Koa();

app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.statusCode || error.status || 500;
    error.status = ctx.status;
    ctx.body = { error };
    ctx.app.emit('error', error, ctx);
  }
});


// Middleware
app.use(bodyParser());

app.use(routes.routes());
app.use(routes.allowedMethods());

// Application error logging.
app.on('error', console.error);


export default app;