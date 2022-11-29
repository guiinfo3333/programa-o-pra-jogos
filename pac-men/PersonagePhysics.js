class PersonagePhysics extends Subject {
    move(personage,world,deltaTime) {
        var res = this.calcChoquesScenery(personage.positionX, personage.positionY, personage.width, personage.height, world)
        let choqueScenerySuperiorEsquerdoX = res[0]
        let choqueScenerySuperiorDireitoX = res[1]
        let choqueScenerySuperiorCimaY = res[2]
        let choqueScenerySuperiorBaixoY = res[3]
        let choqueScenerySuperiorCimaYDireita = res[4]
        let choqueSceneryBaixoYDireitaX = res[5]

        var resFruit = this.calcChoquesFruits(personage.positionX, personage.positionY, personage.width, personage.height, world)
        let choqueScenerySuperiorEsquerdoXFruit = resFruit[0]
        let choqueScenerySuperiorDireitoXFruit = resFruit[1]
        let choqueScenerySuperiorCimaYFruit = resFruit[2]
        let choqueScenerySuperiorBaixoYFruit = resFruit[3]
        let choqueScenerySuperiorCimaYDireitaFruit = resFruit[4]
        let choqueSceneryBaixoYDireitaXFruit = resFruit[5]

        switch(KeyBoardInput.state) {
            case "UP":    
                if (!choqueScenerySuperiorCimaY && !choqueScenerySuperiorCimaYDireita)  {
                    if (personage.positionY >= 0) {
                        personage.positionY -= personage.speed; 
                    }
                } else {
                    var resultChoque = this.calcChoquesScenery(personage.positionX, personage.positionY, personage.width, personage.height, world)
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
                    var resultChoque = this.calcChoquesScenery(personage.positionX, personage.positionY, personage.width, personage.height, world)
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
                    }
                } else {
                    var resultChoque = this.calcChoquesScenery(personage.positionX, personage.positionY, personage.width, personage.height, world)
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
                    }
                } else {
                    var resultChoque = this.calcChoquesScenery(personage.positionX, personage.positionY, personage.width, personage.height, world)
                    if (resultChoque[1] || resultChoque[5]) {
                        personage.positionX -= 5
                        KeyBoardInput.state = "NONE"
                    }
                }

                break;
        }

        switch(KeyBoardInput.state) {
            case "UP":    
                if (choqueScenerySuperiorCimaYFruit.choque || choqueScenerySuperiorCimaYDireitaFruit.choque)  {
                    super.notify(new EventGeral(
                        "DESACTIVE-SCENENARY", 
                        {
                            "columnn": choqueScenerySuperiorCimaYFruit.choque ? choqueScenerySuperiorCimaYFruit.personageColumn : choqueScenerySuperiorCimaYDireitaFruit.personageColumn, 
                            "row" : choqueScenerySuperiorCimaYFruit.choque ? choqueScenerySuperiorCimaYFruit.personageRow : choqueScenerySuperiorCimaYDireitaFruit.personageRow
                         }
                    ))
                }
                break;
            case "DOWN":
                if (choqueScenerySuperiorBaixoYFruit.choque || choqueSceneryBaixoYDireitaXFruit.choque) {
                    super.notify(new EventGeral(
                        "DESACTIVE-SCENENARY", 
                        {
                            "columnn": choqueScenerySuperiorBaixoYFruit.choque ? choqueScenerySuperiorBaixoYFruit.personageColumn : choqueSceneryBaixoYDireitaXFruit.personageColumn, 
                            "row" : choqueScenerySuperiorBaixoYFruit.choque ? choqueScenerySuperiorBaixoYFruit.personageRow : choqueSceneryBaixoYDireitaXFruit.personageRow
                         }
                    ))
                } 
            case "LEFT":
                if (choqueScenerySuperiorEsquerdoXFruit.choque || choqueScenerySuperiorBaixoYFruit.choque){ 
                    super.notify(new EventGeral(
                        "DESACTIVE-SCENENARY", 
                        {
                            "columnn": choqueScenerySuperiorEsquerdoXFruit.choque ? choqueScenerySuperiorEsquerdoXFruit.personageColumn : choqueScenerySuperiorBaixoYFruit.personageColumn, 
                            "row" : choqueScenerySuperiorEsquerdoXFruit.choque ? choqueScenerySuperiorEsquerdoXFruit.personageRow : choqueScenerySuperiorBaixoYFruit.personageRow
                         }
                    ))
                } 
                break;
            case "RIGHT":
                if (choqueScenerySuperiorDireitoXFruit.choque || choqueSceneryBaixoYDireitaXFruit.choque){   
                    super.notify(new EventGeral(
                        "DESACTIVE-SCENENARY", 
                        {
                            "columnn": choqueScenerySuperiorDireitoXFruit.choque ? choqueScenerySuperiorDireitoXFruit.personageColumn : choqueScenerySuperiorDireitoXFruit.personageColumn, 
                            "row" : choqueScenerySuperiorDireitoXFruit.choque ? choqueScenerySuperiorDireitoXFruit.personageRow : choqueSceneryBaixoYDireitaXFruit.personageRow
                         }
                    ))                                      
                }
                break;
        }
    }

    calcChoquesScenery(personagePositionX, personagePositionY, personageWidth, personageHeight, world){
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

        if (personageColumn >= world.scenery.columns - 1) personageColumn =  world.scenery.columns - 1
        if (personageRow >= world.scenery.rows - 1) personageRow = world.scenery.rows  - 1
        if (personageColumnDireita >= world.scenery.columns - 1) personageColumnDireita =  world.scenery.columns - 1
        if (personageRowPlusWidth >=  world.scenery.rows - 1) personageRowPlusWidth = world.scenery.rows - 1
        if (personageRowEmBaixo >=  world.scenery.rows - 1) personageRowEmBaixo = world.scenery.rows - 1
        if (personageColumn <= 0) personageColumn = 0
        if (personageRow <= 0) personageRow = 0
        if (personageColumnDireita <= 0) personageColumnDireita = 0
        if (personageRowPlusWidth <= 0) personageRowPlusWidth = 0
        if (personageRowEmBaixo <= 0) personageRowEmBaixo = 0

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

    calcChoquesFruits(personagePositionX, personagePositionY, personageWidth, personageHeight, world){
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


        if (personageColumn >= world.scenery.columns - 1) personageColumn =  world.scenery.columns - 1
        if (personageRow >= world.scenery.rows - 1) personageRow = world.scenery.rows  - 1
        if (personageColumnDireita >= world.scenery.columns - 1) personageColumnDireita =  world.scenery.columns - 1
        if (personageRowPlusWidth >=  world.scenery.rows - 1) personageRowPlusWidth = world.scenery.rows - 1
        if (personageRowEmBaixo >=  world.scenery.rows - 1) personageRowEmBaixo = world.scenery.rows - 1
        if (personageColumn <= 0) personageColumn = 0
        if (personageRow <= 0) personageRow = 0
        if (personageColumnDireita <= 0) personageColumnDireita = 0
        if (personageRowPlusWidth <= 0) personageRowPlusWidth = 0
        if (personageRowEmBaixo <= 0) personageRowEmBaixo = 0

        let choqueScenerySuperiorEsquerdoX = world.scenery.grid[personageRow][personageColumn] == 2 ? true : false
        let choqueScenerySuperiorDireitoX = world.scenery.grid[personageRow][personageColumnDireita] == 2 ? true : false
        let choqueScenerySuperiorCimaY = world.scenery.grid[personageRow][personageColumn] == 2 ? true : false
        let choqueScenerySuperiorCimaYDireita = world.scenery.grid[personageRow][personageColumnDireita] == 2 ? true : false
        let choqueScenerySuperiorBaixoY = world.scenery.grid[personageRowEmBaixo][personageColumn] == 2 ? true : false
        let choqueScenerySuperiorBaixoYDireitaX = world.scenery.grid[personageRowEmBaixo][personageColumnDireita] == 2 ? true : false

        document.getElementById("alo").innerText = choqueScenerySuperiorEsquerdoX

        return [
            new AuxChoque("superior_esquerdo_x", choqueScenerySuperiorEsquerdoX, personageRow, personageColumn),
            new AuxChoque("superior_direito_x", choqueScenerySuperiorDireitoX, personageRow, personageColumnDireita),
            new AuxChoque("superior_cima_y", choqueScenerySuperiorCimaY, personageRow, personageColumn),
            new AuxChoque("superior_baixo_y", choqueScenerySuperiorBaixoY, personageRowEmBaixo, personageColumn),
            new AuxChoque("superior_cima_y_direita", choqueScenerySuperiorCimaYDireita, personageRow, personageColumnDireita),
            new AuxChoque("superior_baixo_y_direita", choqueScenerySuperiorBaixoYDireitaX, personageRowEmBaixo, personageColumnDireita),
        ]
    }
}


class AuxChoque {
    constructor(tipo_choque, choque, personageRow, personageColumn){
        this.tipo_choque = tipo_choque
        this.choque = choque
        this.personageRow = personageRow
        this.personageColumn = personageColumn
    }
}