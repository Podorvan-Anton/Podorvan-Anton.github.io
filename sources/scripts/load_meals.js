function compareMeals(a, b) {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    }

    return 0;
}

meals.sort(compareMeals);

for (let i = 0; i < meals.length; i++) {
    let item = document.createElement("div");
    item.className = "item";
    item.innerHTML += `<img src="${meals[i].image}" alt="image">`;
    item.innerHTML += `<p class="cost">${meals[i].price}&#8381;</p>`;
    item.innerHTML += `<p class="name">${meals[i].name}</p>`;
    item.innerHTML += `<p class="weight">${meals[i].count}</p>`;
    item.innerHTML += `<button class="add">Добавить</button>`;
    item.dataset.dish = meals[i].keyword;

    if (meals[i].category == "soup") {
        document.getElementById("soup").lastElementChild.append(item);
    } else if (meals[i].category == "main_course") {
        document.getElementById("main_course").lastElementChild.append(item);
    } else if (meals[i].category == "salad") {
        document.getElementById("salad").lastElementChild.append(item);
    } else if (meals[i].category == "beverages") {
        document.getElementById("beverages").lastElementChild.append(item);
    } else {
        document.getElementById("dessert").lastElementChild.append(item);
    }
}

