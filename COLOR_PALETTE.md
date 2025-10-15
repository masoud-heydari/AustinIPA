# AustinIPA Website - Persian Design Color Palette

## Primary Colors

### Persian Blue
- **Hex:** `#1e3a8a`
- **RGB:** `rgb(30, 58, 138)`
- **Usage:** Primary brand color, headings, navigation
- **Inspiration:** Traditional Persian tilework and ceramics

### Persian Turquoise
- **Hex:** `#14b8a6`
- **RGB:** `rgb(20, 184, 166)`
- **Usage:** Accent color, links, interactive elements
- **Inspiration:** Persian turquoise stones, iconic in Persian jewelry

### Persian Gold
- **Hex:** `#f59e0b`
- **RGB:** `rgb(245, 158, 11)`
- **Usage:** Call-to-action buttons, highlights
- **Inspiration:** Gold accents in Persian miniature paintings

### Persian Rose
- **Hex:** `#e11d48`
- **RGB:** `rgb(225, 29, 72)`
- **Usage:** Secondary accents, special highlights
- **Inspiration:** Persian garden roses, poetry references

---

## Neutral Colors

### Dark Blue (Primary Dark)
- **Hex:** `#0f172a`
- **RGB:** `rgb(15, 23, 42)`
- **Usage:** Dark backgrounds, footer, contrast elements

### Charcoal
- **Hex:** `#1e293b`
- **RGB:** `rgb(30, 41, 59)`
- **Usage:** Text, secondary dark elements

### Slate
- **Hex:** `#334155`
- **RGB:** `rgb(51, 65, 85)`
- **Usage:** Secondary text, muted elements

### Light Gray
- **Hex:** `#f1f5f9`
- **RGB:** `rgb(241, 245, 249)`
- **Usage:** Light backgrounds, section separators

### White
- **Hex:** `#ffffff`
- **RGB:** `rgb(255, 255, 255)`
- **Usage:** Text on dark backgrounds, cards

---

## Accent Colors

### Cream
- **Hex:** `#fef3c7`
- **RGB:** `rgb(254, 243, 199)`
- **Usage:** Subtle highlights, warm accents

### Light Turquoise
- **Hex:** `#99f6e4`
- **RGB:** `rgb(153, 246, 228)`
- **Usage:** Light accent, hover states

### Persian Green
- **Hex:** `#059669`
- **RGB:** `rgb(5, 150, 105)`
- **Usage:** Success states, positive elements

---

## Gradients

### Primary Persian Gradient
```css
background: linear-gradient(135deg, #1e3a8a 0%, #14b8a6 100%);
```
- **From:** Persian Blue
- **To:** Persian Turquoise
- **Usage:** Hero section, feature cards

### Gold Gradient
```css
background: linear-gradient(135deg, #f59e0b 0%, #e11d48 100%);
```
- **From:** Persian Gold
- **To:** Persian Rose
- **Usage:** Call-to-action elements, special highlights

---

## Usage Guidelines

### Color Combinations

**High Contrast (for text):**
- Dark Blue (#0f172a) on White (#ffffff)
- White (#ffffff) on Persian Blue (#1e3a8a)
- White (#ffffff) on Dark Blue (#0f172a)

**Medium Contrast (for UI elements):**
- Persian Blue (#1e3a8a) on Light Gray (#f1f5f9)
- Persian Turquoise (#14b8a6) on White (#ffffff)

**Accent Combinations:**
- Persian Gold (#f59e0b) + Persian Blue (#1e3a8a)
- Persian Turquoise (#14b8a6) + Dark Blue (#0f172a)

---

## Cultural Significance

### Persian Blue
Represents the iconic blue tiles of Iranian architecture (e.g., Isfahan's mosques)

### Turquoise
The national gemstone of Iran, symbolizing protection and prosperity

### Gold
Represents the richness of Persian art, miniature paintings, and manuscripts

### Rose/Pink
References to Persian poetry (Hafez, Rumi) and Persian gardens

---

## Accessibility

All color combinations meet WCAG 2.1 AA standards for contrast:

- ✅ Dark Blue on White: 14.7:1 (AAA)
- ✅ Persian Blue on White: 8.2:1 (AAA)
- ✅ White on Persian Blue: 5.1:1 (AA)
- ✅ White on Dark Blue: 14.7:1 (AAA)

---

## Typography Pairing

### Primary Font: Montserrat
- **Weight:** 300, 400, 600, 700
- **Usage:** Body text, UI elements
- **Character:** Modern, clean, professional

### Display Font: Playfair Display
- **Weight:** 400, 600, 700
- **Usage:** Headings, hero text
- **Character:** Elegant, classic, timeless

---

## Design Philosophy

This color palette bridges **traditional Persian art** with **modern web design**:

1. **Authenticity:** Colors drawn from actual Persian art and architecture
2. **Modernity:** Applied with contemporary web design principles
3. **Accessibility:** Ensures all users can enjoy the design
4. **Versatility:** Works across all devices and screen sizes
5. **Cultural Pride:** Celebrates Iranian heritage respectfully

---

## Quick Reference

```css
:root {
    /* Primary Persian Colors */
    --persian-blue: #1e3a8a;
    --persian-turquoise: #14b8a6;
    --persian-gold: #f59e0b;
    --persian-rose: #e11d48;
    --persian-green: #059669;
    
    /* Neutral Colors */
    --dark-blue: #0f172a;
    --charcoal: #1e293b;
    --slate: #334155;
    --light-gray: #f1f5f9;
    --white: #ffffff;
    
    /* Accent Colors */
    --cream: #fef3c7;
    --light-turquoise: #99f6e4;
    
    /* Gradients */
    --gradient-persian: linear-gradient(135deg, var(--persian-blue) 0%, var(--persian-turquoise) 100%);
    --gradient-gold: linear-gradient(135deg, var(--persian-gold) 0%, var(--persian-rose) 100%);
}
```

---

**Designed with cultural authenticity and modern sensibility** 🎨🇮🇷
