# Aggiornamento Glossario con Supporto HTML

## Modifiche Implementate

### 1. Componente GlossaryModal - Supporto HTML
**File**: `src/components/ui/GlossaryModal.jsx`

**Modifiche**:
- Cambiato da `<p>` a `<div>` per le risposte
- Aggiunto `dangerouslySetInnerHTML={{ __html: section.answer }}` per renderizzare HTML
- Aggiunta classe `glossary-content` per lo styling delle liste
- Corretto il colore del testo delle domande da `text-primary-light` a `text-[#461e7d]` (viola ENEL)
- Aumentato font size da `text-xs` a `text-sm` per le risposte

```jsx
<div 
    className="font-enel text-sm leading-[21px] text-[#1c1e20] glossary-content"
    dangerouslySetInnerHTML={{ __html: section.answer }}
/>
```

### 2. Stili CSS per Contenuto Glossario
**File**: `src/index.css`

**Aggiunti stili**:
```css
.glossary-content ol {
  list-style-type: decimal;
  padding-left: 0;
  margin-bottom: 8px;
}

.glossary-content ol li {
  margin-left: 18px;
  margin-bottom: 8px;
  line-height: 21px;
}

.glossary-content ol li:last-child {
  margin-bottom: 0;
}

.glossary-content p {
  margin-bottom: 8px;
  line-height: 21px;
}
```

### 3. Dati Glossario - Sezione 1 Aggiornata
**File**: `src/config/glossaryData.js`

**Contenuto aggiornato dalla Figma**:

#### Domanda 1: "Cos'è l'installazione con impianto già predisposto"
- Lista numerata HTML (`<ol>`)
- 2 punti che descrivono quando l'impianto è predisposto:
  1. Collegamenti fra unità interna ed esterna
  2. Presenza presa di corrente

#### Domanda 2: "Cos'è l'installazione con impianto da predisporre"
- Lista con bullet points usando `•`
- Interruzioni di linea con `<br>`
- 6 punti che descrivono le prestazioni necessarie

## Struttura HTML Supportata

Il glossario ora supporta:
- **Liste ordinate**: `<ol>` con `<li>`
- **Paragrafi**: `<p>`
- **Interruzioni di linea**: `<br>`
- **Formattazione inline**: Testo con bullet point `•`

## Esempio di Dato con HTML

```javascript
{
    question: "Domanda di esempio",
    answer: `<p>Testo introduttivo</p>
<ol>
<li>Primo punto della lista</li>
<li>Secondo punto della lista</li>
</ol>`
}
```

## Design System ENEL

### Colori
- **Domande**: `#461e7d` (viola ENEL)
- **Risposte**: `#1c1e20` (grigio scuro)

### Tipografia
- **Domande**: 14px Bold, line-height 21px
- **Risposte**: 14px Regular, line-height 21px
- **Font**: Roobert ENEL

### Spaziatura
- Gap tra domanda e risposta: 8px (gap-2)
- Gap tra sezioni Q&A: 24px (gap-6)
- Margine liste: 18px a sinistra
- Padding accordion content: 24px orizzontale, 24px bottom

## Sicurezza

⚠️ **Nota su `dangerouslySetInnerHTML`**:
- Usato per renderizzare HTML nelle risposte del glossario
- Il contenuto è controllato internamente (file `glossaryData.js`)
- Non accetta input utente, quindi sicuro in questo contesto
- Tutti i dati HTML sono statici e gestiti dal team di sviluppo

## Testing

Per testare:
1. Aprire l'applicazione
2. Cliccare su "Vai al glossario" nella navigation bar
3. Espandere la sezione "1. Tipologia di installazione"
4. Verificare che:
   - La prima domanda mostri una lista numerata
   - La seconda domanda mostri bullet points
   - La formattazione sia corretta
   - Il colore viola sia applicato alle domande

## File Modificati

- ✅ `src/components/ui/GlossaryModal.jsx` - Supporto HTML
- ✅ `src/index.css` - Stili per liste e paragrafi
- ✅ `src/config/glossaryData.js` - Sezione 1 aggiornata con HTML

## Prossimi Passi

Se necessario, è possibile aggiornare le altre sezioni del glossario (BTU, Lavaggio, Canalizzazioni, Funzionalità) usando lo stesso formato HTML.
