class Scenery extends Observer{
    constructor(columns = 17, rows = 9) {
        super()
        this.columns = columns
        this.rows = rows
        this.width = 60
        this.height = 60
        this.grid = []
        this.mountedScenery()
        this.mountedFruits()
        this.endGame = false
    }

    mountedScenery(){
        for (var i = 0; i < this.rows; i++) {
            this.grid.push([])
            for (var j = 0; j < this.columns; j++) {
                if ((j % 2) == 0 && (i % 2) == 0) this.grid[i].push(0) //cenary
                else if(((j % 3 && i % 3))) this.grid[i].push(0) 
                else this.grid[i].push(1) // black
            }
        }
    }

    mountedFruits(){
        this.grid[0][3] = 2
        this.grid[0][9] = 2
        this.grid[0][15] = 2
        this.grid[8][3] = 2
    }

    move(world, deltaTime){

    }

    draw(){
        if (this.endGame) Utils.drawerEndGame()
        else 
            for (var i = 0; i < this.grid.length; i++) {
                for (var j = 0; j < this.grid[i].length; j++) {
                    if (this.grid[i][j] == 0) {
                        Utils.colorRect(this.width*j,this.height * i, this.width , this.height ,"blue");
                    } else if(this.grid[i][j] == 2)
                        Utils.colorRect(this.width*j,this.height * i, this.width , this.height ,"green");
                }
            }
    }

    onNotify(ev) {
		switch(ev) {
			case Utils.EVENTS.END_GAME:
                this.endGame = true;
				break;
			default:
				break;
		}
	}
}