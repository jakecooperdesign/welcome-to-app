export const shuffleDeck = deck => {
    deck.sort(() => Math.random(1) < Math.random(1) ? 1 : -1);
    deck.sort(() => Math.random(1) < Math.random(1) ? 1 : -1);
    deck.sort(() => Math.random(1) < Math.random(1) ? 1 : -1);
    return deck;
};