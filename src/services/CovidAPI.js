import axios from 'axios'

const urlBase = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil'
const urlSerido = 'https://brasil.io/api/dataset/covid19/caso/data/?city=Carna%C3%BAba+dos+Dantas&format=json'

export default {

    listarDadosCovidBrasil:(callback) => {
        axios.get(urlBase).then((parametros) => {
            if(callback) callback(parametros)
        })
    },
    listarDadosCovidSerido:(callback) => {
        axios.get(urlSerido).then((parametros) => {
            if(callback) callback(parametros)
        })
    }

}