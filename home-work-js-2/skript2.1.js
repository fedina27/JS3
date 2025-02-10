// 1


let arr = ['apple', 'juice', 'one', 89, 'five', 'music', 56, 'home', 'orange', 3, 18];
console.log(arr [0])
console.log(arr [1])
console.log(arr [2])
console.log(arr [3])
console.log(arr [4])
console.log(arr [5])
console.log(arr [6])
console.log(arr [7])
console.log(arr [8])
console.log(arr [9])
console.log(arr [10])


// 2


let book1 = {
  title: 'three hundred poetry',
  pageCount: 432,
  genre: 'Collections of modern poets',
}

let book2 = {
  title: 'kingdom of the damned',
  pageCount: 480,
  genre: 'Books of the genre Fantasy. fantasy Horrors'
}

let book3 = {
  title: 'Oppenheimer',
  pageCount: 784,
  genre: 'Social science books'
}
console.log(book1)
console.log(book2)
console.log(book3)


// 3

let book111 = [
  title: 'three hundred poetry',
  pageCount: 432,
  genre: 'Collections of modern poets',
  autor: {
    name = 'Lina Kostenko',
    age = 94,


      }

]

let book222 = [
  title: 'kingdom of the damned',
  pageCount: 480,
  genre: 'Books of the genre Fantasy. fantasy Horrors',
  autor: {
    name = 'Tricia Copeland',
    age = 55,
      }
]

let book333 = [
  title: 'Oppenheimer',
  pageCount: 784,
  genre: 'Social science books',
  autor: {
    name = 'Kai Bird, Martin Sherwin',
    age = 73,
  }
]


console.log(book111.autor)
console.log(book222.autor)
console.log(book333.autor)


// 4

let user1 = [
  name = 'alex',
  username = 'lesha777',
  password = 444627288
]

let user2 = [
  name = 'timofei',
  username = 'user766553',
  password = 2928433476
]

let user3 = [
  name = 'maxsimus',
  username = 'tatto3926',
  password = 474838383
]
let user4 = [
  name = 'misha',
  username = '6tetra9man',
  password = 838392281
]

let user5 = [
  name = 'furik',
  username = 'ulitki5983',
  password = 276357181
]

let user6 = [
  name = 'kiril',
  username = 'd0d0564',
  password = 726353523
]

let user7 = [
  name = 'maxim',
  username = 'sjdhf58383',
  password = 6353426262
]

let user8 = [
  name = 'ihor',
  username = 'hei49585',
  password = 1991737646
]

let user9 = [
  name = 'alex',
  username = 'klad22',
  password = 12132435562
]

let user10 = [
  name = 'alexandr',
  username = 'dominic222',
  password = 40393847362
]
console.log(user1[2])
console.log(user2[2])
console.log(user3[2])
console.log(user4[2])
console.log(user5[2])
console.log(user6[2])
console.log(user7[2])
console.log(user8[2])
console.log(user9[2])
console.log(user10[2])


// 5
let temperature = [
  {
    day: 'mondAY',
    morning: -1,
    afternoon: 2,
    evening: 3,
  },

  {
    day: 'Tuesday',
    morning: -1,
    afternoon: 1,
    evening: 0,
  },

  {
    day: 'Wednesday',
    morning: 3,
    afternoon: 6,
    evening: 2,
  },

  {
    day: 'Thursday',
    morning: 5,
    afternoon: 10,
    evening: 8,
  },

  {
    day: 'Friday',
    morning: -2,
    afternoon: -5,
    evening: 0,
  },

  {
    day: 'Saturday',
    morning: 2,
    afternoon: 4,
    evening: -4,
  },

  {
    day: 'Sunday',
    morning: 4,
    afternoon: 5,
    evening: -8,
  }
]


// 6


let x = 1;
if (x !== 0) {
  console.log('true');

} else {
  console.log('false');
}


// 7


let time = 45;

if (time >= 0 && time <= 15) {
  console.log('first part');
} else if (time >= 16 && time <= 30) {
  console.log('second part');
} else if (time >= 31 && time <= 45) {
  console.log('third part');
} else if (time >= 46 && time < 60) {
  console.log('fourth part');
}


// 8


let day = 26;

if (day >= 1 && day <= 10) {
  console.log('first part of month');
} else if (day > 11 && day <= 20) {
  console.log('second part of month');
} else if (day > 21 && day <= 31) {
  console.log('third part of month');
}


// 9


let schedule = ('Sunday');

switch (schedule) {
  case 'Monday':
    console.log('wake up, drink coffee');
    break;
  case 'Tuesday':
    console.log(' drink coffee ,do homework');
    break;
  case 'Wednesday':
    console.log(' wake up, learn english');
    break;
  case 'Thursday':
    console.log('wake up,do breakfest');
    break;
  case 'Friday':
    console.log('do breakfest, drink coffee ,do homework');
    break;
  case 'Saturday':
    console.log('look film , chill');
    break;
  case 'Sunday':
    console.log('chill all day');
    break;
}





// 10


let a = 0;
let b = 0;
if (a > b) {
  console.log(a);
} else if (b > a) {
  console.log(b);
} else if (a === b){
  console.log(a, 'the numbers are equal',b)
}




// 11



let xx = 0;
if (!xx){
  xx="default";
  console.log(xx)
}



// 12



let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0] .monthDuration>=5){
  console.log('Great');
}
if (coursesAndDurationArray[1] .monthDuration>=5){
  console.log('Great');
}
if (coursesAndDurationArray[2] .monthDuration>=5){
  console.log('Great');
}
if (coursesAndDurationArray[3] .monthDuration>=5){
  console.log('Great');
}
if (coursesAndDurationArray[4] .monthDuration>=5){
  console.log('Great');
}
if (coursesAndDurationArray[5] .monthDuration>=5){
  console.log('Great');
}else {
  console.log('???')
}
