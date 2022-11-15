class PersonagePhysics {
    move(personage,world,deltaTime) {

        let personageColumn = 0.0
        let personageRow = 0.0

        personageColumn = Math.floor((personage.positionX )/world.scenery.width);
        personageRow = Math.floor(personage.positionY/world.scenery.height);


        //personageColision

        /*
        dividir a posicao do personagem pela sua respectiva orientação (eixo x ou eixo y)
        nos dá uma posicao exata de em qual linha ou coluna ele está, porém ele está se
        orientando pelo canto superior esquerdo, o quer dizer se ele, o personagem, vinher
        da direita, mesmo metade dele já estando na coluna onde se tem um cenário, pelo fato
        de está orientado pelo canto superior esquerdo, esse canto ainda não terá passado para
        a outra coluna, fazendo com que não haja choque preciso, assim é preciso verificar o 
        último movimento, que se for right, deverá-se somar 60 a posicao x para que ele ele se
        oriente agora pelo ponto superior direito e não mais pelo ponto superior esquerdo, e se
        ele vinher da esquerda, deixa normal
        */

        if (personageColumn < 0) personageColumn = 0
        if (personageRow < 0) personageRow = 0

        // let positionXObstaculo = personageColumn * 60
        // let positionYObstaculo = personageRow * 60
        // let verifyColision = false
        
        let choqueScenery = world.scenery.grid[personageRow][personageColumn] == 0 ? true : false
        // console.log(world.scenery.grid[personageRow][personageColumn])


        /*
                world.scenery.grid[personageRow - 1][personageColumn] == 0
                    && personage.positionY <= leftTopY

                    verifica se na linha anterior na mesma coluna  a posicao y do personagem ,que 
                    se refere a posicao esquerda de x, é menor que a posicao do obstaculo de y, só
                    que inferior

       */


        //irmaozinho da direita
        let cenarioLeftX = (personageColumn + 1)  * (world.scenery.width)  


        //irmaozinho da esquerda
        let cenarioRightX = (personageColumn - 1)  * (world.scenery.width) + 60  
        
        //irmaozinho do meio
        let cenarioBottomY = (personageRow - 1)  * (world.scenery.height) + 60 

        /*
            posicoes do personagem  
        */
        let personagePositionTopY = personage.positionY
        let personagePositionBottomY = personage.positionY + 60
        let personagePositionLeftX = personage.positionX
        let personagePositionRightX = (personage.positionX) + world.personage.width

            document.getElementById("alo").innerText = " \n personage right: "+
            personagePositionRightX +"\n cenario Left: "+cenarioLeftX +
           "\ntem cenario em cima :"+ world.scenery.grid[personageRow - 1][personageColumn] +
           "\ntem cenario em cima na direita :"+ world.scenery.grid[personageRow - 1][personageColumn + 1] 

        switch(KeyBoardInput.state) {
            case "UP":    
                if ((parseInt(world.scenery.grid[personageRow - 1][personageColumn]) == parseInt(0)
                    && parseFloat(personagePositionTopY)  <= parseFloat(cenarioBottomY) 
                    || (parseInt(world.scenery.grid[personageRow - 1][personageColumn + 1]) == parseInt(0) &&
                        parseFloat(personagePositionRightX)  >= parseFloat(cenarioLeftX))))  {
                        
                } else {
                    if (personage.positionY >= 0) {
                        personage.positionY -= personage.speed;
                    }
                }
                break;
            case "DOWN":
                if (personage.positionY < (World.canvas.height - 60)) {
                    personage.positionY += personage.speed;
                }
                break;
            case "LEFT":
                if (personage.positionX > 0) {
                    personage.positionX -= personage.speed;
                }
                break;
            case "RIGHT":
                if (personage.positionX < (World.canvas.width - 60)) {
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