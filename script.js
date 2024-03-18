const zapalki = document.querySelectorAll(".zapalka");
const div = document.querySelector("#napisy");
let gracz = true;
const play = document.querySelector("#play");
const rules = document.querySelector("#rules");
let iloscZapalek = 0;
const rules_window = document.querySelector("#rules_window");

rules.addEventListener("click", function()
{
    if(rules_window.style.visibility == "hidden")
    {
        rules_window.style.visibility = "visible";
    }
    else
    {
        rules_window.style.visibility = "hidden";
    }
})

play.addEventListener("click", function()
{
    iloscZapalek = prompt("Podaj ilość zapałek");
    div.innerHTML = "<h2>Ilośc zapałek do wzięcia: </h2><h1>" + iloscZapalek + "</h1>";
    div.innerHTML += "<h2>Ruch gracza pierwszego</h2>";
})
zapalki.forEach(element => {
    element.addEventListener("click", function()
    {
        console.log(element.id);
        if(parseInt(iloscZapalek) >= parseInt(element.id))
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
