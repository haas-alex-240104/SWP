document.getElementById("essenBtn").addEventListener("click", async () => {
    const response = await fetch("/lieblinge");
    const daten = await response.json();
    
    const ergebnisDiv = document.getElementById("ergebnis");
    const tabelle = "<table>" + daten.map(d => `<tr><td>${d.name}</td><td>${d.essen}</td></tr>`).join("") + "</table>";
    ergebnisDiv.innerHTML = tabelle;
});
