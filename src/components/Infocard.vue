<template>
  <div class="card">
    <h2>{{ local }}</h2>
    <ul>
      <li>
        Total de casos:
        <b>{{ totalCasos }}</b>
      </li>
      <li>
        Fatalidades:
        <b>{{ mortes }}</b>
      </li>
      <li>
        População:
        <b>{{ populacao }}</b>
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
      populacao: { type: Number },
      mortes: { type: Number },
      dataAtualizacao: { type: String }
  }
};
</script>

<style scoped>
.card {
  border: solid 1px rgb(218, 218, 218);
  box-shadow: 8px 8px 8px 0 rgba(43, 42, 41, 0.7);
  background-color: rgb(241, 241, 241);
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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