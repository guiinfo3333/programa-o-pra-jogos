class Scenery{
    constructor(columns = 17, rows = 9) {
        this.columns = columns
        this.rows = rows
        this.width = 60
        this.height = 60
        this.grid = []
        this.mountedScenery()
        this.mountedFruits()
    }

    mountedScenery(){
        for (var i = 0; i < this.rows; i++) {
            this.grid.push([])
            for (var j = 0; j < this.columns; j++) {
                if ((j % 2) == 0 && (i % 2) == 0) this.grid[i].push(0) //cenary
                else this.grid[i].push(1) // black
            }
        }
    }

    mountedFruits(){
        this.grid[0][1] = 2
    }

    move(world, deltaTime){

    }

    draw(){
        console.log(this.grid)
        for (var i = 0; i < this.grid.length; i++) {
            for (var j = 0; j < this.grid[i].length; j++) {
                if (this.grid[i][j] == 0) {
                    Utils.colorRect(this.width*j,this.height * i, this.width , this.height ,"blue");
                } else if(this.grid[i][j] == 2)
                     Utils.colorRect(this.width*j,this.height * i, this.width , this.height ,"green");
            }
        }
    }
}