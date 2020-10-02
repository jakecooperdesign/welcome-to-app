const generatePlayingCards = (suits, values) => {
    return suits.reduce((cards, s) => {
        values.forEach(v => cards.push({
            suit: s,
            value: v,
            color: suitColors[s]
        }))
        return cards;
    }, []);
}

export const suitColors = {
    '♥': 'red',
    '♦': 'red',
    '♠': 'black',
    '♣': 'black'
};

let suits = ['♥', '♦', '♠', '♣'];
let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let cards = generatePlayingCards(suits, values);

export const playingCards = {
    suits,
    values,
    cards
};