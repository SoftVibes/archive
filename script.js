function alignButtons () {
    buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
        if ((i+1) % 4 == 2) {
            buttons[i].style.marginLeft = 'calc(((100vw - 70rem)/3) + 3.5rem)';
        }
        if ((i+1) % 4 == 3) {
            buttons[i].style.marginLeft = 'calc(((100vw - 70rem)/3) - 3.5rem)';
            buttons[i].style.marginRight = '3.5rem';
        }
    }
}

function scrollToTop() {
    document.getElementById('container').scrollTop = 0;
}

function afterLoad() {
    alignButtons();
    document.getElementById('container').onscroll = function () {
        if (document.getElementById('container').scrollTop > 500) {
            document.getElementById('top').style.display = 'block';
        } else {
            document.getElementById('top').style.display = 'none';
        }
    }

    setInterval(function () {
        sort = document.getElementById('sort').value;
        buttons = document.getElementsByClassName('button');

        for (var i = 0; i < buttons.length; i++) {
            if (sort == 'all') {
                buttons[i].style.display = 'block';
            } else if (sort == buttons[i].getAttribute('type')) {
                buttons[i].style.display = 'block';
            } else {
                buttons[i].style.display = 'none';
            }
        }
    }, 100);
}