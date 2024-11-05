"use strict";

const meals = [
    {
        keyword: "gaspacho",
        name: "Гаспачо",
        price: 195,
        category: "soup",
        count: "350 г",
        image: "sources/menu/soups/gazpacho.jpg",
        kind: "veg"
    },
    {
        keyword: "mushroom_soup",
        name: "Грибной суп-пюре",
        price: 185,
        category: "soup",
        count: "330 г",
        image: "sources/menu/soups/mushroom_soup.jpg",
        kind: "veg"
    },
    {
        keyword: "norwegian_soup",
        name: "Норвежский суп",
        price: 270,
        category: "soup",
        count: "330 г",
        image: "sources/menu/soups/norwegian_soup.jpg",
        kind: "fish"
    },
    {
        keyword: "ramen",
        name: "Рамен",
        price: 375,
        category: "soup",
        count: "425 г",
        image: "sources/menu/soups/ramen.jpg",
        kind: "meat"
    },
    {
        keyword: "tomyum",
        name: "Том ям с креветками",
        price: 650,
        category: "soup",
        count: "500 г",
        image: "sources/menu/soups/tomyum.jpg",
        kind: "fish"
    },
    {
        keyword: "chicken",
        name: "Куриный суп",
        price: 330,
        category: "soup",
        count: "350 г",
        image: "sources/menu/soups/chicken.jpg",
        kind: "meat"
    },
    {
        keyword: "friedpotatoeswithmushrooms",
        name: "Жареная картошка с грибами",
        price: 150,
        category: "main_course",
        count: "250 г",
        image: "sources/menu/main_course/friedpotatoeswithmushrooms1.jpg",
        kind: "veg"
    },
    {
        keyword: "lasagna",
        name: "Лазанья",
        price: 385,
        category: "main_course",
        count: "310 г",
        image: "sources/menu/main_course/lasagna.jpg",
        kind: "meat"
    },
    {
        keyword: "chickencutletsandmashedpotatoes",
        name: "Котлеты из курицы с картофельным пюре",
        price: 225,
        category: "main_course",
        count: "280 г",
        image: "sources/menu/main_course/chickencutletsandmashedpotatoes.jpg",
        kind: "meat"
    },
    {
        keyword: "fishrice",
        name: "Рыбная котлета с рисом и спаржей",
        price: 320,
        category: "main_course",
        count: "270 г",
        image: "sources/menu/main_course/fishrice.jpg",
        kind: "fish"
    },
    {
        keyword: "pizza",
        name: "Пицца Маргарита",
        price: 450,
        category: "main_course",
        count: "470 г",
        image: "sources/menu/main_course/pizza.jpg",
        kind: "veg"
    },
    {
        keyword: "shrimppasta",
        name: "Паста с креветками",
        price: 340,
        category: "main_course",
        count: "280 г",
        image: "sources/menu/main_course/shrimppasta.jpg",
        kind: "fish"
    },
    {
        keyword: "saladwithegg",
        name: "Корейский салат с овощами и яйцом",
        price: 330,
        category: "salad",
        count: "250 г",
        image: "sources/menu/salads_starters/saladwithegg.jpg",
        kind: "veg"
    },
    {
        keyword: "caesar",
        name: "Цезарь с цыплёнком",
        price: 370,
        category: "salad",
        count: "220 г",
        image: "sources/menu/salads_starters/caesar.jpg",
        kind: "meat"
    },
    {
        keyword: "caprese",
        name: "Капрезе с моцареллой",
        price: 350,
        category: "salad",
        count: "235 г",
        image: "sources/menu/salads_starters/caprese.jpg",
        kind: "veg"
    },
    {
        keyword: "tunasalad",
        name: "Салат с тунцом",
        price: 480,
        category: "salad",
        count: "250 г",
        image: "sources/menu/salads_starters/tunasalad.jpg",
        kind: "fish"
    },
    {
        keyword: "frenchfries1",
        name: "Картофель фри с соусом Цезарь",
        price: 280,
        category: "salad",
        count: "235 г",
        image: "sources/menu/salads_starters/frenchfries1.jpg",
        kind: "veg"
    },
    {
        keyword: "frenchfries2",
        name: "Картофель фри с кетчупом",
        price: 260,
        category: "salad",
        count: "235 г",
        image: "sources/menu/salads_starters/frenchfries2.jpg",
        kind: "veg"
    },
    {
        keyword: "orangejuice",
        name: "Апельсиновый сок",
        price: 120,
        category: "beverages",
        count: "300 мл",
        image: "sources/menu/beverages/orangejuice.jpg",
        kind: "cold"
    },
    {
        keyword: "applejuice",
        name: "Яблочный сок",
        price: 90,
        category: "beverages",
        count: "300 мл",
        image: "sources/menu/beverages/applejuice.jpg",
        kind: "cold"
    },
    {
        keyword: "carrotjuice",
        name: "Морковный сок",
        price: 110,
        category: "beverages",
        count: "300 мл",
        image: "sources/menu/beverages/carrotjuice.jpg",
        kind: "cold"
    },
    {
        keyword: "cappuccino",
        name: "Капучино",
        price: 180,
        category: "beverages",
        count: "300 мл",
        image: "sources/menu/beverages/cappuccino.jpg",
        kind: "hot"
    },
    {
        keyword: "greentea",
        name: "Зеленый чай",
        price: 100,
        category: "beverages",
        count: "300 мл",
        image: "sources/menu/beverages/greentea.jpg",
        kind: "hot"
    },
    {
        keyword: "tea",
        name: "Черный чай",
        price: 90,
        category: "beverages",
        count: "300 мл",
        image: "sources/menu/beverages/tea.jpg",
        kind: "hot"
    },
    {
        keyword: "baklava",
        name: "Пахлава",
        price: 220,
        category: "dessert",
        count: "300 гр",
        image: "sources/menu/desserts/baklava.jpg",
        kind: "m_portion"
    },
    {
        keyword: "checheesecake",
        name: "Чизкейк",
        price: 240,
        category: "dessert",
        count: "125 гр",
        image: "sources/menu/desserts/checheesecake.jpg",
        kind: "s_portion"
    },
    {
        keyword: "chocolatecheesecake",
        name: "Шоколадный чизкейк",
        price: 260,
        category: "dessert",
        count: "125 гр",
        image: "sources/menu/desserts/chocolatecheesecake.jpg",
        kind: "s_portion"
    },
    {
        keyword: "chocolatecake",
        name: "Шоколадный торт",
        price: 270,
        category: "dessert",
        count: "140 гр",
        image: "sources/menu/desserts/chocolatecake.jpg",
        kind: "s_portion"
    },
    {
        keyword: "donuts2",
        name: "Пончики (3 штуки)",
        price: 410,
        category: "dessert",
        count: "350 гр",
        image: "sources/menu/desserts/donuts2.jpg",
        kind: "m_portion"
    },
    {
        keyword: "donuts",
        name: "Пончики (6 штук)",
        price: 650,
        category: "dessert",
        count: "700 гр",
        image: "sources/menu/desserts/donuts.jpg",
        kind: "l_portion"
    }
];