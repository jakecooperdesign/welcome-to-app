import Vue from 'vue'
import Vuex from 'vuex'
import { startingDecks } from './deckFunctions.js'

Vue.use(Vuex)

const initialDecks = startingDecks();

export default new Vuex.Store({
    state: {
        decks: JSON.parse(JSON.stringify(initialDecks)),
    },
    mutations: {
        drawCardForDeck(state, deckId) {
            let deck = state.decks[deckId];
            let card = deck.library.splice(0, 1)[0]
            deck.discard.push(card);
        },
        returnCardToDeck(state, deckId) {
            let deck = state.decks[deckId];
            let card = deck.discard.splice(deck.length, 1)[0]
            deck.library.unshift(card);
        },
        drawAllCards(state) {
            state.decks.forEach(deck => {
                let card = deck.library.splice(0, 1)[0];
                deck.discard.push(card);
            })
        },
        resetDecks(state) {
            state.decks = JSON.parse(JSON.stringify(initialDecks));
        },
        emptyState() {
            this.replaceState({
                decks: JSON.parse(JSON.stringify(initialDecks)),
            })
        }
    }
})