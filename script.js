function alignButtons () {
    buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
        if ((+1) % 2 == 1 && (i+1) % 4 != 0) {
            buttons[i].style.marginLeft = 'calc(((100vw - 70rem)/3) + 15px)';
        }
    }
}

function afterLoad() {
    alignButtons();
}