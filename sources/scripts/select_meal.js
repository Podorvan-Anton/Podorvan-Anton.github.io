function hide_prompt() {
    document.querySelector(".nothing_selected").style.display = "none";
    let divs = document.querySelectorAll(".select");
    for (let i of divs) {
        i.style.display = "block";
    }
}

function unhighlight(item) {
    for (let i of item.lastElementChild.children) {
        i.classList.remove("highlighted");
    }
}

const sum = [0, 0, 0, 0, 0];

let selected = {
    soup,
    main_course,
    beverages,
    salad,
    dessert
};

let categories = [
    "soup",
    "main_course",
    "beverages",
    "salad",
    "dessert"
];

function select_item(event) {
    hide_prompt();

    let meal;
    for (let i of meals) {
        if (i.keyword == event.currentTarget.parentNode.dataset.dish) {
            meal = i;
            break;
        }
    }

    let selection_text;
    switch (meal.category) {
    case "soup":
        selection_text = document.getElementById("soup_text");
        sum[0] = meal.price;
        unhighlight(document.getElementById("soup"));
        break;
    case "main_course":
        selection_text = document.getElementById("main_course_text");
        sum[1] = meal.price;
        unhighlight(document.getElementById("main_course"));
        break;
    case "beverages":
        selection_text = document.getElementById("beverages_text");
        sum[3] = meal.price;
        unhighlight(document.getElementById("beverages"));
        break;
    case "salad":
        selection_text = document.getElementById("salad_text");
        sum[2] = meal.price;
        unhighlight(document.getElementById("salad"));
        break;
    case "dessert":
        selection_text = document.getElementById("dessert_text");
        sum[4] = meal.price;
        unhighlight(document.getElementById("dessert"));
        break;
    default:
        alert("wrong item category!");
    }
    
    selection_text.firstElementChild.nextElementSibling.innerHTML =
    meal.name + " " + meal.price + "&#8381;";
    selection_text.lastElementChild.value = meal.keyword;
    document.getElementById("sum").innerHTML =
    sum[0] + sum[1] + sum[2] + sum[3] + sum[4] + "&#8381;";

    event.currentTarget.parentNode.classList.add("highlighted");
    selected[meal.category] = meal.keyword;
}

let buttons = document.querySelectorAll(".add");
for (let i of buttons) {
    i.addEventListener("click", select_item);
}