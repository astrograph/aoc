import input from './input.json'

export class Game {

    constructor() { }

    calculateStrategyScore(game: string[][]):number {
        let totalScore = 0;
        for (let round = 0; round < game.length; round++) {            
            totalScore = totalScore + this.play(game[round][0], game[round][1]);
        }
        return totalScore;
    }

    calculateRealScore(game: string[][]):number {
        let totalScore = 0;
        for (let round = 0; round < game.length; round++) {            
            totalScore = totalScore + this.playForReal(game[round][0], game[round][1]);
        }
        return totalScore;
    }

    /**
     * Rock:        A, X
     * Paper:       B, Y
     * Scissors:    C, Z
     */
    play(elf: string, me: string): number {
        let score = 0;
        switch (me) {
            case "X": {
                score = 1;
                switch (elf) {
                    case "A": {
                        score = score + 3;
                        break;
                    }
                    case "B": {
                        break;
                    }
                    case "C": {
                        score = score + 6;
                    }
                }
                break;
            }
            case "Y": {
                score = 2;
                switch (elf) {
                    case "A": {
                        score = score + 6;
                        break;
                    }
                    case "B": {
                        score = score + 3;
                        break;
                    }
                    case "C": {
                        break;
                    }
                }
                break;
            }
            case "Z": {
                score = 3;
                switch (elf) {
                    case "A": {
                        break;
                    }
                    case "B": {
                        score = score + 6;
                        break;
                    }
                    case "C": {
                        score = score + 3;
                        break;
                    }
                }
                break;
            }
                
        }
        return score;

    }

    /**
     * Rock:        A, X
     * Paper:       B, Y
     * Scissors:    C, Z
     */
     playForReal(elf: string, me: string): number {
        let score = 0;
        switch (me) {
            case "X": {
                // I need to lose                
                switch (elf) {
                    case "A": {
                        // I need to chose scissors
                        score = score + 3;
                        break;
                    }
                    case "B": {
                        // I need to chose rock
                        score = score + 1;
                        break;
                    }
                    case "C": {
                        // I need to chose paper
                        score = score + 2;
                    }
                }
                break;
            }
            case "Y": {
                // I need a draw
                switch (elf) {
                    
                    case "A": {
                        // I need to chose rock
                        score = score + 1 + 3;
                        break;
                    }
                    case "B": {
                        // I need to chose paper
                        score = score + 2 + 3;
                        break;
                    }
                    case "C": {
                        // I need to chose scissors
                        score = score + 3 + 3;
                        break;
                    }
                }
                break;
            }
            case "Z": {
                // I need to win
                switch (elf) {
                    case "A": {
                         // I need to chose paper
                         score = score + 2 + 6;
                        break;
                    }
                    case "B": {
                         // I need to chose scissors
                         score = score + 3 + 6;
                        break;
                    }
                    case "C": {
                        // I need to chose rock
                        score = score + 1 + 6;
                        break;
                    }
                }
                break;
            }
                
        }
        return score;

    }


}

let game = new Game();
let score = game.calculateStrategyScore(input.strategy);
console.log(`my RPS stragegy score: ${score}`);
score = game.calculateRealScore(input.strategy);
console.log(`my real RPS score: ${score}`);