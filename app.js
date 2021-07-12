document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'bobber',
            img: 'images/bobber.jpeg'
        },

        {
            name: 'fishingpole',
            img: 'images/fishingpole.jpeg'
        },

        {
            name: 'hat',
            img: 'images/hat.jpeg'
        },

        {
            name: 'hook',
            img: 'images/hook.jpeg',
        },

        {
            name: 'kayak',
            img: 'images/kayak.jpeg'
        },

        {
            name: 'lure',
            img: 'images/lure.jpeg'
        },

        {
            name: 'water',
            img: 'images/Water.jpeg'
        },

        {
            name: 'bass',
            img: 'images/bass.jpeg'
        },
        
        {
            name: 'bobber',
            img: 'images/bobber.jpeg'
        },

        {
            name: 'fishingpole',
            img: 'images/fishingpole.jpeg'
        },

        {
            name: 'hat',
            img: 'images/hat.jpeg'
        },

        {
            name: 'hook',
            img: 'images/hook.jpeg',
        },

        {
            name: 'kayak',
            img: 'images/kayak.jpeg'
        },

        {
            name: 'lure',
            img: 'images/lure.jpeg'
        },

        {
            name: 'water',
            img: 'images/Water.jpeg'
        },

        {
            name: 'bass',
            img: 'images/bass.jpeg'
        } 
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    const resultDisplay = document.querySelector('#result')


    
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/water.jpeg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    

function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cards[0]
    const optionTwoId = cardsChosen[1]
    if (cardsChosen[0] === cardsChosen[1]){
        alert("You found a match!")
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen) 
    } else {
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        alert("Sorry, try again.")
    }
    cardsChosen =[]
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length == cardArray.length/2)
    resultDisplay.textContent = 'Congratulations! You found them all'


}


function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}






    createBoard()






















})

