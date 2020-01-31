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
}