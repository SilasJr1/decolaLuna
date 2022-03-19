import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#01579B",
                secondary: "#B71C1C",
            },
            dark: {
                primary: "#90CAF9",
                secondary: "#E91E63",
            },
        },
        options: { customProperties: true }
    },
});
