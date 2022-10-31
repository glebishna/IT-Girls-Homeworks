function changeColor() {
    switch(document.getElementById('pagecolor').value) {
        case 'dark':
            document.body.style.background = '#000080'; break;
        case 'light':
            document.body.style.background = '#ffdead'; break;
        case 'bright':
            document.body.style.background = '#ff1493'; break;
    }
 }
