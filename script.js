(function() {
    let x;
    let cards = [];
    let arrC = [];
    let card;
    const run = document.getElementById('run')
    const target = document.getElementById('wrap');
    let img = ['bike.png','c.png','car.png','chess-piece.png','d.png','h.png','ladder.png','s.png']
    run.addEventListener('click', ev => startGame())
    function startGame(){
        createCards();
        schuffleCards();
        showCards();
    }

    function createCards(){
        cards = [];
        for (i=0; i < 8; i++){
            card= {data:i, image:img[i]}
            cards.push( card, card)
        }
        console.log(cards)
    }
    function schuffleCards() {
        for (let i = 0; i < 16; i++) {
            let tempCard = cards[i];
            let randindex = Math.floor(Math.random() * 16);
            cards[i] = cards[randindex];
            cards[randindex] = tempCard;
        }
        console.log(cards)
    }
    function showCards(){
        target.innerHTML= '';
        for (f = 0; f < cards.length; f++) {
            let imgLink = "./resources/" + cards[f].image;
            target.innerHTML = target.innerHTML + '<div class="cards" id="'+ f +'"> <img id="'+ f +'image" src="' + imgLink + '" alt="'+cards[i].image+'" width="70" height="70"> </div>';

           imagehide(f+'image');

            eventListen()

        }


    }
    function imagehide(id){

        let img = document.getElementById(id)
        img.style.display= "none";
    }
    function eventListen(){
        const cardList = document.querySelectorAll(".cards")
        cardList.forEach(card => {
            card.addEventListener('click', (ev)=>{
                console.log(ev.currentTarget.id);
                let id = ev.currentTarget.id
                display(id+"image")
            })
        })




    }

    function display(id){


        let img = document.getElementById(id)
        img.style.display= "initial";

    }
})();