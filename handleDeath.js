var handleDeath = {

    run: function()
	    {
		    for(var name in Memory.creeps) {
			    if(!Game.creeps[name]) {
				    delete Memory.creeps[name];
				    console.log('[Factory:Worker]: Cleaning non-existing creep: ' + name);
			    }
		    }
	    }
};
module.exports = handleDeath;

