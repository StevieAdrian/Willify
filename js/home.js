document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const songCards = document.querySelectorAll('.song-card');
    const totalCards = songCards.length;
    let visibleCardsCount = getComputedStyle(document.querySelector('.song-list')).getPropertyValue('--visible-cards-count') || 4;
    visibleCardsCount = parseInt(visibleCardsCount, 10);
    function updateVisibleCards() {
        songCards.forEach((card, index) => {
            if (index >= currentIndex && index < currentIndex + visibleCardsCount) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function commandArrow(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex > totalCards - visibleCardsCount) {
            currentIndex = totalCards - visibleCardsCount;
        }
        updateVisibleCards();
    }

    updateVisibleCards();

    document.querySelector('.arrow-left').addEventListener('click', function () {
        commandArrow(-1);
    });

    document.querySelector('.arrow-right').addEventListener('click', function () {
        commandArrow(1);
    });
});

let open = false
function toggle(){
    if(open == false){
        open = true
        document.getElementById("hamburger-menu").style.display = "flex"
    } else if(open == true){
        open = false
        document.getElementById("hamburger-menu").style.display = "none"
    }
}