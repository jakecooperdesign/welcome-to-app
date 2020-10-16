import { shuffleDeck } from "@/deckFunctions";
import _ from 'lodash';

const welcomeToDistribution = {
    'pool': [13, 12, 11, 10, 8, 7, 6, 4, 3],
    'fence': [15, 14, 13, 11, 11, 10, 10, 9, 8, 8, 7, 6, 6, 5, 5, 3, 2, 1],
    'biz': [13, 12, 10, 9, 8, 7, 6, 4, 3],
    'agent': [13, 12, 10, 9, 8, 7, 6, 3, 4],
    'money': [1, 2, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 14, 15],
    'park': [1, 2, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 14, 15]
}

const generateDecks = (cardDistributions) => {
    let decks = [];
    let cards = [];
    for (const effect in cardDistributions) {
        let effectCards = cardDistributions[effect];
        effectCards.forEach(val => cards.push({
            front: {
                value: val,
            },
            back: {
                value: effect,
                image_url: `'/images/welcome-to/welcome-to-${effect}2x.jpg'`
            }
        }));
    }
    cards = shuffleDeck(cards);
    decks.push( cards.splice(0, 27) );
    decks.push( cards.splice(0, 27) );
    decks.push( cards.splice(0, 27) );

    return decks;
}

function convertCardDecksToTurnDecks(decks) {
    let turns = [];
    decks.forEach(deck => {
        turns.push(
            deck.reduce((sum, card, i) => {
                if (i + 1 <= deck.length - 1) {
                    sum.push({
                        value: card.front.value,
                        effect: deck[i + 1].back.value
                    })
                }
                return sum;
            }, [])
        );
    })
    return turns;
}

function mergeTurnDecks(turns) {
    return _.zip(turns[0], turns[1], turns[2]);
}
let decks1 = generateDecks(welcomeToDistribution)
let decks2 = generateDecks(welcomeToDistribution)
let decks = decks1.reduce((decks, deck, i) => {
    decks.push(deck.concat(decks2[i]))
    return decks;
}, [])
decks = convertCardDecksToTurnDecks(decks);
let turns = mergeTurnDecks(decks);

console.log(turns);

export default turns;