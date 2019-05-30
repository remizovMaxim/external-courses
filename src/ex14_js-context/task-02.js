function Hangman(word) {
    var guessedString, err, wrongSymbols;
    this.getGuessedString = function () {
        return guessedString;
    };
    this.getErrorsLeft = function () {
        return err;
    };
    this.getWrongSymbols = function () {
        return wrongSymbols;
    };
    this.getStatus = function () {
        return guessedString + " | " + "errors " + err;
    };
    this.guess = function (letter) {
        if (err <= 0) {
            console.log("You lose:(");
            return this;
        }
        if (word.indexOf(letter) === -1) {
            err--;
            wrongSymbols.push(letter);
            console.log("wrong letter, errors left " + err + " | " + wrongSymbols);
        }
        if (word.indexOf(letter) > -1) {
            guessedString = guessedString.split("");
            var listLetter = word.split("");
            for (var i = 0; i < listLetter.length; i++) {
                if (letter === listLetter[i]) {
                    guessedString[i] = listLetter[i];
                }
            }
            guessedString = guessedString.join("");
            console.log(guessedString);
        }
        return this;
    };
    this.startAgain = function (newGame) {
        startGame(newGame);
    };
    function startGame(startWord) {
        guessedString = "_".repeat(startWord.length);
        err = 6;
        wrongSymbols = [];
    }
    startGame(word);
}
var hangman = new Hangman('webpurple');
module.exports = hangman;