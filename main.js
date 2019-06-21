let img = document.querySelector(".img-f");

let menu = document.querySelector(".menuLogo");
let titleAboutLogo = document.querySelector(".titleAboutLogo");
let titleAbout = document.querySelector(".titleAbout");
let shop = document.querySelector(".shop");
let account = document.querySelector(".account");

let title = document.querySelector(".title");
let collections = document.querySelector(".collections");
let stores = document.querySelector(".stores");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let categories = document.querySelector(".categories");

TweenMax.from(img, 0.5, {
    opacity: 0,
    delay: 0.5
})

TweenMax.from(shop, 1, {
    opacity: 0,
    y: 15,
    delay: 1.5
})

TweenMax.from(account, 1, {
    opacity: 0,
    y: 15,
    delay: 1.5
})

TweenMax.from(titleAbout, 0.5, {
    transform: "scaleX(0) scaleY(0)",
    delay: 1.8
})

TweenMax.from(titleAboutLogo, 0.5, {
    transform: "scaleX(0) scaleY(0)",
    delay: 2.2
})

TweenMax.from(menu, 1, {
    opacity: 0,
    transform: "rotateY(110deg)",
    y: 20,
    delay: 3.7
})

TweenMax.from(title, 1, {
    opacity: 0,
    y: 20,
    delay: 1
})

TweenMax.from(collections, 1, {
    opacity: 0,
    y: -15,
    delay: 2.5
})

TweenMax.from(stores, 1, {
    opacity: 0,
    y: -15,
    delay: 2.7
})

TweenMax.from(about, 1, {
    opacity: 0,
    y: -15,
    delay: 2.9
})

TweenMax.from(contact, 1, {
    opacity: 0,
    y: -15,
    delay: 3.1
})

 TweenMax.from(categories, 1, {
    height: 0,
    delay: 3.5
}) 

function scrollAppear() {
    var introText = document.querySelector(".intro-b");
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.4;

    if(introPosition < screenPosition) {
        introText.classList.add("scroll-appear");
    }
}
window.addEventListener("scroll", scrollAppear); 

function bChanger() {
    if(this.scrollY > this.innerHeight / 2) {
        document.body.classList.add("b-active");
    } else {
        document.body.classList.remove("b-active");
    }
}

window.addEventListener("scroll", bChanger);