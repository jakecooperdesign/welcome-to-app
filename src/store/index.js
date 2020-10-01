import Vue from 'vue'
import Vuex from 'vuex'

const range = (start, end, length = end - start + 1) => Array.from({
    length
}, (_, i) => start + i)

const zipCards = (suits, vals) => suits.reduce((a, s) => a.concat(vals.map(v => ({
    value: v,
    suit: s
}))), []);

Vue.use(Vuex);

function generatePlayingCards() {
    return zipCards(
        ['♥', '♦', '♠', '♣'],
        range(2, 10).concat(['A', 'J', 'Q', 'K'])
    );
}

function newPlayer(playerName) {
    return {
        name: playerName,
        discard: [],
        cards: [],
        playArea: []
    }
}

function initialState() {
    return {
        deck: generatePlayingCards(),
        discard: [],
        players: []
    }
}

export const store = new Vuex.Store({
    state: initialState,
    mutations: {
        addPlayer(state, player) {
            state.players.push(newPlayer(player));
        },
        removePlayer(state, player) {
            state.players.splice(player, 1);
        },
        drawCardFromDeck(state, player) {
            let card = state.deck.splice(0, 1)[0];
            state.players[player].cards.push(card);
        },
        reset(state) {
            state.deck = generatePlayingCards();
            this.commit("shuffleDeck");
            state.players = state.players.map( (player) => newPlayer(player.name));
        },
        shuffleDeck(state) {
            const shuffled = state.deck;
            shuffled.sort(() => Math.random(1) < Math.random(1) ? 1 : -1);
            shuffled.sort(() => Math.random(1) < Math.random(1) ? 1 : -1);
            shuffled.sort(() => Math.random(1) < Math.random(1) ? 1 : -1);
            state.deck = shuffled;
        },
        discard(state, data) {
            let player = state.players[data.player];
            let card = player.cards.splice(data.card, 1)[0];
            player.discard.push(card);
        },
        playCard(state, data) {
            let player = state.players[data.player];
            let card = player.cards.splice(data.card, 1)[0];
            player.playArea.push(card);
        }
    }
});