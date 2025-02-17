// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const suits1 = ['spade', 'diamond', 'heart', 'club'];
const values1 = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king']

const cards1 = [];
for (const suit of suits1) {
    for (const value of values1) {
        const card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red'
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }

}
console.log(cards1)


cards.reduce((accum, card) => {
        switch (card.cardSuit) {
            case 'spade':
                accum.spades.push(card);
                break;
            case 'diamond':
                accum.diamonds.push(card);
                break;
            case 'club':
                accum.clubs.push(card);
                break;
            case 'heart':
                accum.hearts.push(card);
                break;

        }
        return accum;
    },{
    spades:[],
    diamonds: [],
    hearts: [],
    clubs: []
    })
