class Utils {

  static colorRect(topLeftX, topLeftY, width, height, fillColor) {
    World.canvasContext.beginPath()
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.fillRect(topLeftX, topLeftY, width, height);
    World.canvasContext.closePath()
	}
    

   static colorArc(positionX, positionY, raio,  anguloInitial, anguloFinal, color){
        World.canvasContext.beginPath()
        World.canvasContext.arc(positionX, positionY, raio, anguloInitial ,anguloFinal)
        World.canvasContext.fillStyle=color
        World.canvasContext.fill()
        World.canvasContext.closePath()
  }

  static clearScreen(color = 'black') {
		this.colorRect(0,0,World.canvas.width, World.canvas.height,color);
	}

  static colorText(){
    World.canvasContext.beginPath()
    World.canvasContext.font = '50px Arial';
    World.canvasContext.fill ='blue';
    World.canvasContext.fillText("Olá, mundo!", 300, 200);
    World.canvasContext.closePath()
  }
}