let welcomeToDistribution = {
    'pool': [13, 12, 11, 10, 8, 7, 6, 4, 3],
    'fence': [15, 14, 13, 11, 11, 10, 10, 9, 8, 8, 7, 6, 6, 5, 5, 3, 2, 1],
    'biz': [13, 12, 10, 9, 8, 7, 6, 4, 3],
    'agent': [13, 12, 10, 9, 8, 7, 6, 3, 4],
    'money': [1, 2, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 14, 15],
    'park': [1, 2, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 14, 15]
}

export let shuffleDeck = deck => {
    deck.sort(() => Math.random(1) < Math.random(1) ? 1 : -1);
    deck.sort(() => Math.random(1) < Math.random(1) ? 1 : -1);
    deck.sort(() => Math.random(1) < Math.random(1) ? 1 : -1);
    return deck;
};

export let startingDecks = () => {
    let decks = [];
    let cards = [];
    for (const effect in welcomeToDistribution) {
        let effectCards = welcomeToDistribution[effect];
        effectCards.forEach(val => {
            cards.push({
                front: val,
                back: effect
            })
        });
    }
    cards = shuffleDeck(cards);
    let tempDeck = {};
    tempDeck = {
        library: cards.splice(0, 27),
        discard: []
    };
    decks.push(tempDeck);
    tempDeck = {
        library: cards.splice(0, 27),
        discard: []
    };
    decks.push(tempDeck);
    tempDeck = {
        library: cards.splice(0, 27),
        discard: []
    };
    decks.push(tempDeck);

    return decks;
}