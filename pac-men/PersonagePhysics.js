class PersonagePhysics {
    move(personage,world,deltaTime) {

        //personageColision
        let personageColumn = Math.floor(personage.positionX/world.scenery.width);
		let personageRow = Math.floor(personage.positionY/world.scenery.height);

        let positionXObstaculo = personageColumn * 60
        let positionYObstaculo = personageRow * 60
        let verifyColision = false
        
       

        switch(KeyBoardInput.state) {
            case "UP":
                if (positionYObstaculo + 60 < personage.positionY
                    && positionXObstaculo + 60 < personage.positionX
                    
                    ) {
                    personage.positionY -= personage.speed;
                } else {
                    personage.positionY = personage.positionY
                }
                break;
            case "DOWN":
                if (personage.positionY <= (World.canvas.height - 45)) {
                    personage.positionY += personage.speed;
                }
                break;
            case "LEFT":
                if (personage.positionX >= 0) {
                    personage.positionX -= personage.speed;
                }
                break;
            case "RIGHT":
                if (personage.positionX <= (World.canvas.width - 48)) {
                    personage.positionX += personage.speed;
                }
                break;
        }

        document.getElementById("alo").innerText = positionYObstaculo + 60 + "\n" +personage.positionY
    }


}