//import Enemy from './Enemy';

class GameFloor{
    floorNumber: number;
    enemies: Enemy[];
    boss: Enemy | null;

    constructor(floorNumber: number,enemies: Enemy[],boss: Enemy | null){
        this.floorNumber = floorNumber;
        this.enemies = enemies;
        this.boss = boss;
    }

    //méthode pour ajouter un ennemi à l'étage
    addEnemy(enemy: Enemy){
        this.enemies.push(enemy);
    }

    //methode pour supprimer un ennemi de l'etage
    removeEnemy(enemy: Enemy){
        const index = this.enemies.indexOf(enemy);
        if(index !== -1){
            this.enemies.splice(index, 1);
        }
    }

    //methode pour obtenir le nombre d'ennemis restant sur l'etage
    getRemainingEnemiesCount(){
        return this.enemies.length;
    }

    //methode pour obtenir le boss de l'etage
    getBoss(){
        return this.boss;
    }

    //methode pour definir le boss de l'étage
    setBoss(boss:Enemy){
        this.boss = boss;
    }
}

export default GameFloor;