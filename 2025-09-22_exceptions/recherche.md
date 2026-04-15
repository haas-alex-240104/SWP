# Exceptions Recherche

## Was sind Exceptions?

Exceptions sind Fehlerzustände, die during der Programmausführung auftreten können. Sie unterbrechen den normalen Programmfluss und ermöglichen eine zentrale Fehlerbehandlung.

## throw Anweisung

Mit `throw` kann man eigene Exceptions auslösen:

```typescript
throw new Error("Meine Fehlermeldung");
throw "Fehler";  // String werfen
throw { code: 404, message: "Nicht gefunden" };  // Object werfen
```

## try...catch...finally

```typescript
try {
  // Code der funktionieren könnte
  const ergebnis = riskanteOperation();
} catch (e) {
  // Fehlerbehandlung
  console.error("Fehler aufgetreten:", e);
} finally {
  // Wird IMMER ausgeführt (auch ohne Fehler)
  aufräumen();
}
```

## Exception Typen

- `Error` - Basisklasse für Fehler
- `TypeError` - Falscher Typ verwendet
- `RangeError` - Wert außerhalb Bereich
- `SyntaxError` - Syntaxfehler
- `ReferenceError` - Undefinierte Variable

## Eigene Exceptions

```typescript
class MeineException extends Error {
  constructor(message: string, public code: number) {
    super(message);
    this.name = "MeineException";
  }
}

throw new MeineException("Benutzer existiert bereits", 1001);
```

## Best Practices

1. Nur kritische Fehler werfen
2. Aussagekräftige Fehlermeldungen
3. Nicht zu viele try-catch Blöcke
4.finally für Aufräumarbeiten verwenden