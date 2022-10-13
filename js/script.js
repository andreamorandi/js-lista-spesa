let items = [];
let quantities = [];

let item = "";
let quantity = 0;
do {
    item = prompt("Inserisci articolo, x per terminare");
    do {
        quantity = parseInt(prompt("Inserisci quantità"));
        console.log(quantity);
    } while (isNaN(quantity));
    if (item !== "x" && quantity !== 0) {
        items.push(item);
        quantities.push(quantity);
    }
} while (item !== "x");

const itemsContainer = document.querySelector(".items-container");
let i = 0;
while (i < items.length) {
    const thisQuantifiedItem = `
        <h2>
            ${quantities[i]}- 
            ${items[i]}
        </h2>`;
    itemsContainer.innerHTML += thisQuantifiedItem;
    i++;
}