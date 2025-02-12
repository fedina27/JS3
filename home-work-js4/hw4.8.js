// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
function elements(element){
    document.write('<ul>')
    for (const item of element) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>')
}

elements([1,'fds',3,34,'trial'])