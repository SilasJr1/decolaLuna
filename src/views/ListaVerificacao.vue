<template>
    <v-container class="sites-lista">
        <h2 class="text-h5 text-center my-5"><b>Lista de sites para verificação de notícias</b></h2>
		<div v-for="site of sitesLista" :key="site.id">
			<SitesCard :site="site" />
		</div>
    </v-container>
</template>

<script>
import SitesCard from "../components/SitesCard.vue";
export default {
    name: "ListaVerificacao",
    components: {
        SitesCard,
    },
    data: () => ({
        sitesLista: [],
    }),
    created() {
        fetch("https://it3-hbn-default-rtdb.firebaseio.com/fakeNews.json")
            .then((response) => response.json())
            .then((json) => {
                this.sitesLista = json;
            });
    },
};
</script>

<style scoped>

</style>