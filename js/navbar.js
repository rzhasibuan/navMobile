const tabs_buttons = document.querySelectorAll(".button_icon");
const pages = document.querySelectorAll(".page");
const circle = document.querySelectorAll('.circle')[0];

let current = 0;

set_circle_position(current);

function select_page(page) {
    for (let i = 0; i < tabs_buttons.length; i++) {
        pages[i].classList.remove('out_left');
        pages[i].classList.remove('in_left');
        pages[i].classList.remove('out_right');
        pages[i].classList.remove('in_right');

        if (i == page) {
            tabs_buttons[i].classList.add('button_icon_selected');
            pages[i].classList.add('page_active');
        } else {
            tabs_buttons[i].classList.remove('button_icon_selected');
            pages[i].classList.remove('page_active');
        }
    }
    set_circle_position(page);

    if (page > current) {
        pages[current].classList.add('out_left');
        pages[page].classList.add('in_right');
    }

    if (page < current) {
        pages[current].classList.add('out_right');
        pages[page].classList.add('in_left');
    }
    current = page;
}

function set_circle_position(page) {
    let left = tabs_buttons[page].querySelector("i").getBoundingClientRect().left - document.querySelector(".nav").getBoundingClientRect().left;
    circle.style.left = left + "px";
}

window.onresize = function () {
    set_circle_position(current);
}