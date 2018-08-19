require('./config/loadEnv')
const Express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const routes = require('./routes')

const app = Express()

/** middlewares */
app.use(logger('dev'))
app.disable('x-powered-by')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(routes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => { //eslint-disable-line
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : err

  console.error(err.stack || err)
  // render the error page
  res.status(err.status || 500)
  res.json(res.locals.error)
})


module.exports = app
