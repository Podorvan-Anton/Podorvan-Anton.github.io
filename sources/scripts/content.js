"use strict";

let response, currentPage = 0, totalLoaded = 0;
let grid = document.getElementsByClassName("container")[0];

function displayItems() {
    for (let i = 0; i < response.goods.length; i++) {
        let item = document.createElement("div");
        item.className = "item";
        let string = "";
        string += `<div class="img-holder">`;
        string += `<img src="${response.goods[i].image_url}">`;
        string += '</div>';
        string += `<div class="desc">`;
        string += `<p class="name">`;
        string += response.goods[i].name.substring(0, 50);
        if (string.at(string.length - 1) == " " ||
            string.at(string.length - 1) == "-") {
            string = string.slice(0, -1);
        }
        if (response.goods[i].name.length > 50) {
            string += "...";
        }
        string += `<span class="name-tooltip">`;
        string += response.goods[i].name;
        string += `</span></p>`;
        string += `<div class="rating">`;
        string += `<p>${response.goods[i].rating}</p>`;
        string += `<div>`;
        for (let j = 0; j < 5; j++) {
            if (j < Math.round(response.goods[i].rating)) {
                string += ` <img src="sources/images/icons/star.png">`;
            } else {
                string += 
                ` <img src="sources/images/icons/star_empty.png">`;
            }
        }
        string += `</div></div>`;
        string += `<div class="cost">`;
        if (response.goods[i].discount_price == null) {
            string += `<p>${response.goods[i].actual_price}&#8381;</p>`;
            string += `<p></p><p></p>`;
        } else {
            string += `<p>${response.goods[i].discount_price}&#8381;</p>`;
            string += 
            `<p><s>${response.goods[i].actual_price}&#8381;</s></p>`;
            string += `<p>-${Math.round((response.goods[i].actual_price 
            - response.goods[i].discount_price) 
            / response.goods[i].actual_price * 100)}%</p>`;
        }
        string += `</div>`;
        string += `<button>Добавить</button></div>`;

        item.innerHTML = string;
        grid.append(item);
    }

    updateEventListeners();
}

function loadItems() {
    let style = window.getComputedStyle(grid);
    let c = style.getPropertyValue("grid-template-columns").split(" ").length;
    c *= 3;
    currentPage++;

    let xhr = new XMLHttpRequest();

    let url = new URL(window.location);
    let sort_order = url.searchParams.get("sort_order");
    if (sort_order == null) {
        sort_order = "rating_desc";
    }
    document.getElementById("sort-select").value = sort_order;
    // eslint-disable-next-line max-len
    xhr.open("GET", `https://edu.std-900.ist.mospolytech.ru/exam-2024-1/api/goods?page=${currentPage}&per_page=${c}&sort_order=${sort_order}&api_key=2c4a9673-b944-41f1-9e6c-63b974458516`, false);
    xhr.onload = () => {
        response = JSON.parse(xhr.response);
        totalLoaded += response._pagination.per_page;
        displayItems();
        if (totalLoaded >= response._pagination.total_count) {
            document.getElementById("load-more").style.display = "none";
        }
    };
    xhr.send();
}

loadItems();


function sortingReload(event) {
    if (window.location.toString().indexOf("?") < 0) {
        window.location += '?sort_order=' + event.target.value;
    } else {
        window.location = 
        window.location.toString().substring(0, 
            window.location.toString().indexOf("?")) + 
        '?sort_order=' + event.target.value;
    }
}


document.getElementById("load-more").addEventListener("click", loadItems);
document.getElementById("sort-select").addEventListener("change", 
    sortingReload);