const menu = function(){
    const menuIcon = document.querySelector('.menu-icon');
    const bodyMove = document.querySelector('.menu-bar');
    const closeMenu = document.querySelector('.close');

    menuIcon.addEventListener('click', ()=>{
        bodyMove.classList.add('menu-bar-active');
    });
    closeMenu.addEventListener('click', function(){
        bodyMove.classList.remove('menu-bar-active')
    });
}

menu();
 

//My skills Image

const slideView = ()=>{
    const video = document.querySelector('#video');
    const graphics = document.querySelector('#graphics');
    const web = document.querySelector('#web');
    const videoClick = document.querySelector('#videoclick');
    const graphicsClick = document.querySelector('#graphicsclick');
    const webClick = document.querySelector('#webclick');


    videoClick.addEventListener('click', ()=>{
        video.style.opacity = "1";
        web.style.opacity = "0";
        graphics.style.opacity = "0";
    });
    
    webClick.addEventListener('click', ()=>{
        video.style.opacity = "0";
        web.style.opacity = "1";
        web.style.filter = "brightness(2)";
        graphics.style.opacity = "0";
    });

    graphicsClick.addEventListener('click', ()=>{
        video.style.opacity = "0";
        web.style.opacity = "0";
        graphics.style.opacity = "1";
    });
}

slideView();