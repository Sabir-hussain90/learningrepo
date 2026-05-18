const myname = document.getElementById("myname");
const button = document.getElementById("my-button");

function maketextsizer(size) {
    return function () {
        myname.style.fontSize = `${size}px`;
    };
}

const size12 = maketextsizer(12);
const size15 = maketextsizer(15);
const size20 = maketextsizer(20);
const size30 = maketextsizer(30);
const size40 = maketextsizer(40);
const size50 = maketextsizer(50);
const size14 = maketextsizer(14);

// example: on click set size 50px
button.addEventListener("click", size14);