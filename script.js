let iloscZapalek = prompt("Podaj ilość zapałek");
const zapalki = document.querySelectorAll(".zapalka");
const div = document.querySelector("#napisy");
let gracz = true;

div.innerHTML = "<h2>Ilośc zapałek do wzięcia: </h2><h1>" + iloscZapalek + "</h1>";
div.innerHTML += "<h2>Ruch gracza pierwszego</h2>";

zapalki.forEach(element => {
    element.addEventListener("click", function()
    {
        if(iloscZapalek >= element.id)
        {
            iloscZapalek -= element.id;
            if(iloscZapalek != 0)
            {
                div.innerHTML = "<h2>Ilośc zapałek do wzięcia: </h2><h1>" + iloscZapalek + "</h1>";
                if(gracz)
                {
                    div.innerHTML += "<h2>Ruch gracza drugiego</h2>";
                    gracz = false;
                }
                else
                {
                    div.innerHTML += "<h2>Ruch gracza pierwszego</h2>";
                    gracz = true;
                }
            }
            else
            {
                div.innerHTML = "<h2>Ilośc zapałek do wzięcia: </h2><h1>" + iloscZapalek + "</h1>";
                if(gracz)
                {
                    div.innerHTML = "<h1>Wygrał gracz drugi</h1>"
                }
                else
                {
                    div.innerHTML += "<h1>Wygrał gracz pierwszy</h1>";
                }
            }
        }
    })
});