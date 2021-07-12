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

        
    ]
})

const grid = document.querySelector('.grid')

function createBoard(){
    for (let i =0, i < cardArray.length; i++){
        var card = document.createElement("img")
        card.setAttribute('src', 'images/water.png')
        card.setAttribute
    }
}