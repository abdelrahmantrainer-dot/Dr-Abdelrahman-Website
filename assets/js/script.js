const langBtn = document.getElementById("langBtn");

let currentLang = "ar";

langBtn.addEventListener("click", function(){

    const elements = document.querySelectorAll("[data-ar]");

    if(currentLang === "ar"){

        currentLang = "en";
        langBtn.innerHTML = "AR";

        elements.forEach(function(el){
            el.innerHTML = el.getAttribute("data-en");
        });

    } else {

        currentLang = "ar";
        langBtn.innerHTML = "EN";

        elements.forEach(function(el){
            el.innerHTML = el.getAttribute("data-ar");
        });

    }

});