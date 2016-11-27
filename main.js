var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var Spawner = require('spawner');
var handleDeath = require('handleDeath');

module.exports.loop = function () {
    var hCount=0;
    var bCount=0;
    var uCount=0;
    if(Game.spawns.HomeBase.memory == 'debug'){
        console.log(Game.cpu.getUsed())
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
            hCount+=1;
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
            uCount+=1
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
            bCount+=1
        }
    }
    Spawner.run(hCount,uCount,bCount);
    handleDeath.run()
    
}