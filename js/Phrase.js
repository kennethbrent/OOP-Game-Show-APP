/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase()
    }

    addPhraseToDisplay(){
       const phraseArray = this.phrase.split("");
       const phrase_container = $('#phrase ul')
       phraseArray.forEach((letter) => {
           if(letter != ' '){
            phrase_container.append(`
            <li class="hide letter ${letter}">${letter}</li>
            `)
           } else {
            phrase_container.append(`
             <li class="space"></li>
            `)
        }

       })
    }

    checkLetter(guess){
        const phraseArray = this.phrase.split('')
        let match = phraseArray.includes(guess)
        if(match){
            this.showMatchedLetter(guess);
            return true
        } else {
            return false
        }
    }

    showMatchedLetter(guess){
        $(`.${guess}`).removeClass('hide');
        $(`.${guess}`).addClass('show');
    }
}