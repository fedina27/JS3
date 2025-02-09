// 2
// - За допомогою циклу for і document.write()
// вивести 10 блоків div c довільним текстом і індексом всередині

// let a =[
//     {text:'demos'},
//     {text:'demos'},
//     {text:'demos'},
//     {text:'demos'},
//     {text:'demos'},
//     {text:'demos'},
//     {text:'demos'},
//     {text:'demos'},
//     {text:'demos'},
//     {text:'demos'},
//     {text:'demos'},
//
// ];
//
// for (let i = 0; i < a.length; i++){
//     let b =a[i]
//     document.write(`<div>${b.text}  ${i}</div>  `)
// }


for (let i = 0; i < 10; i++) {
    document.write(`<div>some text ${i}</div>`)
}
