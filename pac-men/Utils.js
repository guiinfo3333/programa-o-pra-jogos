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

  static drawerEndGame(){
    World.canvasContext.beginPath()
    World.canvasContext.font = '50px Arial';
    this.colorRect(0,0,World.canvas.width, World.canvas.height,'black'); //clear screen
    World.canvasContext.fillText("Fim do Jogo", 300, 100);
    this.colorRect(World.canvas.width/2,0 + 30,0, 0,'white');
    World.canvasContext.fillText("Fim de Jogo !", World.canvas.width/2 - 120, 100);
    World.canvasContext.fillText("Você perdeu !", World.canvas.width/2 - 120, 200);
    World.canvasContext.closePath()
  }

  static winnerGame(){
    World.canvasContext.beginPath()
    World.canvasContext.font = '50px Arial';
    this.colorRect(0,0,World.canvas.width, World.canvas.height,'black'); //clear screen
    World.canvasContext.fillText("Fim do Jogo", 300, 100);
    this.colorRect(World.canvas.width/2,0 + 30,0, 0,'white');
    World.canvasContext.fillText("Fim de Jogo !", World.canvas.width/2 - 120, 100);
    World.canvasContext.fillText("Você Ganhou !", World.canvas.width/2 - 120, 200);
    World.canvasContext.closePath()
  }
}

class EventGeral {
  constructor(nameEvent, objectEvent){
    this.nameEvent = nameEvent
    this.objectEvent = objectEvent
  }
}