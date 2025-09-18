import { Apple, Fruit } from "./excersise_4_fruit";

export const bestFruits = [
    new Apple(), 
    new Fruit('orange', 'the best', []), 
    new Fruit('papaya', 'not sure', ['can be deadly to aliens'])
]

export function getMostDeadlyFruitAsFunction(fruits: Fruit[] = bestFruits) {
    // Iterators allow us to perform given action on each element of the collection
    // In this case first we map object to its fullSpaceshipScareFactor value
    // Then we return only those elements that have given factor bigger then 0
    return fruits
        .filter(fruit => fruit.fullSpaceshipScareFactor > 6)
        .map(fruit => fruit.name)
}

// Optional parameters can be marked with ?
export const getMostDeadlyFruitAsFunctionAsArrowFunction = (fruits?: Fruit[]) => {
    // Arrow functions are better for small compact functions. They don't work well inside objects
    return fruits || bestFruits
        .filter(fruit => fruit.fullSpaceshipScareFactor > 6)
        .map(fruit => fruit.name)
}

export function getSoManyFruits(...fruits: Fruit[]) {
    // Iterators allow us to perform given action on each element of the collection
    // In this case first we map object to its fullSpaceshipScareFactor value
    // Then we return only those elements that have given factor bigger then 0
    return fruits
        .filter(fruit => fruit.fullSpaceshipScareFactor > 6)
        .map(fruit => fruit.name)
}

export function canIReturnMorethings() {
    return {value: true, key: 'Answer is: '}
}

export function willThisWorkInReverse() {
    return {valueReverse: true, keyReverse: 'Answer is: '}
}