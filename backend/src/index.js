const koa = require('koa')
const bodyParser = require('koa-body')
const router = require('./routes/index')
const cors = require('koa2-cors')


const app = new koa()
const port = 4000

app.use(bodyParser({ multipart: true, urlencoded: true }))
app.use(cors())
app.use(router.routes())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})