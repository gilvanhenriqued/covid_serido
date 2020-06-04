<template>
  <div class="card">
    <h2>{{ local }}</h2>
    <ul>
      <li>
        Total de casos:
        <b>{{ totalCasos }}</b>
      </li>
      <li>
        Casos atuais:
        <b>{{ casosAtuais }}</b>
      </li>
      <li>
        Recuperados:
        <b>{{ recuperados }}</b>
      </li>
      <li>
        Fatalidades:
        <b>{{ mortes }}</b>
      </li>
    </ul>
    <p>Última atualização: {{ dataAtualizacao }}</p>
  </div>
</template>

<script>
export default {
  name: "Infocard",
  props: {
      local: { type: String },
      totalCasos: { type: Number },
      casosAtuais: { type: Number },
      recuperados: { type: Number },
      mortes: { type: Number },
      dataAtualizacao: { type: String }
  }

/*   data() {
    let dataAtualizacao = ""
    // Route to acess datas of covid in Brazil
    fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(dados => {

        dataAtualizacao = dados.data.updated_at.split("T", 2),
        dataAtualizacao = dataAtualizacao[0]

        this.informacoesBrasil = {
            dataAtualizacao: dataAtualizacao,
            local : dados.data.country,
            totalCasos : dados.data.confirmed,
            casosAtuais : dados.data.cases,
            recuperados : dados.data.recovered,
            mortes : dados.data.deaths
        }

        console.log(this.informacoesBrasil)
      })
      .catch(erro => {
        console.log(erro);
      });

    // Route to acess datas of covid in RN
    fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rn", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
       .then(dados => {
        console.log(dados);
      })
      .catch(erro => console.error(erro));

    return {
      informacoesBrasil: {}
    };
  } */
};
</script>

<style scoped>
.card {
  border: solid 1px rgb(218, 218, 218);
  box-shadow: 8px 8px 8px 0 rgba(250, 192, 0, 0.2);
}

li {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
}

p {
  font-style: italic;
  font-size: 13px;
}
</style>