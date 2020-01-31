/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.missed = 0,
        this.phrases = [{phrase: 'Iron Man'}, {phrase: 'Black Widow'}, {phrase:'Spiderman'}, {phrase: 'Thanos'}, {phrase: 'Doctor Stange'}]
        this.activePhrase = null
    }

    getRandomPhrase(){
        const phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return new Phrase(phrase.phrase);
    }

    startGame(){
        $('#overlay').hide();
        const phrase = this.getRandomPhrase()
        this.activePhrase = phrase.phrase
        phrase.addPhraseToDisplay()
    }
}