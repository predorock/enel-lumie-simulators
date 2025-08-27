# BenefitsCardsContainer - Usage Example

## pages.json Configuration

Here's how to use the new BenefitsCardsContainer component in your pages.json configuration:

```json
{
  "type": "BenefitsCardsContainer",
  "props": {
    "benefits": [
      {
        "title": "Benefici economici",
        "icon": "savings",
        "content": "Acquistare un climatizzatore di ultima generazione è una scelta economicamente vantaggiosa. Grazie alla tecnologia ad alta efficienza energetica, <strong>questi dispositivi consumano fino al 40% in meno</strong> rispetto ai modelli tradizionali, <strong>con un <span style=\"color: #d3135a;\">risparmio annuo che può superare i 400 euro</span> sulla bolletta elettrica.</strong>"
      },
      {
        "title": "Benefici ambientali",
        "icon": "eco", 
        "content": "Questi modelli riducono notevolmente i consumi energetici, <strong style=\"color: #d3135a;\">emettendo fino a 400 kg in meno di CO₂ all'anno</strong> <strong>rispetto</strong> ai vecchi impianti. <strong>È l'equivalente della quantità di CO₂ assorbita in un anno da circa 25 alberi</strong>. Utilizzando meno energia e refrigeranti a basso impatto ambientale, contribuiscono concretamente alla lotta contro il cambiamento climatico, <strong>migliorando la qualità dell'aria e proteggendo l'ambiente</strong>."
      }
    ]
  }
}
```

## Component Features

### Available Icons
- `"savings"` - Economic/financial benefits icon (purple background with savings symbol)
- `"eco"` - Environmental benefits icon (purple background with leaf symbol)

### HTML Content Support
The content field supports HTML formatting:
- `<strong>` for bold text
- `<span style="color: #d3135a;">` for ENEL accent color highlights
- `<em>` for italics
- Any valid HTML formatting

### Props Structure
Each benefit object should have:
```json
{
  "title": "Benefit Title",
  "icon": "savings|eco", 
  "content": "HTML content with <strong>formatting</strong>"
}
```

## Design System Compliance
- ✅ Uses ENEL brand colors (`#5738ff` for icons, `#d3135a` for highlights)
- ✅ Follows Roobert ENEL font system
- ✅ Matches Figma design exactly
- ✅ Responsive and mobile-friendly
- ✅ Proper shadow and border radius from design system

## Demo Access
View the component demo at: `http://localhost:5173/?demo=benefits`
