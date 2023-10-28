import React from 'react';
import  Enemy  from "./Enemy";
import  Player  from "./Player";
const readlineSync = require('readline-sync');


class Game {
    player: Player;
    ennemies: Enemy[];
    currentFloor: number;

    constructor(player: Player, ennemies: Enemy[]){
        this.player = player;
        this.ennemies = ennemies;
        this.currentFloor = 1;
    }

   

    //methode tour du joueur qui permet soit d'attaquer soit de se soigner
    playerTurn(enemy: Enemy){
        const readline = require('readline-sync');
        console.log(`\n====> PLAYER'S TURN:`);
        const options = ['Attack', 'Heal', 'Quit'];
        const index = readline.keyInSelect(options, 'Choose your action: ',{cancel: false});

        console.clear();

        

        if(index ===0){
             console.log(`${this.player.name}\x1b[32m attacks :\x1b[0m ${this.player.strength} STR.`);//couleur verte
             //console.log(`\x1b[0m`); //reinitialisation de la couleur
            this.player.attack(enemy);
            
            if(enemy.hp<= 0){
                console.log(`${enemy.name} has been defeated.`);
            }
        }else if(index === 1){
            this.player.heal();
            console.log(`You used heal! \u{1F4AA}`);

        }else if(index === 2){
            console.log('Exiting the game...');
            process.exit(0);
        }
        
        else {
            console.log('Invalid choice. Please choose again.');
            this.playerTurn(enemy);
        }
        
    }

     //methode qui simule l'attaque de l'ennemi
     enemyTurn(enemy:Enemy){
        
        console.log(`Enemy's turn: `);
        
        enemy.attack(this.player);

        if(this.player.hp <=0){
            console.log(`${this.player.name} has been defeated. Game over.`);
        }
        
    }


    

    //fonction écran d'accueill du jeu "Start" "Quit"
    startScreen() {
        const readline = require('readline-sync');
        console.log('=== Welcome to the Game ===');
        const options = ['Start Game', 'Quit'];
        const index = readline.keyInSelect(options, 'Choose an option: ', { cancel: false });
        console.clear();
        if (index === 0) {
        console.log('Starting the game...');
        this.startGame();
        } else if (index === 1) {
        console.log('Exiting the game...');
        process.exit(0);
        }
        
    }


    //fonction qui simule le déroulement du jeu

    startGame(){
        
        
        while(this.player.hp > 0 && this.currentFloor <= 10){
            
            const currentEnemy = this.ennemies[this.currentFloor -1];
            
            while(currentEnemy.hp > 0 && this.player.hp > 0){
                console.log(`                                               \u{1F525}\u{1F525}\u{1F525}\u{1F525} FIGHT ${this.currentFloor}  \u{1F525}\u{1F525}\u{1F525}\u{1F525}`);
                const currentEnemy = this.ennemies[this.currentFloor -1];
                console.log(`\x1b[31m ${currentEnemy.name}`); //couleur rouge pour l'enemie
                console.log(`HP: ${'\u{1F480}'.repeat(currentEnemy.hp)} ${currentEnemy.hp} / ${currentEnemy.maxHp}\n`);
                console.log(`\x1b[0m`); //reinitialisation de la couleur
 
                console.log(`\x1b[32m ${this.player.name}`); //couleur verte pour le joueur     
                console.log(`HP: ${'\u{1F49A}'.repeat(this.player.hp)} ${this.player.hp} / ${this.player.maxHp}`);
                console.log(`\x1b[0m`); //reinitialisation de la couleur

               

                
                this.playerTurn(currentEnemy);
                
                if(currentEnemy.hp > 0){
                    console.log(` ${currentEnemy.name}\x1b[31m attacks:\x1b[0m ${currentEnemy.strength} STR.`)
                    //console.log(`\x1b[0m`); //reinitialisation de la couleur
                    this.enemyTurn(currentEnemy);
                }
               
                
            }


            if(this.player.hp <= 0){
                console.log(`\x1b[31m \u{1F62D}\u{1F62D}GAME OVER! Drink more potions next time.\u{1F62D}\u{1F62D}`);
                console.log(`\x1b[0m`); //reinitialisation de la couleur
                return;

            }
            if(this.currentFloor === 10){
                console.log(`\x1b[32m \u{1F947}CONGRATULATIONS!\u{1F947} You have defeated  ${currentEnemy.name}!`);
                console.log(`\x1b[0m`); //reinitialisation de la couleur
                

                const newGameOption = readlineSync.keyInSelect(['Continue', 'Quit'], 'What would you like to do next?',{cancel: false});

                    if (newGameOption === 0) {
                        console.log('Starting a new game...');
                        // Réinitialiser les paramètres du jeu pour une nouvelle partie
                        this.currentFloor = 1; // Réinitialiser l'étage actuel du jeu
                        // Réinitialiser d'autres paramètres si nécessaire

                        // Lancer une nouvelle partie
                        this.startGame(); // ou votre méthode pour démarrer une nouvelle partie
                    } else if (newGameOption === 1) {
                        console.log('Quitting the game...');
                        // Votre code pour quitter le jeu si l'utilisateur choisit l'option "Quit"
                    }
            }

            console.clear();
            this.currentFloor++;
            
        }
        
    }

    

     
    

}

export default Game;
