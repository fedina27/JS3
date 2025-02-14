
let  elements1= (element)=>{
    document.write('<ul>')
    for (const item of element){
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>')
}

elements1([1,'fds',3,34,'trial'])


