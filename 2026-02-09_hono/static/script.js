const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const stepInput = document.getElementById("step");
const tableBody = document.getElementById("table-body");

function f(x) {
    return x * x;
}
function g(x) {
    return x * x / 4;
}
function h(x) {
    return x * x - 4;
}
function i(x) {
    return x * x/4 - 4;
}

function calculateTable() {
    const start = parseFloat(startInput.value);
    const end = parseFloat(endInput.value);
    const step = parseFloat(stepInput.value);
    
    if (isNaN(start) || isNaN(end) || isNaN(step) || step <= 0) {
        alert("Bitte gültige Zahlen eingeben. Schritt muss größer als 0 sein.");
        return;
    }
    
    tableBody.innerHTML = "";
    
    for (let x = start; x <= end; x += step) {
        const row = document.createElement("tr");
        
        const xCell = document.createElement("td");
        xCell.textContent = x.toFixed(2);
        row.appendChild(xCell);
        
        const fCell = document.createElement("td");
        fCell.textContent = f(x).toFixed(2);
        row.appendChild(fCell);
        
        const gCell = document.createElement("td");
        gCell.textContent = g(x).toFixed(2);
        row.appendChild(gCell);
        
        const hCell = document.createElement("td");
        hCell.textContent = h(x).toFixed(2);
        row.appendChild(hCell);
        
        const iCell = document.createElement("td");
        iCell.textContent = i(x).toFixed(2);
        row.appendChild(iCell);
        
        tableBody.appendChild(row);
    }
}

document.getElementById("calculate-btn").addEventListener("click", calculateTable);
