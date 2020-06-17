import stocks from '../../data/stocks.js';

const state = {
    stocks: []
};

const mutations = {
    'SET-STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RND-STOCKS' (state) {

    }
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit();
    },
    initStocks: ({ commit }) => {
        commit('SET-STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state, 
    mutations, 
    actions,
    getters
};