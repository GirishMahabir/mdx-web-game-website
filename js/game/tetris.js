let canvas = document.getElementById("game-area") // get the canvas element
let score_value = document.getElementById("score") // get the score_value element
let level_value = document.getElementById("level") // get the level_value element
let lines_value = document.getElementById("lines") // get the lines_value element
let context = canvas.getContext("2d") // get the context of the canvas
context.scale(TETRIS_SHAPES_WIDTH, TETRIS_SHAPES_WIDTH) // scale the canvas
let model = new Model(context) // create a new model
// Defining the speed at which the shapes will be going down.
let drop_speed = 1000
let score = 0 // the score of the player
let level = 1;
let lines = 0; // initialize the line break counter.
score_value.innerHTML = score;
level_value.innerHTML = level;
lines_value.innerHTML = lines;

// Access id, user-indicator and update to logged in username.
let user_indicator = document.getElementById("user-indicator");
// Do check if local storage is empty and if so, play as guest.
if (localStorage.length === 0) {
    user_indicator.innerHTML = "Hello, Guest";
} else {
    // Loop keys and check which user is logged in.
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage.getItem(key));
        if (value.logged_in) {
            user_indicator.innerHTML = `Hello, ${value.username}`;
        }
    }
}


// Function to start the game.
let startGame = () => {
    setInterval(() => {
        newGameplay() // call the new game state function
    }, drop_speed);
}


let updateLocalStorage = (property) => {
    // Loop keys and check which user is logged in.
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage.getItem(key));
        if ((value.logged_in || property === "score") && score > value.score) {
            value.score = score;
        }
        if ((value.logged_in || property === "level") && level > value.level) {
            value.level = level;
        }
        if ((value.logged_in || property === "lines") && lines > value.lines) {
            value.lines = lines;
        }
        localStorage.setItem(key, JSON.stringify(value));

    }
}
let newGameplay = () => {
    lineCheck() // check for new lines full.
    if (model.fallingShape === null) {
        // Randomly select a shape.
        const rand = Math.round(Math.random() * 6) + 1
        // Create a new shape.
        const newPiece = new SINGLE_SHAPE(TETRIS_SHAPES[rand], context)
        model.fallingShape = newPiece
        // 
        model.downwardMovement()
    } else {
        // if already a shape is falling, move it down.
        model.downwardMovement()
    }
}

const lineCheck = () => {
    /*
        This function checks for full lines in the grid and removes them.

        Returns: None
    */
    const filled = (row) => {
        /*
            Checks if a row is full.

            @param row: The row to check.

            Returns: True if the row is full, false otherwise.
        */
        for (let x of row) {
            if (x === 0) {
                return false
            }
        }
        return true
    }

    // iterate over the rows and check if they are full.
    for (let i = 0; i < model.grid.length; i++) {
        if (filled(model.grid[i])) {
            score += SCORE_GAIN
            lines += 1
            model.grid.splice(i, 1)
            model.grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        }
    }
    // update the score_value with the new score.
    score_value.innerHTML = score // update the score_value with the new score.
    updateLocalStorage("score");
    lines_value.innerHTML = lines;
    updateLocalStorage("lines");
}

// Start event listener to detect Start button clicked and start game.
document.getElementById("start-button").addEventListener("click", () => {
    startGame();
})

// Start event listener to deetect reset button clicked
// and to reset the game by reloading the canvas.
document.getElementById("reset-button").addEventListener("click", () => {
    location.reload();
})

// Start event listener for key presses.
document.addEventListener("keydown", (e) => {
    e.preventDefault()
    if (e.key === "w" || e.key === "ArrowUp") {
        model.rotateShape()
    }
    if (e.key === "d" || e.key === "ArrowRight") {
        model.moveShape("right")
    }
    if (e.key === "s" || e.key === "ArrowDown") {
        model.downwardMovement()
    }
    if (e.key === "a" || e.key === "ArrowLeft") {
        model.moveShape("left")
    }
})

// Monitor when the score reaches a certain value and increase the level.
setInterval(() => {
    if (score >= 100) {
        level = 2;
        drop_speed += 100;
        level_value.innerHTML = level;
        updateLocalStorage("level")
    }
    if (score >= 200) {
        level = 3;
        drop_speed += 200;
        level_value.innerHTML = level;
        updateLocalStorage("level")
    }
    if (score >= 300) {
        level = 4;
        drop_speed += 300;
        level_value.innerHTML = level;
        updateLocalStorage("level")
    }
    if (score >= 400) {
        level = 5;
        drop_speed += 400;
        level_value.innerHTML = level;
        updateLocalStorage("level")
    }
    if (score >= 500) {
        level = 6;
        drop_speed += 1000;
        level_value.innerHTML = level;
        updateLocalStorage("level")
    }
})