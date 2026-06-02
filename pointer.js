const box = document.getElementById("box");
const output = document.getElementById("output");

box.addEventListener("pointerover", function () {
    output.textContent = "Event: Pointer Over";
});

box.addEventListener("pointerout", function () {
    output.textContent = "Event: Pointer Out";
});

box.addEventListener("pointerdown", function () {
    output.textContent = "Event: Pointer Down";
});

box.addEventListener("pointerup", function () {
    output.textContent = "Event: Pointer Up";
});

box.addEventListener("pointermove", function () {
    output.textContent = "Event: Pointer Move";
});

box.addEventListener("pointerenter", function () {
    output.textContent = "Event: Pointer Enter";
});

box.addEventListener("pointerleave", function () {
    output.textContent = "Event: Pointer Leave";
});

box.addEventListener("pointercancel", function () {
    output.textContent = "Event: Pointer Cancel";
});