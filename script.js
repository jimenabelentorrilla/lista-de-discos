let bloque = document.getElementById("bloque");
let valor = document.getElementById("valor").value;
let cardPeque = document.getElementById("cardPeque");
let disco = document.getElementById("disco");
let tachito = document.getElementById("tachito");
let valoor = document.getElementById("valor");
let add = document.getElementById("add");

function clickedAdd() {
    let valor = document.getElementById("valor").value;
    bloque.insertAdjacentHTML("beforeend", `
    <div id="bloque">
        <div id="cardPeque" class="cardPeque">
            <div>
                <i class="fa-solid fa-music"></i>
            </div>
            <div>
                <p id="banda" class="item">${valor}</p>
           </div>
            <div>
             <i id="tachito" class="delete fa-solid fa-trash"></i>
           </div>
        </div>
    </div>`);

}
add.addEventListener("click", clickedAdd);

/////////////  Funcion para tachar //////////////////////////
function tachar() {
    disco.classList.add('sub');
}
disco.addEventListener("click", tachar);
/////////////////////////////////