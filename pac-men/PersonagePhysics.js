class PersonagePhysics {
    move(personage,world,deltaTime) {

        var res = this.calcChoques(personage.positionX, personage.positionY, personage.width, personage.height, world)
        let choqueScenerySuperiorEsquerdoX = res[0]
        let choqueScenerySuperiorDireitoX = res[1]
        let choqueScenerySuperiorCimaY = res[2]
        let choqueScenerySuperiorBaixoY = res[3]


        document.getElementById("alo").innerText = "superior esquerdo  X" +choqueScenerySuperiorEsquerdoX+
        "\n superior direito X"+ choqueScenerySuperiorDireitoX +
        "\n superior cima Y" + choqueScenerySuperiorCimaY +
        "\n superior baixo Y" + choqueScenerySuperiorBaixoY +
        "\ posicao x esquerdo do personagem" + personage.positionX



        switch(KeyBoardInput.state) {
            case "UP":    
                if (!choqueScenerySuperiorCimaY)  {
                    if (personage.positionY >= 0) {
                        personage.positionY -= personage.speed; 
                    }
                } else {
                    var resultChoque = this.calcChoques(personage.positionX, personage.positionY, personage.width, personage.height, world)
                    if (resultChoque[2]) {
                        personage.positionY += 4
                        KeyBoardInput.state = "NONE"
                    }
                }
                break;
            case "DOWN":
                if (!choqueScenerySuperiorBaixoY) {
                        if (personage.positionY < (World.canvas.height - world.personage.width)) {
                            personage.positionY += personage.speed;
                        }
                } 
                break;
            case "LEFT":
                if (!choqueScenerySuperiorEsquerdoX){                                         
                    if (personage.positionX > 0) {
                        personage.positionX -= personage.speed;
                    }
                }
                break;
            case "RIGHT":
                if (!choqueScenerySuperiorDireitoX){                                         
                    if (personage.positionX < (World.canvas.width - world.personage.width)) {
                        personage.positionX += personage.speed;
                    }
                }

                break;
        }
    }

    calcChoques(personagePositionX, personagePositionY, personageWidth, personageHeight, world){
        let personageColumn = 0
        let personageColumnDireita = 0
        let personageRow = 0
        let personageRowEmBaixo = 0

        personageColumn = Math.floor((personagePositionX )/world.scenery.width);
        personageColumnDireita = Math.floor((personagePositionX + personageWidth)/world.scenery.width);
        personageRow = Math.floor(personagePositionY /world.scenery.height);
        personageRowEmBaixo = Math.floor((personagePositionY + personageHeight)/world.scenery.height);


        if (personageColumn < 0) personageColumn = 0
        if (personageRow < 0) personageRow = 0

        let choqueScenerySuperiorEsquerdoX = world.scenery.grid[personageRow][personageColumn] == 0 ? true : false
        let choqueScenerySuperiorDireitoX = world.scenery.grid[personageRow][personageColumnDireita] == 0 ? true : false
        let choqueScenerySuperiorCimaY = world.scenery.grid[personageRow][personageColumn] == 0 ? true : false
        let choqueScenerySuperiorBaixoY = world.scenery.grid[personageRowEmBaixo][personageColumn] == 0 ? true : false

        return [choqueScenerySuperiorEsquerdoX, choqueScenerySuperiorDireitoX, choqueScenerySuperiorCimaY, choqueScenerySuperiorBaixoY]
    }


}