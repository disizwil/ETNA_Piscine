import  Enemy  from "./Enemy";
import  Player  from "./Player";

// Classe Enemy qui hérite de GameCharacter

class Bosses extends Enemy{
    constructor(name:string,maxHp: number, hp:number, strength: number,rarity: number){
        super(name,maxHp, hp, strength,rarity);
    }

    attack(opponent: Player): void {
        opponent.hp -=this.strength;
    }


}
export default Bosses;