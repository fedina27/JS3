let any =(users)=>{
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}

any([
    {id: 1, name:'sasha',age:23},
    {id: 2, name:'misha',age:18},
    {id: 3, name:'max',age:34},
])