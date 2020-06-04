<template>
  <div id="app">
    <h1 class="">Boletim Covid Seridó</h1>
    <div class="container" >
      <div class="row">
        <div class="col s4" v-for="infocard in infocards" :key="infocard.country">
          <infocard 
          :local="infocard.city"
          :totalCasos="infocard.confirmed"
          :casosAtuais="infocard.cases"
          :recuperados="infocard.recovered"
          :mortes="infocard.deaths"
          :dataAtualizacao="infocard.date">
          </infocard>
        </div>
      </div>
    </div>
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
    CovidAPI.listarDadosCovidSerido(parametros => {
      self.infocards = parametros.data.results
      console.log(self.infocards)
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
