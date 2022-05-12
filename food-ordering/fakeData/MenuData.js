import { v4 as uuidv4 } from 'uuid';

import ld1A from "../public/img/menu-ld-1A.avif";
import ld1B from "../public/img/menu-ld-1B.avif";
import ld2A from "../public/img/menu-ld-2A.avif";
import ld2B from "../public/img/menu-ld-2B.avif";
import ld3 from "../public/img/menu-ld-3AB.avif";
import ld4A from "../public/img/menu-ld-4A.avif";
import ld4B from "../public/img/menu-ld-4B.avif";
import ld5A from "../public/img/menu-ld-5A.avif";
import ld5B from "../public/img/menu-ld-5B.avif";

import food1 from "../public/img/product-1.avif";
import food2 from "../public/img/product-2.avif";
import food3 from "../public/img/product-3.avif";
import food4 from "../public/img/product-4.avif";
import drink1 from "../public/img/drink-1.avif";
import drink2 from "../public/img/drink-2.avif";
import drink3 from "../public/img/drink-3.avif";
import drink4 from "../public/img/drink-4.avif";
import drinkM1 from "../public/img/drinkM-1.avif";
import drinkM2 from "../public/img/drinkM-2.avif";
import drinkM3 from "../public/img/drinkM-3.avif";
import drinkM4 from "../public/img/drinkM-4.avif";
import drinkM5 from "../public/img/drinkM-5.avif";
import drinkM6 from "../public/img/drinkM-6.avif";


import career1 from "../public/img/career-1.avif";
import career2 from "../public/img/career-2.avif";
import career3 from "../public/img/career-3.avif";

import event1 from "../public/img/event-1.avif";
import event2 from "../public/img/event-2.avif";
import event3 from "../public/img/event-3.avif";
import event4 from "../public/img/event-4.avif";

import main1 from "../public/img/main-1.avif";
import main2 from "../public/img/main-2.avif";
import main3 from "../public/img/main-3.avif";
import main4 from "../public/img/main-4.avif";
import main5 from "../public/img/main-5.avif";
import main6 from "../public/img/main-6.avif";

import snack1 from "../public/img/snack-1.avif";
import snack2 from "../public/img/snack-2.avif";
import snack3 from "../public/img/snack-3.avif";


export const listProducts = [
    {
        id: uuidv4(),
        type: "Best Food Item",
        name: "Cheese Tokbokki",
        listAddIngredient: ['Cheese Rice Cake', 'Fish Cake', 'Sausages', 'Ramen'],
        size: [],
        price: [10.9],
        img: food1,
    },
    {
        id: uuidv4(),
        type: "Best Food Item",
        name: "Ramen",
        listAddIngredient: ['Egg', 'Seaweed', 'Ramen', 'BokChoi'],
        size: [],
        price: [10.9],
        img: food2,
    },
    {
        id: uuidv4(),
        name: "Pork Dumpling",
        type: "Best Food Item",
        listAddIngredient: [],
        size: [],
        price: [10.9],
        img: food3,
    },
    {
        id: uuidv4(),
        name: "Crispy Chicken",
        type: "Best Food Item",
        listAddIngredient: ['Salad Cucumber with Sessame Oil', 'Kim chi', 'Sausages', 'Ramen', 'Cheese'],
        size: [],
        price: [10.9],
        img: food4,
    },
    {
        id: uuidv4(),
        type: "Best Drink Item",
        name: "Brown Sugar Bubble Milk Tea",
        listAddIngredient: ['Bubble', 'Cheese Foam', 'Jelly', 'Flan', 'Pudding'],
        size: ["Small", "Medium", "Large"],
        price: [4.9, 5.8, 6.5],
        img: drink1,
    },
    {
        id: uuidv4(),
        type: "Best Drink Item",
        name: "Berries Smoothy",
        listAddIngredient: ['Bubble', 'Cheese Foam', 'Jelly', 'Flan', 'Pudding'],
        size: ["Small", "Medium", "Large"],
        price: [4.9, 5.8, 6.5],
        img: drink2,
    },
    {
        id: uuidv4(),
        type: "Best Drink Item",
        name: "Chocolate Ice Blend",
        listAddIngredient: ['Bubble', 'Cheese Foam', 'Jelly', 'Flan', 'Pudding'],
        size: ["Small", "Medium", "Large"],
        price: [4.9, 5.8, 6.5],
        img: drink3,
    },
    {
        id: uuidv4(),
        name: "Mint Orange",
        type: "Best Drink Item",
        listAddIngredient: ['Bubble', 'Cheese Foam', 'Jelly', 'Flan', 'Pudding'],
        size: ["Small", "Medium", "Large"],
        price: [4.9, 5.8, 6.5],
        img: drink4,
    },
    {
        id: uuidv4(),
        day: "Monday - Lunch",
        type: "Lunch-Dinner Item",
        name: "Korean Mixed Rice",
        listAddIngredient: [],
        size: [],
        price: [10.9],
        img: ld1A,
    },
    {
        id: uuidv4(),
        day: "Monday - Dinner",
        type: "Lunch-Dinner Item",
        name: "Korean Crispy Chicken",
        listAddIngredient: [],
        size: [],
        price: [12.9],
        img: ld1B,
    },
    {
        id: uuidv4(),
        day: "Tuesday - Lunch",
        type: "Lunch-Dinner Item",
        listAddIngredient: [],
        size: [],
        name: "Mushroom Udon",
        price: [10.9],
        img: ld2A,
    },
    {
        id: uuidv4(),
        day: "Tuesday - Dinner",
        type: "Lunch-Dinner Item",
        name: "Teriyaki Ramen",
        listAddIngredient: [],
        size: [],
        price: [11.5],
        img: ld2B,
    },
    {
        id: uuidv4(),
        day: "Wednesday",
        type: "Lunch-Dinner Item",
        name: "Sushi's Buffet Day",
        listAddIngredient: [],
        size: [],
        price: [12.9],
        img: ld3,
    },
    {
        id: uuidv4(),
        day: "Thursday - Lunch",
        type: "Lunch-Dinner Item",
        name: "Pork Rib Sweet Sour",
        price: [10.9],
        listAddIngredient: [],
        size: [],
        img: ld4A,
    },
    {
        id: uuidv4(),
        day: "Thursday - Dinner",
        type: "Lunch-Dinner Item",
        name: "Beijing Duck Rice",
        price: [11.9],
        listAddIngredient: [],
        size: [],
        img: ld4B,
    },
    {
        id: uuidv4(),
        day: "Friday - Lunch",
        type: "Lunch-Dinner Item",
        name: "Bun Thit Nuong",
        listAddIngredient: [],
        size: [],
        price: [10.9],
        img: ld5A,
    },
    {
        id: uuidv4(),
        day: "Friday - Dinner",
        type: "Lunch-Dinner Item",
        name: "South Family Meal Style",
        listAddIngredient: [],
        size: [],
        price: [12.9],
        img: ld5B,
    },
    {
        id: uuidv4(),
        name: "Kim Chi Hot Pot",
        type: "Main Item",
        price: [24.9],
        ingredients: "Pork slices, Kimchi, Mushrooms, Cabbage, Tofu",
        extraInfo: "For 2-3 people",
        listAddIngredient: ["Pork slices", "Kimchi", "Vegetables", "Tofu", "Garlic"],
        size: [],
        img: main1,
    },
    {
        id: uuidv4(),
        name: "Goi Chao Ga",
        type: "Main Item",
        price: [22.9],
        ingredients: "Chicken, Rice, Cabbage, Carrot, Chilli, Onion, Mushrooms, Peanut",
        extraInfo: "For 2 people",
        listAddIngredient: ["Shrip Cakes", "Rice Soup", "Dried Onion"],
        size: [],
        img: main2,
    },
    {
        id: uuidv4(),
        name: "Beijing Duck with Dumpling",
        type: "Main Item",
        price: [24.5],
        ingredients: "Grilled Duck, Dumpling, Salad and Cucumber",
        extraInfo: "For 2 people",
        listAddIngredient: ["Bao Bao", "Kimchi", "Banh mi"],
        size: [],
        img: main3,
    },
    {
        id: uuidv4(),
        name: "Seafood Sashimi",
        type: "Main Item",
        price: [39.9],
        ingredients: "Fresh Salmon, Tuna, Squid, Shrimp, Wasabi and Ginger",
        extraInfo: "For 2-3 people",
        listAddIngredient: ["Wasabi", "Salad Seaweed", "Ginger", "Sushi Rice"],
        size: [],
        img: main4,
    },
    {
        id: uuidv4(),
        name: "Sontam",
        type: "Main Item",
        price: [19.9],
        ingredients: "Fresh Crab, Papaya, Tomatoes, Cabbage, Chilli, Fish sauces",
        extraInfo: "For 2 people",
        listAddIngredient: ["Vegetables", "Chilli Powder"],
        size: [],
        img: main5,
    },
    {
        id: uuidv4(),
        name: "Grilled Korean Style",
        type: "Main Item",
        price: [49.9],
        ingredients: "Pork slices, Beef ribs or slices, Kimchi, Salad, Korean sauces",
        extraInfo: "For 3-4 people",
        listAddIngredient: ["Pork Slices", "Salad", "Kimchi", "Beef Ribs"],
        size: [],
        img: main6,
    },
    {
        id: uuidv4(),
        name: "Mixed Full Topping Milk Tea",
        type: "Drink Item",
        ingredients: "Chocolate pudding, Flan, Bubble, Cheese jelly, Milk tea",
        extraInfo: "You can change level of sweet.",
        listAddIngredient: ['Bubble', 'Cheese Foam', 'Jelly', 'Flan', 'Pudding'],
        size: ["Small", "Medium", "Large"],
        price: [4.9, 5.8, 6.5],
        img: drinkM1,
    },
    {
        id: uuidv4(),
        name: "Fruit Smoothy",
        type: "Drink Item",
        ingredients: "Fruits: Strawberry, Coconut with Cacao Powder, Avocado",
        listAddIngredient: ['Bubble', 'Cheese Foam', 'Jelly', 'Flan', 'Pudding'],
        size: ["Small", "Medium", "Large"],
        extraInfo: "You can choose which one you love.",
        price: [4.9, 5.8, 6.5],
        img: drinkM2,
    },
    {
        id: uuidv4(),
        name: "Fruit Juice",
        type: "Drink Item",
        ingredients: "Fruits: Orange, Pearl, Watermelon, Pineapple, Apple",
        listAddIngredient: ['Bubble', 'Cheese Foam', 'Jelly', 'Flan', 'Pudding'],
        size: ["Small", "Medium", "Large"],
        extraInfo: "You can choose which one you love.",
        price: [4.9, 5.8, 6.5],
        img: drinkM3,
    },
    {
        id: uuidv4(),
        name: "Original Milk Tea",
        type: "Drink Item",
        ingredients: "Bubble and Milk tea, Cheese foam",
        listAddIngredient: ['Bubble', 'Cheese Foam', 'Jelly', 'Flan', 'Pudding'],
        size: ["Small", "Medium", "Large"],
        extraInfo: "You can change level of sweet.",
        price: [4.9, 5.8, 6.5],
        img: drinkM4,
    },
    {
        id: uuidv4(),
        name: "Soju Wine/ Rice Wine",
        type: "Drink Item",
        ingredients: "",
        extraInfo: "Soju and Rice wine: 300ml",
        listAddIngredient: [],
        size: [],
        price: [11.9],
        img: drinkM5,
    },
    {
        id: uuidv4(),
        name: "Tamanohikari Shuraku Junmai Ginjo Sake",
        type: "Drink Item",
        ingredients: "",
        listAddIngredient: [],
        size: [],
        extraInfo: "Sake: 300ml",
        price: [14.9],
        img: drinkM6,
    },
    {
        id: uuidv4(),
        name: "Cheese Tokbokki",
        type: "Snack Item",
        ingredients: "Fish cake, Tokbokki cake, Mozzarella cheese and Cheese powder, Onion and Sesame",
        extraInfo: "There are 4 levels of spicy.",
        listAddIngredient: ["Tokbokki", "Cheese", "Fish Cake"],
        size: [],
        price: [11.9],
        img: food1,
    },
    {
        id: uuidv4(),
        name: "Crispy Chicken and Fried Potatoes",
        type: "Snack Item",
        ingredients: "Chicken, Potatoes, Korean sauces, Sesame, Onion",
        listAddIngredient: ["Fried Potatoes", "Mozzarella Stick", "Chilli Bites"],
        size: [],
        extraInfo: "There are 4 levels of spicy.",
        price: [11.9],
        img: food4,
    },
    {
        id: uuidv4(),
        name: "Dumpling and Tao Bao",
        type: "Snack Item",
        ingredients: "Flour, Pork, Mushroom, Carrot, Onion, Garlic, Soy sauces and vinegar, Ginger",
        listAddIngredient: ["Cabbage", "Kimchi", "Sald and Cucumber"],
        size: [],
        extraInfo: "Hong Kong styles",
        price: [10.9],
        img: food3,
    },
    {
        id: uuidv4(),
        name: "Doraemon and Fish Cake",
        type: "Snack Item",
        ingredients: "Red bean, flour, Sugar, Milk",
        extraInfo: "With 1 big size of TeaTee glass.",
        listAddIngredient: ["Mungbean", "Milk", "Cheese"],
        size: [],
        price: [10.9],
        img: snack1,
    },
    {
        id: uuidv4(),
        name: "Goi Cuon",
        type: "Snack Item",
        ingredients: "Shrimp, Pork, Salad, Cucumber, Rice noddles, Rice paper, Vegetables",
        extraInfo: "There are 4 rolls with Vietnamese sauces from peanuts.",
        listAddIngredient: ["Mungbean", "Salad", "Eggs", "Pork Ear"],
        size: [],
        price: [11.9],
        img: snack2,
    },
    {
        id: uuidv4(),
        name: "Cheese Pizza",
        type: "Snack Item",
        ingredients: "Flour, Cheese, Surumi, Onion, Bacon, Chilli",
        extraInfo: "We also have goal cheese",
        listAddIngredient: ["Cheese", "Bacon", "Surumi", "Vegetable"],
        size: [],
        price: [10.9],
        img: snack3,
    },
];

export const recruitList = [
    {
        jobName: "Manager Store",
        img: career1,
        qty: 1,
        reqs: [
            "Experience same position at least 1 year.",
            "Using Maraplan tool to support plan the schedule.",
            "Training employees.",
            "Ordering ingredients and stuffs once monthly.",
            "Others are shared in the interview."
        ]
    },
    {
        jobName: "Waiter/Waitress",
        img: career3,
        qty: 2,
        reqs: [
            "No experience is no big problem, you have your trial period.",
            "Speaking fluency English, Finnish or Vietnamese is a plus.",
            "Good attitude, good listener.",
            "Others are shared in the interview."
        ]
    },
    {
        jobName: "Cashier",
        img: career2,
        qty: 1,
        reqs: [
            "No experience is no big problem, you have your trial period.",
            "Speaking fluency Finnish and English, adding Vietnamese is a plus.",
            "Joviality with customers.",
            "Others are shared in the interview."
        ]
    },
]

export const eventList = [
    {
        id: 1,
        eventName: "Friends Day",
        img: event1,
        firstWord: "Inviting your friends to 'TeeTea' to catch discounts!",
        des: "Spring is coming, let's go out and chill with your friends at TeeTea. There are huge of delicious foods and creative drinks are waiting for you. One special event, 'An Interesting Game' is taken place about 19:00 - 20:00 everyday and remember this game for your friends group, many discounts are your gifts. Besides, you have a great moment with your best friends. Do you join anf play the game?",
    },
    {
        id: 2,
        eventName: "Woman's Day",
        img: event2,
        firstWord: "Taking your important women in your life and giving them the best!",
        des: "8-3-2022, 'Happy Woman's Day' and wishing all best to you. This is the best time of you to show your love to girls or women, inviting them to TeeTea and taking them photos to get discounts, Why not?",
    },
    {
        id: 3,
        eventName: "What is news in your social?",
        img: event3,
        firstWord: "Taking delicious foods and drinks photos and posting on your social media, sharing the best to your family and friends!",
        des: "New event!!! Take photos and share them right now. It does not waste your time, just a few minutes, however, you bring a power gift to your friends and family with delicious pervasive. Let's share your chill moment! Specially, if your pic gets more 500 likes in a hour, you catch a free delicious food and drinks table."
    },
    {
        id: 4,
        eventName: "Become Our Friendly Customer",
        img: event4,
        firstWord: "It is time for you to become our friendly customer, let's join with us! Creating a new member card in a second!",
        des: "Many many many big gifts for new members, why not be our customers? If you are a freshmen, your first order has 10% discount with best sellers foods and drinks and the next order gets 20% discount if you bring another new member to TeeTea restaurant. Besides, we always update new events everyday, weekly and monthly, every moment. Please do not miss them! they are the gifts of TeeTea to our customers, Thank you! "
    },
]