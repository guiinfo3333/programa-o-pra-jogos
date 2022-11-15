class PersonagePhysics {
    move(personage,world,deltaTime) {

        let personageColumn = 0
        let personageRow = 0

        personageColumn = Math.floor((personage.positionX )/world.scenery.width);
        personageRow = Math.floor(personage.positionY/world.scenery.height);


        if (personageColumn < 0) personageColumn = 0
        if (personageRow < 0) personageRow = 0

        let choqueScenery = world.scenery.grid[personageRow][personageColumn] == 0 ? true : false

        //irmaozinho da direita
        let cenarioLeftX = (personageColumn + 1)  * (world.scenery.width)  


        //irmaozinho da esquerda
        let cenarioRightX = (personageColumn - 1)  * (world.scenery.width) + 60  
        
        //irmaozinho do meio
        let cenarioBottomY = (personageRow - 1)  * (world.scenery.height) + 60 

        let cenarioTopY = (personageRow + 1)  * (world.scenery.height)

        /*
            posicoes do personagem  
        */
        let personagePositionTopY = personage.positionY
        let personagePositionBottomY = personage.positionY + personage.height
        let personagePositionLeftX = personage.positionX
        let personagePositionRightX = (personage.positionX) + world.personage.width

        switch(KeyBoardInput.state) {
            case "UP":    
                if ((parseInt(world.scenery.grid[personageRow - 1 == -1 ? 0 : personageRow - 1][personageColumn]) == parseInt(0)
                    && parseFloat(personagePositionTopY)  <= parseFloat(cenarioBottomY) 
                    || (parseInt(world.scenery.grid[personageRow - 1 == -1 ? 0 : personageRow - 1][personageColumn + 1]) == parseInt(0) &&
                        parseFloat(personagePositionRightX)  >= parseFloat(cenarioLeftX))))  {
                        
                } else {
                    if (personage.positionY >= 0) {
                        personage.positionY -= personage.speed;
                    }
                }
                break;
            case "DOWN":
                if ((parseInt(world.scenery.grid[personageRow + 1][personageColumn]) == parseInt(0)
                    && parseFloat(personagePositionBottomY)  >= parseFloat(cenarioTopY)
                    || (parseInt(world.scenery.grid[personageRow + 1][personageColumn + 1]) == parseInt(0) &&
                    parseFloat(personagePositionRightX)  >= parseFloat(cenarioLeftX)
                    ))) {
                        
                } else {
                    if (personage.positionY < (World.canvas.height - world.personage.width)) {
                        personage.positionY += personage.speed;
                    }
                }
                break;
            case "LEFT":
                if (personage.positionX > 0) {
                    personage.positionX -= personage.speed;
                }
                break;
            case "RIGHT":
                if (personage.positionX < (World.canvas.width - world.personage.width)) {
                    personage.positionX += personage.speed;
                }
                break;
        }
 
     
    

        // var text = "posicao esquerda :\n" + "1"+ "2"
        // var text = "posicao topo :\n" + "1"+ "2"
        // var text = "posicao direita :\n" + "1"+ "2"
        // var text = "posicao abaixo :\n" + "1"+ "2"
   
      
    }


}