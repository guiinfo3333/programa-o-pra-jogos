class KeyBoardInput {
   static state = "DOWN"
	
	static updateKeyBoardPos(evt) {
        switch(evt.key) {
            case "ArrowUp":
                KeyBoardInput.state = "UP"
                break;
            case "ArrowDown":
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

class KeyBoardInputVilao {
    static state = "RIGHT"
     static updateKeyBoardPos(evt) {
         switch(evt.key) {
             case "ArrowUp":
                 KeyBoardInput.state = "UP"
                 break;
             case "ArrowDown":
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