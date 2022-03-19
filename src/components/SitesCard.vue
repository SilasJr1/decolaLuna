<template class="site-card">
    <v-card class="mx-auto my-2" outlined>
        <a :href="site.site">
            <v-img :src="site.imagem" max-height="250" contain></v-img>
        </a>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                    <a :href="site.site">{{ site.nome }}</a>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-card-text>
            <div class="text--primary">{{ site.descricao }}</div>
        </v-card-text>

        <v-card-actions>
            <span
                class="span-ferramenta"
                v-for="ferramenta of site.ferramentas"
                :key="ferramenta"
                >{{ ferramenta }}</span
            >
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "SitesCard",
    props: {
        site: {
            type: Object,
            required: true,
        },
    },
    mounted() {
        let elementos = document.getElementsByClassName("span-ferramenta");
        console.log(this.$vuetify.theme.primary);
        for (let i = 0; i < elementos.length; i++) {
            let elemento = elementos[i];

            if (elemento.textContent.includes("Checagem"))
                elemento.style.color = "#43A047";
            else if (elemento.textContent.includes("Pesquisa"))
                elemento.style.color = "#9575CD";
            else if (elemento.textContent.includes("Sugestões"))
                elemento.style.color = "#42A5F5";
            else if (elemento.textContent.includes("Contratação"))
                elemento.style.color = "#FFA726";
            else elemento.style.color = "#B71C1C";
        }
    },
};
</script>

<style scoped>
a {
    text-decoration: none;
}

.v-card__text {
    text-align: justify;
    font-size: 0.95rem;
}

.v-card__actions {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
}

.span-ferramenta {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    border: thin solid;
    border-radius: 28px;
    padding: 0 8px;
    margin: 5px;
}
</style>