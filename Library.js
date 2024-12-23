let array = [];
let inputs = document.querySelectorAll("input");
let button = document.querySelector("button");
let table = document.querySelector("table");
let table_body = document.querySelector("tbody");
let isEmpty = false;

button.addEventListener('click', iterate);

function iterate() {
    let library = {};
    table.style.display = "table";
    let elem_row = document.createElement("tr");
    table_body.appendChild(elem_row);
    inputs.forEach(input => {
        if(input.value === "")
            {alert(`You left ${input.id} field empty`);
        elem_row.remove();
         return;} //we can't use the break function in forEach loop
        let key = input.id;
        let value = input.value;
        library[key] = value;
        let elem = document.createElement("td");
        elem.textContent = library[key];
        elem_row.appendChild(elem);
        input.value = "";
        inputs[0].focus();
    });
    array.push(library);
};