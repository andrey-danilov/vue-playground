import Vuex from 'vuex'
import Vue from "vue"

import {SET_REVIEW} from '@/store/config/actions.type'
import {ADD_REVIEW} from "@/store/config/mutations.type";

Vue.use(Vuex)

export default new Vuex.Store({
    state () {
        return {
            restaurants:[
                {
                    id: 1,
                    name: "Kompot",
                    reviews: []
                },
                {
                    id: 2,
                    name: "Steakhouse",
                    reviews: []
                }
            ]
        }
    },
    mutations: {
        [ADD_REVIEW](state, {text, rating, restaurantIndex}) {
            state.restaurants[restaurantIndex].reviews.push({text, rating});
        }
    },
    actions: {
        [SET_REVIEW]({commit, state}, {text, rating, restaurant}) {
            const restaurantIndex = state.restaurants.findIndex(item => item.id === restaurant.id);

            commit(ADD_REVIEW, {text, rating, restaurantIndex});
        }
    }
})
