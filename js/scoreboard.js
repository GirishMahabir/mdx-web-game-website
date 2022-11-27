// Class to handle the scoreboard. This class is responsible for
// displaying the scoreboard and updating it when the game state
// changes. Only top 5 scores are displayed.

// Constructor
function Scoreboard() {
    /* Get the DOM elements for the scoreboard. */

    // Fetch the scoreboard table.
    for (let i = 1; i <= 5; i++) {
        this['playerLevel' + i + 'Name'] = document.getElementById('player_level_' + i + '_name');
        this['playerLevel' + i + 'Score'] = document.getElementById('player_level_' + i + '_score');
    }
}

Scoreboard.prototype.updateScoreboard = function () {
    /* Update the scoreboard with the new names and scores. */
    // Get the username and score from the local storage.
    let playerScores = [];

    let localStorageKeys = Object.keys(localStorage);

    for (let i = 0; i < localStorage.length; i++) {
        let user = JSON.parse(localStorage.getItem(localStorageKeys[i]));
        let user_score = user.score;
        playerScores.push({
            username: user.username,
            score: user_score
        });
    }
    // Sort the player scores in descending order.
    playerScores.sort(function (a, b) {
        return b.score - a.score;
    });

    // Update the scoreboard with the top 5 scores.
    for (let i = 1; i <= 5; i++) {
        // If there are less than 5 scores, display the scores that are available.
        // i - 1 because the array is 0 indexed and the scoreboard is 1 indexed.
        if (playerScores[i - 1]) {
            // Display the username and score.
            this['playerLevel' + i + 'Name'].innerHTML = playerScores[i - 1].username;
            this['playerLevel' + i + 'Score'].innerHTML = playerScores[i - 1].score;
        }
        // If there are no scores, display 'Blank'.
        else {
            this['playerLevel' + i + 'Name'].innerHTML = '';
            this['playerLevel' + i + 'Score'].innerHTML = '';
        }
    }
};

// Run the updateScoreboard method once the page has loaded.
window.addEventListener('load', function () {
    let scoreboard = new Scoreboard();
    scoreboard.updateScoreboard();
});

// Path: js/scoreboard.js