var roleHarvester = require('role.harvester');

var roleBuilder = {
    
    /** @param {Creep} creep **/
    run: function(creep) {
        var myEnergyCapacity = Game.rooms.W8N3.energyAvailable;
	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('harvesting');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('building');
	    }

	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
	    }
	    else {
	        var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN) && structure.energyCapacity >= structure.energy;
                    }
            });
            if(myEnergyCapacity < 250)
                {
                    targets = null;
                }
            if(targets){
                
                if(targets[0].transferEnergy(creep, 50)==ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
	    }
	}
};

module.exports = roleBuilder;