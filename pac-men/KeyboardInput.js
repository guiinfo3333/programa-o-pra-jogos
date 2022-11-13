class KeyBoardInput {
   static state = "DOWN"
	
	static updateKeyBoardPos(evt) {
        switch(evt.key) {
            case "ArrowUp":
                KeyBoardInput.state = "UP"
                break;
            case "ArrowDown":
                console.log("entrou")
                KeyBoardInput.state = "DOWN"
                break;
            case "ArrowRight":
                KeyBoardInput.state = "RIGHT"
                break;
            case "ArrowLeft":
                KeyBoardInput.state = "LEFT"
                break;
            
        }
	}
}