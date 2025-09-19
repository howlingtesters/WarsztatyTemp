import { test } from "@playwright/test";
import { Fruit } from "./excersise_4_fruit";
import { bestFruits, canIReturnMorethings, getMostDeadlyFruitAsFunction, getMostDeadlyFruitAsFunctionAsArrowFunction, getSoManyFruits, willThisWorkInReverse } from "./excersise_3_functions";
import { proposeToHer } from "./promise";

test("Functions and iterators", async () => {
  bestFruits.forEach((fruit) => console.log(fruit.name));

  // Inline function
  const getMostDeadlyFruitInLineFunction = function (fruits: Fruit[]) {
    return fruits
      .filter((fruit) => fruit.fullSpaceshipScareFactor > 6)
      .map((fruit) => fruit.name);
  };
  console.log(getMostDeadlyFruitInLineFunction(bestFruits));

  // Function
  console.log(getMostDeadlyFruitAsFunction());

    // Function
    console.log(getMostDeadlyFruitAsFunction())

    // Arrow function
    console.log(getMostDeadlyFruitAsFunctionAsArrowFunction())
    
    // So many fruits
    getSoManyFruits(bestFruits[0], bestFruits[1])

    const returnValue = canIReturnMorethings()
    console.log(returnValue.key + returnValue.value)
    let {value, key} = canIReturnMorethings()
    console.log(key + value)
    let {keyReverse, valueReverse} = willThisWorkInReverse()
    console.log(keyReverse + valueReverse)
});

test("Promise", async () => {
  // This test fail randomly at 50% ratio
  // proposeToHer() returns Promise<value> not value it self! In this case it is Promise<{ 'Sure thing!' }> or Promise { <rejected> 'No way!' }
  let iWillMarryYouForSure = proposeToHer();
  console.log(iWillMarryYouForSure);

    // So it migh be not good idea do give her all of your assets
    const giveHerAllYourAssets = function() {console.log('Transfer assets!')};
    giveHerAllYourAssets()

  // Since the actual value is resolved here not when the promise is returned
  console.log(await iWillMarryYouForSure);
});
