function changeView(url) {
    var scroll = document.querySelector(url);
    var scrollPosition = scroll.offsetTop - document.querySelector('.navbar').offsetHeight;
    
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
}

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