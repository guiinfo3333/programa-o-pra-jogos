class Personage extends GameObject{
    constructor(physics = null, color = "yellow", name = "", positionX = 1, positionY = 180, speed = 5, closed = 0) {
        super(physics)
        this.name = name
        this.positionX = positionX
        this.positionY = positionY
        this.speed = speed
        this.closed = closed
        this.physics = physics
        this.width = 40
        this.height = 40
        this.color = color
	}

    getPositionX(){
        return this.positionX
    }


    getPositionY(){
        return this.positionY
    }

    draw(){
        // var img = new Image();
        // var img1 = new Image();
        // img1.src = "assets/fechado.png"
        
        // switch(KeyBoardInput.state) {
        //     case "UP":
        //         img.src= 'assets/cima.png';
        //         break;
        //     case "DOWN":
        //         img.src= 'assets/baixo.png';    
        //         break;
        //     case "LEFT":
        //         img.src= 'assets/esqueda.png';
        //         break;
        //     case "RIGHT":
        //         img.src = 'assets/personagem.png';
        //         break;
        // }

        Utils.colorRect(this.positionX, this.positionY, this.width, this.height, this.color);

        // if (this.closed > 10) {
        //     World.canvasContext.colorRect(this.positionX, this.positionY, this.width, this.height, "yellow");
        //     this.closed = 0
        // } else {
        //     World.canvasContext.drawImage(img, this.positionX, this.positionY, this.width, this.height);
        //     this.closed += 1
        // }

    }
}