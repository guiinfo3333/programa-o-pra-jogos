class World {
	static canvas;
	static canvasContext;
    static open = true;
	
	constructor() {
		this.frameRate = 43;
		this.timeStep = 1000/this.frameRate; 
		this.lastFrameTimeMs = 0;
		this.delta = 0;

		this.personagePhysics = new PersonagePhysics();
		this.vilaoPhysics = new VilaoPhysics();
	
		this.personage = new Personage(this.personagePhysics);
		this.vilao = new Personage(this.vilaoPhysics, "red");
		
		this.scenery = new Scenery();
		this.entities = [this.personage, this.scenery, this.vilao];
		
		
		World.canvas = document.getElementById('gameCanvas');
		World.canvasContext = World.canvas.getContext('2d');
	
		requestAnimationFrame(this.mainLoop.bind(this));
		window.addEventListener('keydown',KeyBoardInput.updateKeyBoardPos);
	}
	
	mainLoop(timeStamp) {  
        this.draw() 
		this.delta += timeStamp - this.lastFrameTimeMs;  
		this.lastFrameTimeMs = timeStamp;  
		
		while(this.delta >= this.timeStep) { 
			this.move(this.timeStep);
			this.delta -= this.timeStep;
		}	
		this.draw();
		requestAnimationFrame(this.mainLoop.bind(this));
	}

	move(deltaTime) {
		for(let i = 0; i<this.entities.length;i++)
			this.entities[i].move(this,deltaTime);
	}

	draw() {
		Utils.clearScreen();
		for(let i = 0; i<this.entities.length;i++)
			this.entities[i].draw();
	}

}