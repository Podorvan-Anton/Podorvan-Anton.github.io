function load(category, kind = "any") {
    for (let i = 0; i < meals.length; i++) {
        if (meals[i].category == category && 
        (meals[i].kind == kind || kind == "any")) {
            let item = document.createElement("div");
            item.className = "item";
            item.innerHTML += `<img src="${meals[i].image}" alt="image">`;
            item.innerHTML += `<p class="cost">${meals[i].price}&#8381;</p>`;
            item.innerHTML += `<p class="name">${meals[i].name}</p>`;
            item.innerHTML += `<p class="weight">${meals[i].count}</p>`;
            item.innerHTML += `<button class="add">Добавить</button>`;
            item.dataset.dish = meals[i].keyword;

            document.getElementById(category).lastElementChild.append(item);
            document.getElementById(category).lastElementChild.lastElementChild.
                lastElementChild.addEventListener("click", select_item);

            if (meals[i].keyword == selected[meals[i].category]) {
                document.getElementById(category).lastElementChild.
                    lastElementChild.classList.add("highlighted");
            }
        }
    }
}

function filter(event) {
    // delete all items in current section
    for (let i of Array.from(event.currentTarget.
        parentNode.nextElementSibling.children)) {
        i.remove();
    }

    // dispay all items if it is a repeated ckick
    if (event.currentTarget.dataset.waschecked == "true") {
        load(event.currentTarget.parentNode.parentNode.id);

        event.currentTarget.dataset.waschecked = "false";
        event.currentTarget.checked = false;
        return;
    }

    // display items according to their's kind
    load(event.currentTarget.parentNode.parentNode.id,
        event.currentTarget.value);

    // reassign waschecked attribute
    for (let i of event.currentTarget.parentNode.children) {
        if (i.nodeName == "INPUT") {
            i.dataset.waschecked = "false";
        }
    }
    event.currentTarget.dataset.waschecked = "true";
}

let filters = document.querySelectorAll('.filters input[type="radio"]');
for (let i of filters) {
    i.addEventListener("click", filter);
}