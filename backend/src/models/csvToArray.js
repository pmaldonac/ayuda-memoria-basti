const fs = require("fs");
const readline = require("readline");

//Aquí deberían existir modelos para la bdd que divida la información en sus respectivos atributos.

//Esta funcción trae un conflicto, el último elemento igual lo separa por la ,
exports.patientsData = () => {
    let patients = []
    let data = fs.readFileSync("./src/data/dataset_birads.csv", 'utf8')
    data = data.split('\r\n')
    for (let i of data) {
        patients.push(i.split(','))
    }
    patients.shift()
    return patients
}
