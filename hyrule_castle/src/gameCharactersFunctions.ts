import  Player  from "./Player";
import Game  from "./Game";
import Enemy from './Enemy';
import readlineSync from 'readline-sync';
import * as fs from 'fs';
import Enemies from './Enemies';
import Bosses from "./Bosses";


export interface characterData {
    id: number;
    name: string;
    hp: number;
    str: number;
    rarity: number;
}



//chargement des données du fichier JSON
export function loadJSONData(path: string){
    try {
        const rawData = fs.readFileSync(path, 'utf-8');
        return JSON.parse(rawData.toString());
    } catch (error) {
        console.error('Error parsing JSON files');
        return false;    
    }
}

//fonction qui créé des objects players
export function createPlayers(playerData: characterData []): Player[] {
    return playerData.map((player) => {
        return new Player(player.name, player.hp, player.hp, player.str, player.rarity);
    });
}

//fonction qui crée des objects ennemies
export function createEnemies(enemyData: characterData[]): Enemies[] {
    return enemyData.map((enemy) => {
        return new Enemies(enemy.name, enemy.hp, enemy.hp, enemy.str, enemy.rarity);
    });
}

//fonction qui crée des objects bosses
export function createBosses(bossData: characterData[]): Bosses[] {
    return bossData.map((boss) => {
        return new Bosses(boss.name, boss.hp, boss.hp, boss.str, boss.rarity);
    });
}



//fionction pour selectionner les personnages en fonction de leur rareté
export function selectRandomByRarity<T extends { rarity: number }>(items: T[]): T {
    const totalRarity = items.reduce((acc, item) => acc + item.rarity, 0);
    let randomNumber = Math.floor(Math.random() * totalRarity) + 1;
    for (let i = 0; i < items.length; i++) {
      if (randomNumber <= items[i].rarity) {
        return items[i];
      }
      randomNumber -= items[i].rarity;
    }
    // Default return the first item
    return items[0];
  }


  




    
    



  
