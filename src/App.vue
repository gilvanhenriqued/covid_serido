<template>
  <div id="app">
    <h1>Boletim Covid Seridó</h1>
    <div class="container" >
      <div class="row">
        <div class="col s4">
          <Infocard></Infocard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Infocard from "./components/Infocard";

export default {
  name: "App",
  components: {
    Infocard
  }
};
</script>

<style>
#app {
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
