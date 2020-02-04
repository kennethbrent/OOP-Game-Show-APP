/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    //init class instance and set default values for phrases, missed, and activePhrase
    constructor(){
        this.missed = 0,
        this.phrases = [{phrase: 'Iron Man'}, {phrase: 'Black Widow'}, {phrase:'Spiderman'}, {phrase: 'Thanos'}, {phrase: 'Doctor Strange'},{phrase: 'The Hulk'}, {phrase: 'Killmonger'},{phrase: 'Captain America'}]
        this.activePhrase = null
    }
    //select a random phrase from the phrases array
    getRandomPhrase(){
        const phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return new Phrase(phrase.phrase);
    }

    //start the game, call getRandomPhrase method and append phrase to screen by calling add Phrase to display
    startGame(){
        $('#overlay').hide();
        const phrase = this.getRandomPhrase()
        this.activePhrase = phrase
        phrase.addPhraseToDisplay()
    }

    ///////////////Handle interaction from the user. Disable previously selected keys and show matched letters.
    handleInteraction(guess){
        let match = game.activePhrase.checkLetter(guess);
        const keys =  document.querySelectorAll('.key')
        const keysArray = Array.from(keys);
        keysArray.forEach((key)=>{
            if(key.textContent == guess && !match){
                $(key).addClass('wrong');
                $(key).prop('disabled', true);
                this.removeLife();
            } else if(key.textContent == guess && match){
                game.activePhrase.showMatchedLetter(guess);
                $(key).addClass('chosen');
                $(key).prop('disabled', true);
                let win = this.checkForWin();
                if(win){
                    this.gameOver(win);
                }
            }
        })
    }
    
////check if all the letters have been revealed
    checkForWin(){
       if($('.hide').length > 0) {
           return false;
       } else {
           return true;
       }
    }
/// Increment missed property and lose a heart on wrong guess.
    removeLife(){
        const hearts = document.querySelectorAll("li > img");
        hearts[this.missed].setAttribute('src','images/lostHeart.png');
        this.missed = this.missed + 1;
        if(this.missed == 5) {
            let win = false;
            this.gameOver(win);
        }
    }
//End game and show overlay screen with applicable class
    gameOver(win){
        if(win){
            $('#overlay').removeClass('start');
            $('#overlay').removeClass('lose');
            $('#overlay').addClass('win');
            $('#overlay h1').text('Great job!')
            $('#overlay').show();
        }
        if(!win && this.missed == 5) {
            $('#overlay').removeClass('start');
            $('#overlay').removeClass('win');
            $('#overlay').addClass('lose');
            $('#overlay h1').text('Oh no, better luck next time!')
            $('#overlay').show();
        }
    }
}