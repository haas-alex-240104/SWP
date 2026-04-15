async function fetchDaten(url) {
    const response = await fetch(url);
    
    const daten = await response.json();
    
    console.log("Response Object:", response);
    console.log("Daten:", daten);
}

fetchDaten("/api/daten");