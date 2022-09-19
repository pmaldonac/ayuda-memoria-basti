const data = require('../models/csvToArray')

const patients = data.patientsData()

exports.getPatientsFiltered = () =>{
    let PatientsFiltered = []
    
    patients.forEach(element => {
        let obj = {
            index: parseInt(element[1])+1,
            informe: element[2],
            ACR: element[4],
            KEY: element[5]
        }
        PatientsFiltered.push(obj)
    })
    return PatientsFiltered
}