import { test } from "@playwright/test";

// declare constant
const apple = 'apple'
const papaya: string = 'papaya'
const orange: string = 'orange'
const startingWithFruits = 10
const startingWithOranges = 5
const startingWithpapayas = 3

test("If", async () => {
    // declare variable
    let chosenFruit = apple
    let startingWith: number
    
    // Ternary operator
    startingWith = (chosenFruit === orange) ? startingWithOranges : 0;
    console.log(startingWith)

    // If
    chosenFruit = orange
    if (chosenFruit === orange) {
        startingWith = startingWithOranges
    } else if (chosenFruit === papaya) {
        startingWith = startingWithpapayas
    } else {
        startingWith = startingWithFruits - startingWithOranges - startingWithpapayas
    }
    console.log(startingWith)

    // Switch
    chosenFruit = papaya
    switch (chosenFruit) {
        case orange:
            startingWith = startingWithOranges
            break;
        case papaya: 
            startingWith = startingWithpapayas
            break;
        default:
            startingWith = startingWithFruits - startingWithOranges - startingWithpapayas
            break;
    }   
    console.log(startingWith)
});

test("For", async () => {
    // For on elements
    for (let fruit of [apple, orange, papaya]) {
        console.log(`I need to buy ${fruit}`)
    }

    for (let [index, fruit] of [apple, orange, papaya].entries()) {
        console.log(`On my shopping list ${fruit} is with index ${index + 1}`)
    }

    // For on range 
    for (let counter = 5; counter < 11; counter++) {
        console.log('I love my fruits so many times:' + counter);
    }    
});


test("Do While Do", async () => {

    // While do
    let counter = 0
    while (counter < 4) {
        counter++
        console.log('I love my fruits so many times:' + counter);
        if (counter > 3) {
            console.log('Ok that is enought fruits praising')
            break
        }
    }

    // Do while
    do {
        counter++
        console.log('I love my fruits so many times:' + counter);
        if (counter > 3) {
            console.log('Ok that is enought fruits praising')
            break
        }
    } while (counter < 10);
});