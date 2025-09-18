import { test } from "@playwright/test";
import { Apple } from "./excersise_4_fruit";

test("Simple object", async () => {

    // Inline objects
    let fruit = {
        taste: 'good',
        name: 'papaya'
      };
    fruit.taste; // Returns 'good',
    fruit['name']; // Returns 'papaya',

    const alienShip = {
        retreat () { 
          console.log('We no longer wish to conquer your planet. It is full of fruits, which we do not care for.')
        },
        takeOff() {
          console.log('Spim... Borp... Glix... Blastoff!')
        }
    };

    console.log(alienShip.retreat())
    console.log(alienShip.takeOff())
});

test("Complex object", async () => {

    // Complex objects
    const apple = new Apple()
    console.log(apple.fullSpaceshipScareFactor)

    // Async methods require await to execute in the place that we want to be sure that the actual value will be returned (instead of Promise<value>)
    await apple.getSpoiledMore()
    console.log(apple.fullSpaceshipScareFactor)

    console.log(apple.weaponName)
    console.log(apple.reality)
});