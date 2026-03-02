document.getElementById("essenBtn").addEventListener("click", async () => {
    const response = await fetch("/lieblinge");
    const daten = await response.json();
    
    const ergebnisDiv = document.getElementById("ergebnis");
    ergebnisDiv.innerHTML = daten.map(d => `${d.name}: ${d.essen}`).join("<br>");
});
