class Personage {
    constructor(name, positionX = 1, positionY = 100, speed = 2, closed = 0) {
		this.name = name
        this.positionX = positionX
        this.positionY = positionY
        this.speed = speed
        this.closed = closed
	}

    getPositionX(){
        return this.positionX
    }


    getPositionY(){
        return this.positionY
    }

    draw(){
        console.log(this.closed)
        var img = new Image();
        var img1 = new Image();
        img1.src = "assets/fechado.png"

        switch(KeyBoardInput.state) {
            case "UP":
                img.src= 'assets/cima.png';
                break;
            case "DOWN":
                img.src= 'assets/baixo.png';    
                break;
            case "LEFT":
                img.src= 'assets/esqueda.png';
                break;
            case "RIGHT":
                img.src = 'assets/personagem.png';
                break;
        }

        if (this.closed > 10) {
            World.canvasContext.drawImage(img1, this.positionX, this.positionY, 45, 48);
            this.closed = 0
        } else {
            World.canvasContext.drawImage(img, this.positionX, this.positionY, 45, 48);
            this.closed += 1
        }

    }

 
    move(){
        switch(KeyBoardInput.state) {
            case "UP":
                this.positionY -= this.speed;
                break;
            case "DOWN":
                this.positionY += this.speed;
                break;
            case "LEFT":
                this.positionX -= this.speed;
                break;
            case "RIGHT":
                if (this.positionX <= (World.canvas.width - 48)) {
                    this.positionX += this.speed;
                }
                break;
        }

    }
}