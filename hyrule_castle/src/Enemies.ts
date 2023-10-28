import  Player  from "./Player";
import  Enemy  from "./Enemy";

// Classe Enemies qui hérite de Enemy


class Enemies extends Enemy{
    constructor(name:string,maxHp: number, hp:number, strength: number, rarity: number){
        super(name,maxHp, hp, strength,rarity);
    }

    attack(opponent: Player): void {
        opponent.hp -=this.strength;
    }


}
export default Enemies;