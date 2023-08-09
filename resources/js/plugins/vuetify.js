import Vue from 'vue'
import Vuetify from 'vuetify'


Vue.use(Vuetify)
export default new Vuetify({ 
theme: {
    themes: {
      dark: true,
      light: {
        primary: '#42a5f5',
      },
      dark: {
        primary: '#2196F3'
      },
    },
  },
  options: {
    customProperties: true,
  },
  iconfont: 'md',
});