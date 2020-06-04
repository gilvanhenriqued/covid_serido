<template>
  <div id="app">
    <header>
      <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="container">
            <h1 class="header center">
              Boletim
              <br />Covid
              <br />SERIDÓ
            </h1>
            <div class="row center">
              <h5 class="header col s8 offset-s4 light">
                Dados do Covid-19 das cidades do Seridó do Rio Grande do Norte.
                <br />Veja e compare os dados da doença na nossa região.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col s4" v-for="infocard in infocards" :key="infocard.city">
          <infocard
            :local="infocard.city"
            :totalCasos="infocard.confirmed"
            :mortes="infocard.deaths"
            :populacao="infocard.estimated_population_2019"
            :dataAtualizacao="infocard.date"
          ></infocard>
        </div>
      </div>
    </div>

    <footer class="page-footer teal">
      <div class="container">
        <div class="row">
          <div class="col s12">
            <h5 class="white-text">Fontes</h5>
            <p class="grey-text text-lighten-4">
                Dados da população de 2019. Fonte: IBGE. <br>
                Fonte dos dados: <a class="brown-text text-lighten-3" 
                href="https://brasil.io/api/dataset/covid19/caso/data/"> API Brasil.io.</a><br>
                Repositório do Github <a class="brown-text text-lighten-3" 
                href="https://github.com/GilvanHenrique/covid-serido">aqui.</a>
            </p>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          Desenvolvido por Gilvan Henrique
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import CovidAPI from "./services/CovidAPI";
import Infocard from "./components/Infocard";

export default {
  name: "App",
  components: {
    Infocard
  },
  data() {
    return {
      infocards: []
    };
  },
  created() {
    var self = this;
    CovidAPI.listarDadosCovidSerido(dados => {
      self.infocards = dados;
    });
  }
};
</script>

<style>
#app {
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #172736;
  margin-top: 120px;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

</style>
