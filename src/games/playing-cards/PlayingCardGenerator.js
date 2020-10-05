const generatePlayingCards = (suits, values) => {
    return suits.reduce((cards, s) => {
        values.forEach(v => cards.push({
            front: {
                value: v,
                suit: s,
                classes: suitColors[s]
            },
            back: {
                value: null,
                classes: 'text-white bg-gray-800',
            }
        }))
        return cards;
    }, []);
}

export const suitColors = {
    '♥': 'bg-white text-red-500',
    '♦': 'bg-white text-red-500',
    '♠': 'bg-white text-black',
    '♣': 'bg-white text-black'
};

let suits = ['♥', '♦', '♠', '♣'];
let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let cards = generatePlayingCards(suits, values);

export const playingCards = {
    suits,
    values,
    cards
};