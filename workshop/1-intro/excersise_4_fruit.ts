// Interface can be used to store data, or to force class to contain cartain parameters and functions (with keyword implements)
export interface AntiSpaceshipStartegy {
  _hiddenValue: number;
}

// Almost the same purpose have type
export type SecretWeapons = {
  weaponName?: string;
  reality: string;
};

// But interfaces can be redecalred like that (now it will have to parameters _hiddenValue and spaceshipScareFactor)
// This might be good or bad depending on specific scenario
// Interfaces and classes can extend types
export interface AntiSpaceshipStartegy extends SecretWeapons {
  spaceshipScareFactor: number;
}

export class Fruit implements AntiSpaceshipStartegy {
  // public parameters
  spaceshipScareFactor: number;
  taste: string;
  reality: string;

  // optional parameters
  name?: string;
  weaponName?: string;

  // private parameters
  _hiddenValue: number;

  // if parameter is declared with acces modifier (like _secretAntiSpaceshipWeapons) it does not need to be redeclared in class
  constructor(
    name: string,
    taste: string | undefined,
    private _secretAntiSpaceshipWeapons?: string[],
  ) {
    this.name = name;
    this.spaceshipScareFactor = name.length;
    this.taste = taste || "Bad but noone will admit that";

    // Objects can be imported from external files like json
    const secretWeapon: SecretWeapons = require("./secret_weapon.json");
    this.weaponName = secretWeapon.weaponName;
    this.reality = secretWeapon.reality;
    this._hiddenValue = -100;
  }

  // Get methods can give us access to hiddden values (or new values)
  get fullSpaceshipScareFactor() {
    if (this._secretAntiSpaceshipWeapons == undefined) {
      throw Error("Cannot calculate that!");
    }
    return this.spaceshipScareFactor + this._secretAntiSpaceshipWeapons.length;
  }

  // async method will return Promise<value> instead of value
  async getSpoiledMore() {
    this.spaceshipScareFactor++;
  }
}

export class Vitamin {
  constructor(name: string) {}
}

// Inheritance - is relation
export class Apple extends Fruit {
  // Composition - have relation
  vitamins: Vitamin[];

  constructor() {
    super("Apple", "Sweet", ["Hidden bug", "Drop on the head"]);
    this.vitamins = ["A", "B", "C"];
  }
}
