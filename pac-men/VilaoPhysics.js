class VilaoPhysics extends Subject {
    move(vilao,world,deltaTime) {
        var res = this.calcChoques(vilao.positionX, vilao.positionY, vilao.width, vilao.height, world)
        let choqueScenerySuperiorEsquerdoX = res[0]
        let choqueScenerySuperiorDireitoX = res[1]
        let choqueScenerySuperiorCimaY = res[2]
        let choqueScenerySuperiorBaixoY = res[3]
        let choqueScenerySuperiorCimaYDireita = res[4]
        let choqueSceneryBaixoYDireitaX = res[5]

        switch(KeyBoardInputVilao.state) {
            case "UP":    
                if (!choqueScenerySuperiorCimaY && !choqueScenerySuperiorCimaYDireita)  {
                    if (vilao.positionY >= 0) {
                        vilao.positionY -= vilao.speed; 
                    }
                } else {
                    var resultChoque = this.calcChoques(vilao.positionX, vilao.positionY, vilao.width, vilao.height, world)
                    if (resultChoque[2] || resultChoque[4]) {
                        vilao.positionY += 5
                        KeyBoardInput.state = "NONE"
                    }
                }
                break;
            case "DOWN":
                if (!choqueScenerySuperiorBaixoY && !choqueSceneryBaixoYDireitaX) {
                        if (vilao.positionY < (World.canvas.height - world.personage.width)) {
                            vilao.positionY += vilao.speed;
                        }
                } else {
                    var resultChoque = this.calcChoques(vilao.positionX, vilao.positionY, vilao.width, vilao.height, world)
                    if (resultChoque[3] || resultChoque[5]) {
                        vilao.positionY -= 5
                        KeyBoardInput.state = "NONE"
                    }
                }
                break;
            case "LEFT":
                if (!choqueScenerySuperiorEsquerdoX && !choqueScenerySuperiorBaixoY){                                         
                    if (vilao.positionX > 0) {
                        vilao.positionX -= vilao.speed;
                    } else {
                        KeyBoardInputVilao.state = "RIGHT"
                        vilao.positionX += vilao.speed;
                    }
                } else {
                    var resultChoque = this.calcChoques(vilao.positionX, vilao.positionY, vilao.width, vilao.height, world)
                    if (resultChoque[0] || resultChoque[3]) {
                        vilao.positionX += 5
                        KeyBoardInput.state = "NONE"
                    }
                }
                break;
            case "RIGHT":
                if (!choqueScenerySuperiorDireitoX && !choqueSceneryBaixoYDireitaX){                                         
                    if (vilao.positionX < (World.canvas.width - world.personage.width)) {
                        vilao.positionX += vilao.speed;
                    } else {
                        KeyBoardInputVilao.state = "LEFT"
                        vilao.positionX -= vilao.speed;
                    }
                } else {
                    var resultChoque = this.calcChoques(vilao.positionX, vilao.positionY, vilao.width, vilao.height, world)
                    if (resultChoque[1] || resultChoque[5]) {
                        vilao.positionX -= 5
                        KeyBoardInput.state = "NONE"
                    }
                }

                break;
        }

        if (world.personage.positionX < vilao.positionX + vilao.width && 
            world.personage.positionX + world.personage.width > vilao.positionX &&
            world.personage.positionY < vilao.positionY + vilao.height && 
            world.personage.positionY + world.personage.height > vilao.positionY
            ) {
                let endGame = new EventGeral("END-GAME")
                super.notify(endGame)
        } 

    }

    calcChoques(vilaoPositionX, vilaoPositionY, vilaoWidth, vilaoHeight, world){
        let personageColumn = 0
        let personageColumnDireita = 0
        let personageRow = 0
        let personageRowEmBaixo = 0
        let personageRowPlusWidth = 0

        personageColumn = Math.floor((vilaoPositionX)/world.scenery.width);
        personageColumnDireita = Math.floor((vilaoPositionX + vilaoWidth)/world.scenery.width);
        personageRow = Math.floor(vilaoPositionY / world.scenery.height);
        personageRowPlusWidth = Math.floor(personageRowPlusWidth / world.scenery.height);
        personageRowEmBaixo = Math.floor((vilaoPositionY + vilaoHeight)/world.scenery.height);


        if (personageColumn < 0) personageColumn = 0
        if (personageRow < 0) personageRow = 0

        let choqueScenerySuperiorEsquerdoX = world.scenery.grid[personageRow][personageColumn] == 0 ? true : false
        let choqueScenerySuperiorDireitoX = world.scenery.grid[personageRow][personageColumnDireita] == 0 ? true : false
        let choqueScenerySuperiorCimaY = world.scenery.grid[personageRow][personageColumn] == 0 ? true : false
        let choqueScenerySuperiorCimaYDireita = world.scenery.grid[personageRow][personageColumnDireita] == 0 ? true : false
        let choqueScenerySuperiorBaixoY = world.scenery.grid[personageRowEmBaixo][personageColumn] == 0 ? true : false
        let choqueScenerySuperiorBaixoYDireitaX = world.scenery.grid[personageRowEmBaixo][personageColumnDireita] == 0 ? true : false

        return [
            choqueScenerySuperiorEsquerdoX,
            choqueScenerySuperiorDireitoX,
            choqueScenerySuperiorCimaY,
            choqueScenerySuperiorBaixoY, 
            choqueScenerySuperiorCimaYDireita,
            choqueScenerySuperiorBaixoYDireitaX
        ]
    }
}