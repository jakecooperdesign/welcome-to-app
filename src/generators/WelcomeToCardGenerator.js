import { shuffleDeck } from "@/deckFunctions";

let effectColors = {
    'pool': 'bg-blue-500 text-white',
    'fence': 'bg-white text-green-500',
    'biz': 'bg-red-500 text-white',
    'agent': 'bg-yellow-500',
    'money': 'bg-purple-800 text-white',
    'park': 'bg-green-500 text-white'
};

const welcomeToDistribution = {
    'pool': [13, 12, 11, 10, 8, 7, 6, 4, 3],
    'fence': [15, 14, 13, 11, 11, 10, 10, 9, 8, 8, 7, 6, 6, 5, 5, 3, 2, 1],
    'biz': [13, 12, 10, 9, 8, 7, 6, 4, 3],
    'agent': [13, 12, 10, 9, 8, 7, 6, 3, 4],
    'money': [1, 2, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 14, 15],
    'park': [1, 2, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 14, 15]
}

const generateWelcomeToDecks = (cardDistributions) => {
    let decks = [];
    let cards = [];

    for (const effect in cardDistributions) {
        let effectCards = cardDistributions[effect];
        effectCards.forEach(val => {
            cards.push({
                front: {
                    value: val,
                    classes: 'bg-white'
                },
                back: {
                    value: effect,
                    classes: effectColors[effect]
                }
            })
        });
    }

    cards = shuffleDeck(cards);

    decks.push({
        cards: cards.splice(0, 27),
    });
    decks.push({
        cards: cards.splice(0, 27),
    });
    decks.push({
        cards: cards.splice(0, 27),
    });

    return decks;
}

export const WelcomeToDecks = generateWelcomeToDecks(welcomeToDistribution);