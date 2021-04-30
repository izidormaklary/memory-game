(function() {
    let pairs =[];
    let cards = [];

    let card;
    let checked = [];
    let checkedId = [];
    const run = document.getElementById('run')
    const target = document.getElementById('wrap');
    let allImg;
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

    }
    function schuffleCards() {
        for (let i = 0; i < 16; i++) {
            let tempCard = cards[i];
            let randindex = Math.floor(Math.random() * 16);
            cards[i] = cards[randindex];
            cards[randindex] = tempCard;
        }

    }
    function showCards(){
        target.innerHTML= '';
        for (f = 0; f < cards.length; f++) {
            let imgLink = "./resources/" + cards[f].image;
            target.innerHTML = target.innerHTML + '<div class="cards" id="'+ f +'"> <img id="'+ f +'image" src="' + imgLink + '" alt="'+cards[i].image+'" width="100px" height="100px"> </div>';



            eventListen()
            imagehide(f+"image")
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

                let id = ev.currentTarget.id
                display(id+"image")
                compare(id);
            })
        })




    }
    function compare(id) {
       checkedId.push(id);
        checked.push(cards[id]);




      if (checkedId.length > 1 && checkedId[checkedId.length-1] === checkedId[checkedId.length-2]){
          checkedId.pop();
          checked.pop();
      } //else if ( )


      if (checked.length === 2 &&  checked[0].data  !== checked[1].data ) {
          let first =  checkedId[checkedId.length-2];
          let second = checkedId[checkedId.length-1];

            setTimeout(function (){
                imagehide( first+"image");
                imagehide( second+"image");
            },800)

            checked =[];
            checkedId =[]
      }else if (checked.length === 2 && checked[0] === checked[1]) {

          pairs.push(checked.pop());
          pairs.push(checked.pop());
          let first = checkedId[0];
          let sec   = checkedId[1]
          changeclass(first);
          changeclass(sec);
          console.log( checkedId);
          checkedId =[]
      }

    }
function changeclass(id){
    document.getElementById(id).className = "readycards";
}


    function display(id){

        let img = document.getElementById(id)
        img.style.display= "block";


    }
})();