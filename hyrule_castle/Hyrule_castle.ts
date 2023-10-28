
import  Player  from "./src/Player";
import Game  from "./src/Game";
import Enemy from './src/Enemy';
import readlineSync from 'readline-sync';
import * as fs from 'fs';
import Enemies from './src/Enemies';
import Bosses from "./src/Bosses";
import {createPlayers, createEnemies, createBosses, loadJSONData, selectRandomByRarity, characterData} from "./src/gameCharactersFunctions";




//chargement des données à partir des fichiers JSON
const playerData: characterData [] = loadJSONData('./json/players.json');
const enemyData: characterData[]  = loadJSONData('./json/enemies.json');
const bossData:characterData [] = loadJSONData('./json/bosses.json');


//creation des objets joueurs, ennemies et boss
const playersList: Player[] = createPlayers(playerData);
const enemiesList: Enemies[] = createEnemies(enemyData);
const bossesList : Bosses[] = createBosses(bossData);

// selection des personnages parmi les listes crees
const selectedPlayer = selectRandomByRarity(playersList);
const selectedEnemy= selectRandomByRarity(enemiesList);
const selectedBoss = selectRandomByRarity(bossesList);

//instanciation des objects player et enemies

const player = new Player(selectedPlayer.name,selectedPlayer.maxHp,selectedPlayer.hp,selectedPlayer.strength, selectedPlayer.rarity);

const enemies: Enemy[] = [];
const enemiesCount = 9;
const boss = new Bosses(selectedBoss.name, selectedBoss.maxHp, selectedBoss.hp, selectedBoss.strength, selectedBoss.rarity);

for (let i = 1; i <= enemiesCount; i++) {
  enemies.push(new Enemies(`${selectedEnemy.name} ${i}`, selectedEnemy.maxHp, selectedEnemy.hp, selectedEnemy.strength, selectedEnemy.rarity));
}
enemies.push(boss);



//debut du jeu

const game = new Game(player, enemies);
game.startScreen();




// const enemies = [
//     new Bokoblin("Bokoblin 1",30, 30, 5),
//     new Bokoblin("Bokoblin 2",30, 30, 5),
//     new Bokoblin("Bokoblin 3",30, 30, 5),
//     new Bokoblin("Bokoblin 4",30, 30, 5),
//     new Bokoblin("Bokoblin 5",30, 30, 5),
//     new Bokoblin("Bokoblin 6",30, 30, 5),
//     new Bokoblin("Bokoblin 7",30, 30, 5),
//     new Bokoblin("Bokoblin 8",30, 30, 5),
//     new Bokoblin("Bokoblin 9",30, 30, 5),
//     new Ganon("Ganon",150, 150, 20)
// ];

