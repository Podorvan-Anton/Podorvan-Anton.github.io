let inputs = document.querySelectorAll('.order input[type="hidden"]');
inputs.forEach(element => {
    element.value = "";
});

let note;
function removeNote() {
    note.remove();
}

let form = document.getElementById("form");

  
function checkForm(event) {
    let formData = new FormData(form);

    let a = 0;
    let check = [false, false, false, false, false];
    for (let pair of formData.entries()) {
        if (a < 5) {
            if (pair[1] != "") {
                check[a] = true; 
            }
        } else {
            break;
        }
        a++;
    }

    if (check[3] && (check[1]) || check[0] && check[2]) {
        return;
    } else {
        event.preventDefault();
    }

    note = document.createElement("div");
    note.classList.add("notification");

    if (!(check[0] || check[1] || check[2] || check[3] || check[4])) {
        note.innerHTML += "<p>Ничего не выбрано. Выберите блюда для заказа</p>";
    } else if (!check[3] && (check[1]) || check[0] && check[2]) {
        note.innerHTML += "<p>Выберите напиток</p>";
    } else if (check[0] && !(check[1] || check[2])) {
        note.innerHTML += "<p>Выберите главное блюдо/салат/стартер</p>";
    } else if (check[2] && !(check[0] || check[1])) {
        note.innerHTML += "<p>Выберите суп или главное блюдо</p>";
    } else if (check[3] || check[4]) {
        note.innerHTML += "<p>Выберите главное блюдо</p>";
    } else {
        note.innerHTML += "<p>Error</p>";
    }

    note.innerHTML += 
    '<button onclick="removeNote()">Окей &#128076;</button>';

    document.body.append(note);
}

form.addEventListener("submit", checkForm);


// 1
// 2
// 4
// 8
// 16
// 31

// 9, 10, 12, 8, 24