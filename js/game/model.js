class Model {
    constructor(context) {
        this.context = context // context to be grabbed from canvas.
        // Single falling shape at any point.
        this.fallingShape = null // Shapes
        this.grid = this.initialGrid() // 2D array of 0s for empty cells.
    }

    initialGrid() {
        /*
            Function to create and return a 2D array of 0s.
            Used to initialize the initial state of the grid.

            Returns: Array
        */
        let initial_grid = []
        for (var i = 0; i < ROWS; i++) {
            initial_grid.push([]) // add a new empty array of columns.
            for (var j = 0; j < COLUMNS; j++) {
                // add 0's to fill the row.
                initial_grid[initial_grid.length - 1].push(0)
            }
        }
        return initial_grid
    }

    collisionDetection(x, y, candidate = null) {
        /* 
            Function to check if the shaped are colliding with other shapes
            or the walls.

            @param x: x coordinate of the shape
            @param y: y coordinate of the shape
            @param candidate: shape to be checked for collisionDetection

            Returns: Boolean
        */
        // shape to be checked for collision
        const shape = candidate || this.fallingShape.shape
        const n = shape.length // number of rows
        for (let i = 0; i < n; i++) { // iterate over shape rows
            for (let j = 0; j < n; j++) { // iterate over shape columns
                if (shape[i][j] > 0) { // if cell is not empty
                    let p = x + j // x coordinate of the cell
                    let q = y + i // y coordinate of the cell
                    if (p >= 0 && p < COLUMNS && q < ROWS) { // if cell is within the grid
                        // in bounds of the grid
                        if (this.grid[q][p] > 0) { // if cell is not empty
                            return true // collision detected
                        }
                    } else {
                        // if cell is out of bounds of the grid, 
                        // collision detected with wall
                        return true
                    }
                }
            }
        }
        // no collision detected
        return false
    }

    buildGameplay() {
        /*
            Function to render the grid and the falling shape.
            
            Returns: None
        */
        for (let i = 0; i < this.grid.length; i++) { // iterate over rows
            for (let j = 0; j < this.grid[i].length; j++) { // iterate over columns
                let cell = this.grid[i][j] // cell value
                this.context.fillStyle = TETRIS_SHAPES_COLORS[cell] // color of the cell
                this.context.fillRect(j, i, 1, 1) // draw the colored cell
            }
        }
        // draw the falling shape if it exists!
        if (this.fallingShape !== null) {
            this.fallingShape.buildShape()
        }
    }


    downwardMovement() {
        // If no shape is falling, create a new shape.
        if (this.fallingShape === null) {
            this.buildGameplay()
            return
            // else move the shape down by 1 unit, check for collision.
        } else if (this.collisionDetection(this.fallingShape.x, this.fallingShape.y + 1)) {
            // if collision detected, add the shape to the grid, stop and create a new shape.
            const shape = this.fallingShape.shape
            const x = this.fallingShape.x
            const y = this.fallingShape.y
            // add the shape to the grid
            shape.map((row, i) => {
                row.map((cell, j) => {
                    let p = x + j
                    let q = y + i
                    // if cell is not empty and within the grid
                    if (p >= 0 && p < COLUMNS && q < ROWS && cell > 0) {
                        // add the cell to the grid
                        this.grid[q][p] = shape[i][j]
                    }
                })
            })

            // if the shape is at the top of the grid, game over!
            if (this.fallingShape.y === 0) {
                console.log("Game Over!, Refresh to play again.")
                this.grid = this.initialGrid()
            }
            this.fallingShape = null
        } else {
            // if no collision detected, moveShape the shape down by 1 unit.
            this.fallingShape.y += 1
        }
        this.buildGameplay()
    }

    moveShape(direction) {
        /* 
            Function to move the shape left or right.

            @param direction: direction to move the shape
        
            Returns: None
        */

        if (this.fallingShape === null) {
            return
        }

        let x = this.fallingShape.x
        let y = this.fallingShape.y
        if (direction === "right") {
            // move right, check for collision first.
            if (!this.collisionDetection(x + 1, y)) {
                this.fallingShape.x += 1
            }
        }

        if (direction === "left") {
            // move left, check for collision first.
            if (!this.collisionDetection(x - 1, y)) {
                this.fallingShape.x -= 1
            }
        }
        // render the grid and the shape.
        this.buildGameplay()
    }

    rotateShape() {
        /* 
            Function to rotate the shape using transpose and reverse.
        
            Returns: None
        */
        // Check if a shape is falling.
        if (this.fallingShape !== null) {
            let shape = [...this.fallingShape.shape.map((row) => [...row])]
            // transpose of shape array
            for (let y = 0; y < shape.length; ++y) { // iterate over rows
                for (let x = 0; x < y; ++x) { // iterate over columns
                    [shape[x][y], shape[y][x]] =
                        [shape[y][x], shape[x][y]] // swap the values of the cells.
                }
            }
            shape.forEach((row => row.reverse())) // reverse the order of the rows.
            if (!this.collisionDetection(this.fallingShape.x, this.fallingShape.y, shape)) {
                this.fallingShape.shape = shape
            }
        }
        this.buildGameplay()
    }
}