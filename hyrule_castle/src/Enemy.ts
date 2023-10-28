//classe abstraite GameCharacter
import  Player  from "./Player";

abstract class Enemy{
    name: string;
    maxHp: number;
    hp: number;
    strength: number;
    rarity: number;


    constructor(name: string,maxHp: number, hp: number, strength: number,rarity: number){
        this.name = name;
        this.maxHp = maxHp;
        this.hp = hp;
        this.strength = strength;
        this.rarity = rarity;
    }

    abstract attack(opponent: Player):void;
    
}
export default Enemy;