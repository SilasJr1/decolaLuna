<template class="site-card">
    <v-card class="mx-auto my-2" outlined>
        <a :href="site.site">
            <v-img :src="site.imagem" max-height="250" contain></v-img>
        </a>
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                    <a :href="site.site">{{ site.nome }}</a>
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{ site.descricao }}
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

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
};
</script>

<style scoped>
a {
    text-decoration: none;
    /* color: #01579b !important; */
}

.v-list-item__subtitle {
    display: block;
    text-align: start;
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
    /* border-color: #01579b;
    color: #01579b; */
}
</style>