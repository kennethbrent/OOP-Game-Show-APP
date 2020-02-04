/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //init game variable
let game;

/////Start a new game on button click
$('#btn__reset').on('click',()=>{
    $('#phrase ul li').remove();
    $('.key').removeClass('wrong');
    $('.key').removeClass('chosen');
    $('.key').prop("disabled", false);
    const hearts = document.querySelectorAll("li > img");
    hearts.forEach((heart)=>{
        heart.setAttribute('src','images/liveHeart.png');
    })
    game = new Game();
    game.startGame();
})

/////////////check for match on button click

$('.key').on('click', function(){
    let guess = $(this).text()
    game.handleInteraction(guess);
})

////check for match on key down

document.addEventListener('keydown', (e)=>{
    let guess = e.key
    game.handleInteraction(guess);

});
