import axios from 'axios'

const urlBase = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil'

export default {

    listarDadosCovid:(callback) => {
        axios.get(urlBase).then((parametros) => {
            if(callback) callback(parametros)
        })
    }

}