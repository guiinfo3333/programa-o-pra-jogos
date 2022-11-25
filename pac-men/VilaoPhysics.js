class VilaoPhysics {
    move(personage,world,deltaTime) {
        var res = this.calcChoques(personage.positionX, personage.positionY, personage.width, personage.height, world)
        let choqueScenerySuperiorEsquerdoX = res[0]
        let choqueScenerySuperiorDireitoX = res[1]
        let choqueScenerySuperiorCimaY = res[2]
        let choqueScenerySuperiorBaixoY = res[3]
        let choqueScenerySuperiorCimaYDireita = res[4]
        let choqueSceneryBaixoYDireitaX = res[5]


        document.getElementById("alo").innerText = "superior esquerdo  X" +choqueScenerySuperiorEsquerdoX+
        "\n superior direito X"+ choqueScenerySuperiorDireitoX +
        "\n superior cima Y" + choqueScenerySuperiorCimaY +
        "\n superior baixo Y" + choqueScenerySuperiorBaixoY +
        "\n posicao x esquerdo do personagem" + personage.positionX +
        "\n y na direita " + choqueScenerySuperiorCimaYDireita +
        "\n baixo y e direita X" +choqueSceneryBaixoYDireitaX

        switch(KeyBoardInputVilao.state) {
            case "UP":    
                if (!choqueScenerySuperiorCimaY && !choqueScenerySuperiorCimaYDireita)  {
                    if (personage.positionY >= 0) {
                        personage.positionY -= personage.speed; 
                    }
                } else {
                    var resultChoque = this.calcChoques(personage.positionX, personage.positionY, personage.width, personage.height, world)
                    if (resultChoque[2] || resultChoque[4]) {
                        personage.positionY += 5
                        KeyBoardInput.state = "NONE"
                    }
                }
                break;
            case "DOWN":
                if (!choqueScenerySuperiorBaixoY && !choqueSceneryBaixoYDireitaX) {
                        if (personage.positionY < (World.canvas.height - world.personage.width)) {
                            personage.positionY += personage.speed;
                        }
                } else {
                    var resultChoque = this.calcChoques(personage.positionX, personage.positionY, personage.width, personage.height, world)
                    if (resultChoque[3] || resultChoque[5]) {
                        personage.positionY -= 5
                        KeyBoardInput.state = "NONE"
                    }
                }
                break;
            case "LEFT":
                if (!choqueScenerySuperiorEsquerdoX && !choqueScenerySuperiorBaixoY){                                         
                    if (personage.positionX > 0) {
                        personage.positionX -= personage.speed;
                    } else {
                        KeyBoardInputVilao.state = "RIGHT"
                        personage.positionX += personage.speed;
                    }
                } else {
                    var resultChoque = this.calcChoques(personage.positionX, personage.positionY, personage.width, personage.height, world)
                    if (resultChoque[0] || resultChoque[3]) {
                        personage.positionX += 5
                        KeyBoardInput.state = "NONE"
                    }
                }
                break;
            case "RIGHT":
                if (!choqueScenerySuperiorDireitoX && !choqueSceneryBaixoYDireitaX){                                         
                    if (personage.positionX < (World.canvas.width - world.personage.width)) {
                        personage.positionX += personage.speed;
                    } else {
                        KeyBoardInputVilao.state = "LEFT"
                        personage.positionX -= personage.speed;
                    }
                } else {
                    var resultChoque = this.calcChoques(personage.positionX, personage.positionY, personage.width, personage.height, world)
                    if (resultChoque[1] || resultChoque[5]) {
                        personage.positionX -= 5
                        KeyBoardInput.state = "NONE"
                    }
                }

                break;
        }

        let verificandoChoqueNaDireita = ((world.personage.positionX + world.personage.width) < personage.positionX
        && world.personage.positionY < personage.positionY) ? true : false

        let verificandoChoqueEmCima = ((world.personage.positionX < personage.positionX) || 
            (world.personage.positionX +  world.personage.width) > personage.positionX + personage.width
            ) ? true : false

        let verificandoChoqueNaEsquerda = ((world.personage.positionX) > personage.positionX
        && (world.personage.positionY > personage.positionY + personage.height || 
            world.personage.positionY + world.personage.height < personage.positionY
            )
        )

        let verificandoChoqueEmBaixo = ((world.personage.positionX < personage.positionX ||
            world.personage.positionX + world.personage.width > personage.positionX + personage.width
            ))

        //verificando choque entre vilao e personagem
        if (verificandoChoqueNaDireita) {

        }
    }

    calcChoques(personagePositionX, personagePositionY, personageWidth, personageHeight, world){
        let personageColumn = 0
        let personageColumnDireita = 0
        let personageRow = 0
        let personageRowEmBaixo = 0
        let personageRowPlusWidth = 0

        personageColumn = Math.floor((personagePositionX )/world.scenery.width);
        personageColumnDireita = Math.floor((personagePositionX + personageWidth)/world.scenery.width);
        personageRow = Math.floor(personagePositionY /world.scenery.height);
        personageRowPlusWidth = Math.floor(personageRowPlusWidth /world.scenery.height);
        personageRowEmBaixo = Math.floor((personagePositionY + personageHeight)/world.scenery.height);


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