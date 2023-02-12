let bloque = document.getElementById("bloque");
let cardPeque = document.querySelector("#cardPeque");
let disco = document.querySelector("#disco");
let tachito = document.querySelector("#tachito");
let input = document.getElementById("input");
let add = document.getElementById("add");


function addF(e) {
    let valor = input.value;
    e.preventDefault();
    let forms = document.getElementById("forms");
    if (valor != "") {
        bloque.insertAdjacentHTML("beforeend", `
       
            <div id="cardPeque" class="cardPeque">
                <div>
                    <i class="fa-solid fa-music"></i>
                </div>
                <div>
                    <p id="disco" class="item">${valor}</p>
               </div>
                <div>
                 <i id="tachito" class="delete fa-solid fa-trash"></i>
               </div>
            </div>
        `);
    }
    forms.reset();

}

add.addEventListener("click", addF);