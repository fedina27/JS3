// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach =function (callback){
    const yourArr = this;
    for (const item of yourArr){
        callback(item);
    }
};
[35,77,44].myForEach((x) => console.log(x));


Array.prototype.myFilter =function (callback){
    const arr = [];
    for (const item of this){
      if (callback(item)){
          arr.push(item);
      }
    }
    return arr;
};

let Users = [
    {name:'roma',age:34 ,status:false},
    {name:'vasia',age:33,status:true},
    {name:'sasha',age:32,status:false},
    {name:'kolia',age:35,status:true},
]
const result = Users.myFilter((user)=>user.status);
console.log(result)