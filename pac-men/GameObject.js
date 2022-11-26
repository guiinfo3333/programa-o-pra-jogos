class GameObject extends Observer{
	constructor(physics = null) {
		super()
		this.physics = physics;
	}
	
	move(world,deltaTime) {
		if(this.physics)
			this.physics.move(this,world,deltaTime);
	}
}