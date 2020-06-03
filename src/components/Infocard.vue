<template>
    <div class="card">
        <h2>{{pais}}</h2>
        <ul>
            <li>Total de casos: <b>{{totalCasos}}</b></li>
            <li>Casos atuais: <b>{{casosAtuais}}</b></li>
            <li>Recuperados: <b>{{recuperados}}</b></li>
            <li>Fatalidades: <b>{{mortes}}</b></li>
        </ul>
        <p>Última atualização: {{ultimaAtualizacao}}</p>
    </div>
</template>

<script>
export default {
    name: "Infocard",
    props: [],
    data() {
        fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil", 
            {"method": "GET"})
            .then(res => {
                return res.json()
            })
            .then(dados => {
                let data = dados.data.updated_at.split('T', 2)
                data = data[0] + ' às ' + data[1].substring(0,5)
                
                this.ultimaAtualizacao = data
                this.pais = dados.data.country
                this.totalCasos = dados.data.confirmed
                this.casosAtuais = dados.data.cases
                this.recuperados = dados.data.recovered
                this.mortes = dados.data.deaths
            })
            .catch(erro => {
                console.log(erro)
            })

        return {
            pais: "",
            totalCasos: 0,
            casosAtuais: 0,
            recuperados: 0,
            mortes: 0,
            ultimaAtualizacao: new Date()
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.card {
    border: solid 1px;
    min-width: 350px;
    box-shadow: 8px 8px 8px 0 rgba(0,0,0,0.4);

}

li {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
}

p {
    font-style: italic;
    font-size: 13px;
}
</style>