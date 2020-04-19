import Vue from 'vue'
import Vuex from 'vuex'
import modules from '@/store/modules/modules'

Vue.use(Vuex)

const vuex_store = new Vuex.Store({
    modules,
})

export default vuex_store