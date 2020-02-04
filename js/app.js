/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
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

$('.key').on('click', function(){
    let guess = $(this).text()
    let match = game.handleInteraction(guess);
    if(!match){
        $(this).addClass('wrong');
        $(this).prop('disabled', true);
    }
    if(match){
        $(this).addClass('chosen');
        $(this).prop('disabled', true);
    }
})


document.addEventListener('keydown', (e)=>{
    let guess = e.key
    let match = game.handleInteraction(guess);
    const keys =  document.querySelectorAll('.key')
    const keysArray = Array.from(keys);
    keysArray.forEach((key)=>{
        if(key.textContent == e.key && !match){
            $(key).addClass('wrong');
            $(key).prop('disabled', true);
        } else if(key.textContent == e.key && match){
            $(key).addClass('chosen');
            $(key).prop('disabled', true);
        }
    })
 
});
