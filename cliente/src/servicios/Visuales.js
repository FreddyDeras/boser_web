import Api from './Api'
// var path = require('path')

export default {
  CarouselImgs () {
    return Api().get(process.env.VUE_APP_SERVER + '/api/imagenes')
    // return Api().get(process.env.VUE_APP_SERVER + 'api/imagenes')
      .then(res => {
        return {
          success: true,
          data: res.data
        }
      })
      .catch(err => {
        return {
          err: err,
          success: false,
          data: null
        }
      })
  },

  ObtenerLinks () {
    return Api().get(process.env.VUE_APP_SERVER + '/api/links')
    // return Api().get(process.env.VUE_APP_SERVER + 'api/links')
      .then(res => {
        return {
          success: true,
          message: 'todobin',
          data: res.data
        }
      })
      .catch(err => {
        return {
          err: err,
          success: false,
          data: null
        }
      })
  },

  borrarImagen (idImagen) {
    // DOC: Para cuando se quiera ir a producción
    // return Api().delete(process.env.server + '/api/imagenes/' + idImagen)
    // DOC: Para cuando se trabaje con nodemon o npm run dev
    // return Api().delete(process.env.server + 'api/imagenes/' + idImagen)
    return Api().delete(process.env.server + '/api/imagenes/' + idImagen)
    // asd
  }
}
