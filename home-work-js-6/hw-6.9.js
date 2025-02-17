// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king']

const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red'
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }

}
console.log(cards)

console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'))
console.log(cards.filter(card => card.value === '6'))
console.log(cards.filter(card => card.color === 'red'))
console.log(cards.filter(card => card.cardSuit === 'diamond'))
console.log(cards.filter(card => card.cardSuit === 'club' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)));


