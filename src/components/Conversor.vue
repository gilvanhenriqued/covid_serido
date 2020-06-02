<template>
    <div class="conversor">
        <h2>{{moedaA}} para {{moedaB}}</h2>
        <input type="text" v-model="moedaA_value" v-bind:placeholder="moedaA">
        <input type="button" value="Converter" v-on:click="converter">
        <h2>{{moedaB_value}}</h2>
    </div>

</template>

<script>
export default {
    name: "Conversor",
    props: ["moedaA", "moedaB"],
    
    data(){
        return {
            moedaA_value: "",
            moedaB_value: ""
        }
    },
    methods:{
        converter(){
            let de_para = this.moedaA + "_" + this.moedaB

            let url = "https://free.currconv.com/api/v7/convert?q="
                + de_para + "&compact=ultra&apiKey=c6190e04bc8074c6d916"

            fetch(url)
                .then(resp => {
                    return resp.json()
                })
                .then(json => {
                    let cotacao = json[de_para]
                    this.moedaB_value = (cotacao * parseFloat(this.moedaA_value)).toFixed(2)
                })
        }
    }
}
</script>

<style scoped>
    .conversor {
        max-width: 300px;
        padding: 20px;
        box-shadow: 8px 8px 8px 0 rgba(0,0,0,0.4);
    }
    h2 {
        font-size: 30px;
    }
</style>