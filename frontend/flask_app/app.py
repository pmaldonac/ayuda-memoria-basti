
from flask import Flask,jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


#Las respuestas deben ser de este tipo para que funcione la tabla.
lala = [
  {
    'index': 1,
    'informe': 'mamografia bilateral  paciente de 57 aÃ±os cancer de mama derecho tratado con cirugia mastectomia parcial cuento con examen 2021 para comparar el parenquima mamario se observa denso heterogeneo de distribucion simetrica sin variacion con respecto a examen previo no hay nodulo dominante o lesion espiculada microcalcificaciones redondas dispersas calcificaciones gruesas bilaterales linfonodo intramamario izquierdo en el cse de 6 mm ecografia mamaria hallazgos el patron ecografico es ecogenico homogeneo cambios postquirurgicos en el cse de la mama derecha no hay nodulos o quistes las areas retroareolares estan libres linfonodo en el cse izquierdo tercio posterior de 52 mm de configuracion normal cambios postquirurgicos en la mama derecha linfonodo intramamario izquierdo birads 2    acr c',
    'ACR': 'c',
    'KEY': 'OZAK62576889401429'
  },
  {
    'index': 2,
    'informe': 'mamas heterogeneamente densas con hallazgos benignos birads  2 se sugiere control anual  ca de mama bilateral tratado con mastectomia parcial parenquima mamario heterogeneamente denso no se observan nodulos espiculados ni microcalcificaciones agrupadas sospechosas calcificaciones difusas benignas y formando un diminuto aglomerado predominantemente redondeadas en placas magnificadas en el tercio posterior del cie izquierdo sin cambios desde 2019 linfonodos axilares visibles de aspecto normal lesion cutanea proyectada en los cuadrantes inferiores derechos comparativamente a los examenes de 2019 y de junio de 2021 no hubo cambios significativos ecotomografia mamaria  parenquima mamario levemente heterogeneo cambios postquirurgicos bilaterales no se observan nodulos solidos sospechosos quistes dispersos en la mama derecha de hasta 0 7 cm linfonodos axilares de aspecto normal mamografia bilateral',
    'ACR': 'unknown',
    'KEY': 'OVZG31992214521193'
  }
]

@app.route('/') #después ingresarás con axios a lala en react (pages/Table linea 13 hace conexión con el endpoint)
@cross_origin()
def hello():
    return jsonify({'lala': lala}) #linea 14 para ingresar al dato result.data.<nombre de la variable> (debe ir data siempre)