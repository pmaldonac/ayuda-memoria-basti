const Router = require('koa-router')
const patients = require('./doctorRoutes/getAllPatients')

const router = new Router()

router.get('/patients', patients.getPatients)
module.exports = router