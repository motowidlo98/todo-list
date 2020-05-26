
const Koa = require('koa')
const serve = require('koa-static')
const parse = require('koa-bodyparser')
const app = new Koa()
const port = process.env.PORT || 3000

app.use(serve('client'))
app.use(parse())
const userRoutes = require('./routes/users')
app.use(userRoutes.routes())

require('./store').init()

const taskRoutes = require('./routes/tasks')
app.use(taskRoutes.routes())

app.listen(port)

console.log('App is listening at http://127.0.0.1:3000')
