const navbar = document.getElementById("navbar");
addEventListener("scroll", () => {
    if(window.scrollY > 400){
        document.getElementById("nav").classList.replace("opacity-0", "opacity-100");
        document.getElementById("nav").classList.replace("h-0", "h-fit");
    }
    else if(window.scrollY <= 100){
        document.getElementById("nav").classList.replace("opacity-100", "opacity-0");
        document.getElementById("nav").classList.replace("h-fit", "h-0");
        
    }
});