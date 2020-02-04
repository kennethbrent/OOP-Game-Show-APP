/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.missed = 0,
        this.phrases = [{phrase: 'Iron Man'}, {phrase: 'Black Widow'}, {phrase:'Spiderman'}, {phrase: 'Thanos'}, {phrase: 'Doctor Strange'},{phrase: 'The Hulk'}, {phrase: 'Killmonger'},{phrase: 'Captain America'}]
        this.activePhrase = null
    }

    getRandomPhrase(){
        const phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return new Phrase(phrase.phrase);
    }

    startGame(){
        $('#overlay').hide();
        const phrase = this.getRandomPhrase()
        this.activePhrase = phrase
        phrase.addPhraseToDisplay()
    }
    
    handleInteraction(guess){
        let match = game.activePhrase.checkLetter(guess);
        if(match){
            let win = this.checkForWin();
            if(win){
                this.gameOver(win);
            }
        }
        if(!match){
            this.removeLife();
        }
     
        return match;
    }

    checkForWin(){
       if($('.hide').length > 0) {
           return false;
       } else {
           return true;
       }
    }

    removeLife(){
        const hearts = document.querySelectorAll("li > img");
        hearts[this.missed].setAttribute('src','images/lostHeart.png');
        this.missed = this.missed + 1;
        if(this.missed == 5) {
            let win = false;
            this.gameOver(win);
        }
    }

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