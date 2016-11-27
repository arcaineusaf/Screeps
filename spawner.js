var Spawner = {

    /** @param {Creep} creep **/
    run: function(hCount, uCount, bCount) {
        
        var myEnergyCapacity = Game.rooms.W8N3.energyCapacityAvailable;
        if(Game.spawns.HomeBase.memory == 'debug'){
        console.log("Room Capacity at = ",myEnergyCapacity);
        }
      
		if(myEnergyCapacity <= 250){
			if(hCount < 5) {
				Game.spawns.HomeBase.createCreep([WORK, CARRY, MOVE], null, {role: 'harvester'});
				    if(Game.spawns.HomeBase.memory == 'debug'){
				        console.log('Spawning Harvester')
				    }
				}
			if(bCount < 2 && hCount >= 5){
				Game.spawns.HomeBase.createCreep([WORK, CARRY, MOVE], null, {role: 'builder'});
				if(Game.spawns.HomeBase.memory == 'debug'){
				        console.log('Spawning Builder')
				    }
				}
			if(uCount < 7 && bCount >= 2 && hCount >= 5) {
				Game.spawns.HomeBase.createCreep([WORK, CARRY, MOVE], null, {role: 'upgrader'});
				if(Game.spawns.HomeBase.memory == 'debug'){
				        console.log('Spawning Upgrader')
				    }
				}
		}
		else
		{
			if(hCount < 5) {
				Game.spawns.HomeBase.createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], null, {role: 'harvester'});
				if(Game.spawns.HomeBase.memory == 'debug'){
				        console.log('Spawning Harvester')
				    }
				}
			if(bCount < 2 && hCount >= 5){
				Game.spawns.HomeBase.createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], null, {role: 'builder'});
				if(Game.spawns.HomeBase.memory == 'debug'){
				        console.log('Spawning Builder')
				    }
				}
			if(uCount < 7 && bCount >= 2 && hCount >= 5) {
				Game.spawns.HomeBase.createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], null, {role: 'upgrader'});
				if(Game.spawns.HomeBase.memory == 'debug'){
				        console.log('Spawning Upgrader')
				    }
				}
		}
	}
};

module.exports = Spawner;