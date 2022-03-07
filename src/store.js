import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        list: [],
        inputValue: '',
        viewkey: 'allTo'
    },
    actions: {
        getList(context) {
            axios.get('/list.json').then(({ data }) => {
                context.commit('initList', data)
            })
        },
    },
    mutations: {
        initList(state, list) {
            state.list = list
        },
        DELETEIDTASK(state, id) {
            state.list = state.list.filter(li => {
                return li.id != id
            })
        },
        CHANGEINPUTVALUE(state, value) {
            state.inputValue = value
        },
        ADDLIST(state, value) {
            state.list.push(value)
        },
        CLEAR(state) {
            state.list = state.list.filter(li => {
                return !li.isDone
            })
        },
        CHANGESHOWVIEW(state, view) {
            state.viewkey = view
        }
    },
    getters: {
        getTotal(state) {
            return state.list.filter(li => {
                return !li.isDone
            }).length
        },
        showView(state) {
            if (state.viewkey === 'yesTo') {
                return state.list.filter(li => {
                    return li.isDone
                })
            } else if (state.viewkey === 'noTo') {
                return state.list.filter(li => {
                    return !li.isDone
                })
            } else {
                return state.list
            }
        }
    }
})