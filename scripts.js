const navbar = document.getElementById("navbar");
addEventListener("scroll", () => {
    if(window.scrollY > 100){
        console.log("If statement reached")
        document.getElementById("nav").classList.replace("hidden", "visible");
        console.log(document.getElementById("nav"));
    }
    else if(window.scrollY <= 100){
        document.getElementById("nav").classList.replace("visible", "hidden");
    }
});