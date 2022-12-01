import input from './input.json'

export class Food {

    constructor() { }

    richestElf(snacks: number[]): Number {
        let maxFood = 0;
        let currentMaxFood = 0;
        for (let snack of snacks) {
            if (snack != 0) {
                currentMaxFood = currentMaxFood + snack;
            } else {
                if (currentMaxFood > maxFood) {
                    maxFood = currentMaxFood;
                }
                currentMaxFood = 0;
            }
        }
        return maxFood;
    }

    richestThreeElves(snacks: number[]): Number {
        let currentPack = 0;
        let topThreePacks = [0, 0, 0];
        for (let snack of snacks) {
            if (snack != 0) {
                currentPack = currentPack + snack;
            } else {
                topThreePacks = this.updateTopPacks(currentPack, topThreePacks);
                currentPack = 0;
            }
        }
        // at the end we want to make sure the last pack will also be accounted for
        topThreePacks = this.updateTopPacks(currentPack, topThreePacks);
        return topThreePacks.reduce((sum, pack) => sum + pack, 0);

    }

    updateTopPacks(elfPack: number, topThree: number[]) {
        topThree.push(elfPack);
        topThree.sort((n1, n2) => { return n2 - n1; }).splice(3, 1);
        return topThree;
    }
}

let food = new Food();
let amount = food.richestElf(input.lembas);
console.log(`richest elf carries: ${amount}`);
amount =  food.richestThreeElves(input.lembas);
console.log(`richest three elves carry: ${amount}`);