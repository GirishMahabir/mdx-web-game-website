class SINGLE_SHAPE {
    constructor(shape, context) {
        this.shape = shape
        this.context = context // context object from canvas.
        // x and y to define where the shape is on the grid.
        this.y = 0
        this.x = Math.floor(COLUMNS / 2) // to center the shape on the grid.
    }

    buildShape() {
        /*
            Function to render each shape falling on the grid.

            Returns: None
        */
        
        this.shape.map((row, i) => {
            row.map((cell, j) => {
                if (cell > 0) { // no empty squares.
                    // Render the shape on the grid.
                    // Get the color from the TETRIS_SHAPES_COLORS array.
                    this.context.fillStyle = TETRIS_SHAPES_COLORS[cell]
                    this.context.fillRect(this.x + j, this.y + i, 1, 1)
                }
            })
        })
    }
}