let items = [];
let quantities = [];

let item = "";
do {
    item = prompt("Inserisci articolo, x per terminare");
    if (item != "x") {
        let quantity = 0;
        do {
            quantity = parseInt(prompt("Inserisci quantità"));
        } while (isNaN(quantity));
        if (quantity !== 0) {
            items.push(item);
            quantities.push(quantity);
        }
    }
} while(item != "x");

const itemsList = document.querySelector(".items-list");
let i = 0;
while (i < items.length) {
    const thisQuantifiedItem = `
        <li>
            <h2>${quantities[i]}x ${items[i]}</h2>
        </li>`;
    itemsList.innerHTML += thisQuantifiedItem;
    i++;
}