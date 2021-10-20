class Ninja {
    constructor (name,  health, speed =3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log("Name: " + this.name);
    }
    showStats() {
        console.log("Attributes for " + this.name + ":");
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
    }
    drinkSake() {
        console.log(this.name + " is drinking Sake to gain 10 hp");
        this.health += 10;
        console.log(this.name + " now has " + this.health + " hp");
    }
}
class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    showStats() {
        console.log("Attributes for " + this.name + ":");
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
        console.log("Wisdom: " + this.wisdom);
    }
    speakWisdom() {
        this.drinkSake();
        console.log(this.name + " says, 'Always think before you act.'")
    }
}

const ninja1 = new Ninja("Ninja1", 10);
ninja1.showStats();

const sensai1 = new Sensei("Sensai1");
sensai1.showStats();

const ninja2 = new Ninja("Ninja 2", 25, 5, 5);
ninja2.showStats();

const sensai2 = new Sensei("Sensai 2", 30, 99, 99);
sensai2.showStats();
sensai2.drinkSake();
sensai2.showStats();
sensai2.speakWisdom();