let text = document.getElementById("note-text");

function noImplementation() {
    text.innerHTML = "Данная функция не реализована &#128533;";
    text.parentElement.style.display = "flex";
}
function notMyDuty() {
    text.innerHTML = "Данная функция не относится к этому варианту &#128519;";
    text.parentElement.style.display = "flex";
}
function closeNote() {
    text.parentElement.style.display = "none";
}

document.getElementById("orders").addEventListener("click", noImplementation);
document.getElementById("cart").addEventListener("click", noImplementation);

document.getElementById("find").addEventListener("click", notMyDuty);
document.getElementById("filters").addEventListener("click", notMyDuty);

function updateEventListeners() {
    document.getElementById("close").addEventListener("click", closeNote);
    let elements = document.getElementsByClassName("desc");
    let buttons = Array.prototype.filter.call(
        elements, 
        (element) => element,
    );
    buttons.forEach(element => {
        element.lastElementChild.addEventListener("click", noImplementation);
    });
}

updateEventListeners();