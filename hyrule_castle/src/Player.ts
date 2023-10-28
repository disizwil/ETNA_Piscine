import  Enemy  from "./Enemy";

// Classe Player
class Player{
    name: string;
    maxHp:number;
    hp: number;
    strength: number;
    rarity: number;


    constructor(name: string, maxHp:number, hp: number, strength: number,rarity: number){
        this.name = name;
        this.maxHp = maxHp;
        this.hp = hp;
        this.strength = strength;
        this.rarity = rarity;
    }
    

    attack(opponent: Enemy): void {
         opponent.hp -= this.strength;
        
    }

    heal(): void {
        const healAmount = this.maxHp / 2;
        this.hp = Math.min(this.hp + healAmount, this.maxHp);
        
        
    }
}
export default Player;