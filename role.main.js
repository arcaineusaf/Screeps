var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleSpawner = require('role.spawner');

module.exports.loop = function () {
    var hCount=0;
    var bCount=0;
    var uCount=0;
    

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
    roleSpawner.run(hCount,uCount,bCount);
}