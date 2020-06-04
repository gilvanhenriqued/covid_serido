<template>
  <div id="app">
    <header>
      <h1>Boletim Covid Seridó</h1>
    </header>
    <div class="container" >
      <div class="row">
        <div class="col s4" v-for="infocard in infocards" :key="infocard.city">
          <infocard 
          :local="infocard.city"
          :totalCasos="infocard.confirmed"
          :mortes="infocard.deaths"
          :populacao="infocard.estimated_population_2019"
          :dataAtualizacao="infocard.date">
          </infocard>
        </div>
      </div>
    </div>
    <footer class="">
      Dados da população de 2019. Fonte: IBGE.
      Fonte dos dados: API Brasil.io.
      Desenvolvido por Gilvan Henrique.
      Código github: ...
    </footer>
  </div>
</template>

<script>
import CovidAPI from "./services/CovidAPI"
import Infocard from "./components/Infocard";

export default {
  name: "App",
  components: {
    Infocard
  },
  data() {
    return {
      infocards: []
    }
  },
  created(){
    var self = this
    CovidAPI.listarDadosCovidSerido(dados => {
      self.infocards = dados
    })
  }
};
</script>

<style>
#app {
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #172736;
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;

}
</style>
