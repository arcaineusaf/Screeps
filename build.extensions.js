

var buildExtensions = {
   
    /** @param {Creep} creep **/
    run: function(creep) {
	Game.rooms.W8N3.createConstructionSite(((Game.Spawns.HomeBase.pos.x)+2),((Game.spawns.HomeBase.pos.y)),STRUCTURE_EXTENSION)
	
};

module.exports = buildExtensions;