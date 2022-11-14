class GameObject {
	constructor(physics = null) {
		this.physics = physics;
	}
	
	move(world,deltaTime) {
		if(this.physics)
			this.physics.move(this,world,deltaTime);
	}
}