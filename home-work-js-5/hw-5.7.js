let someLii = (text, arr) => {
    document.write('<ul>');
    for (let i = 0; i < arr; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}


someLii('work hard', 10)