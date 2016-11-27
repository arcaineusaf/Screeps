var structureTower = {

    /** @param {Creep} creep **/
    run: function(creep) {
        //var tower = Game.getObjectById('28d5763cd5a8b8312d016935');
    //if(tower) {
     //   var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }
    }
};

module.exports = structureTower;