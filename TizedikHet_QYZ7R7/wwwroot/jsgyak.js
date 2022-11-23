window.onload = () => {
    f1()
}

var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

function f1() {
    for (var sor = 0; sor < 10; sor++) {
        //új div létrehozása az új sornak
        var sorDiv = document.createElement("div")   

         //új div osztálylistájához add hozzá a "sor"-t
        sorDiv.classList.add("sor")

         //új div-et add hozzá a "pascal" gyermekeihez
        document.getElementById("pascal").appendChild(sorDiv);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            //új div létrehozása az új elemnek
            var elemDiv = document.createElement("div")

            // új elem div osztálylistájához add hozzá az "elem" - et teszteléshet .innerHTML = `${sor}:${oszlop}`
            elemDiv.classList.add("elem")

            //legyen az innerHTML a megfelelő szám
            elemDiv.innerHTML = faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor - oszlop));

            //új elem div-et vedd fel a sor elemei közé
            sorDiv.appendChild(elemDiv)
            
        }
    }

}

