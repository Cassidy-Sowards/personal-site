//Showing the header after scrolling
const navbar = document.getElementById("navbar");
addEventListener("scroll", () => {
    if(window.scrollY > 400){
        document.getElementById("nav").classList.replace("hidden", "visible");
        document.getElementById("nav").classList.replace("opacity-0", "opacity-100");
        document.getElementById("nav").classList.replace("h-0", "h-fit");
        
    }
    else if(window.scrollY <= 100){
        document.getElementById("nav").classList.replace("visible", "hidden");
        document.getElementById("nav").classList.replace("opacity-100", "opacity-0");
        document.getElementById("nav").classList.replace("h-fit", "h-0");
        
        
    }
});



window.onload = function() {

    const html = document.querySelector("html");
    var toggle = document.getElementById("checkbox");

    function toggleDarkMode() {
        if(!toggle.checked){
            html.classList.add("dark");
        }
        else{
            html.classList.remove("dark");
        }
    }

toggle.addEventListener("click", toggleDarkMode);
}

