// Defining the speed at which the shapes will be going down.
const DROP_SPEED = 1000
// Defining the Block/Shape Width.
const TETRIS_SHAPES_WIDTH = 50
// Defining the ROWS and COLUMNS for the game.
const ROWS = 16
const COLUMNS = 14
// Defining the Score gain for each line break.
const SCORE_GAIN = 10

// Defining an array of the shapes that will be used in the game.
// 0's are empty spaces and the numbers are the filled spaces with the color.
const TETRIS_SHAPES = [
    [],
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 2],
        [2, 2, 2],
        [0, 0, 0],
    ],
    [
        [3, 0, 0],
        [3, 3, 3],
        [0, 0, 0],
    ],
    [
        [0, 4, 4],
        [4, 4, 0],
        [0, 0, 0],
    ],
    [
        [5, 5, 0],
        [0, 5, 5],
        [0, 0, 0],
    ],
    [
        [0, 6, 0],
        [6, 6, 6],
        [0, 0, 0],
    ],
    [
        [7, 7],
        [7, 7],
    ],

]

// Defining the colors for the tetris shapes.
const TETRIS_SHAPES_COLORS = [
    '#ddd', // Grey - Empty
    '#ff1100', // Red 
    '#00ff00', // Green
    '#ff00c8', // Pink
    '#00ffff', // Cyan
    '#ffcc00', // Yellow
    '#0000ff', // Blue
    '#ff8800', // Orange
]