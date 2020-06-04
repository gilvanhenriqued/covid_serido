import axios from 'axios'

const urlSerido = 'https://brasil.io/api/dataset/covid19/caso/data/?state=RN&place_type=city&format=json&is_last=true'

export default {

    listarDadosCovidSerido:(callback) => {
        axios.get(urlSerido).then((res) => {

            function filtrarCidadesInterior(item) {
                return item.city == "Acari" || item.city == "Caicó"  
                || item.city == "Parelhas" || item.city == "Carnaúba dos Dantas"
                || item.city == "Jardim do Seridó" || item.city == "Equador"
                || item.city == "Currais Novos" || item.city == "Cruzeta"
                || item.city == "Florânia" || item.city == "Santana do Seridó"
                || item.city == "Ouro Branco" || item.city == "Jucurutu"
            }

            if(callback) {
                const cidades = res.data.results

                let dados = cidades.filter(filtrarCidadesInterior)
                callback(dados)
            } 
            
        })
    }

}