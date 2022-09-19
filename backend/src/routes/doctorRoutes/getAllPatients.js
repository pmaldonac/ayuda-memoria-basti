const Patients = require('../../actions/orderPatients')

exports.getPatients = (ctx) => {
    const response = Patients.getPatientsFiltered()
    if(response == 0){
        ctx.status = 404
        ctx.body = {
            'status': ctx.status,
            'message': 'Patients not found'
        }
    }else{
        ctx.body = response
    }
    return ctx
}