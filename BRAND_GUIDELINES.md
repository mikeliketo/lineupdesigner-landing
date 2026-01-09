# LineupDesigner Brand Guidelines

## Sammanfattning

LineupDesigner är ett modernt verktyg för hockeytränare som vill skapa, hantera och dela laguppställningar. Plattformen riktar sig till ungdomshockey (U8-U18) i Norden och Europa. Designen är mörk, professionell och teal-accentuerad - inspirerad av is och hockey. Tonaliteten är direkt, hjälpsam och utan fluff. Vi pratar till tränare som peers, inte som kunder.

---

## Färgpalett

| Namn | Hex | Användning |
|------|-----|------------|
| Background Deep | `#0a1215` | Huvudbakgrund |
| Background Primary | `#0f2a32` | Cards, sections |
| Background Card | `#152d35` | Elevated cards |
| Border | `#1a3d48` | Kantlinjer |
| Accent Teal | `#6ab8c8` | CTA, highlights |
| Accent Glow | `#7dd3e8` | Glow effects |
| Text Primary | `#e8f0f0` | Rubriker |
| Text Secondary | `#c4d6da` | Brödtext |
| Text Muted | `#a8c4ca` | Sekundär info |

---

## Typografi

### Primär: Clash Display
- **Källa:** https://www.fontshare.com/fonts/clash-display
- **Användning:** Logo, rubriker, hero-text
- **Vikter:** Light (300), Regular (400), Medium (500), Semibold (600)
- **Letter-spacing:** 0.02-0.3em för logo, 0 för rubriker

### Sekundär: Inter / Geist Sans
- **Källa:** Google Fonts / Vercel
- **Användning:** Brödtext, UI-element, knappar
- **Vikter:** Regular (400), Medium (500), Semibold (600)
- **Letter-spacing:** 0

### Tabell

| Element | Font | Vikt | Storlek | Line-height |
|---------|------|------|---------|-------------|
| Logo | Clash Display | 300 | 20-24px | 1 |
| H1 | Clash Display | 600 | 48-72px | 1.1 |
| H2 | Clash Display | 600 | 36-48px | 1.2 |
| H3 | Clash Display | 500 | 24-32px | 1.3 |
| Body | Inter | 400 | 16-18px | 1.6 |
| Body Small | Inter | 400 | 14px | 1.5 |
| UI/Labels | Inter | 500 | 12-14px | 1.4 |
| Buttons | Inter | 600 | 14-16px | 1 |

### CSS Import
```css
@import url('https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap');
```

### CSS Variables
```css
--font-display: "Clash Display", ui-sans-serif, system-ui, sans-serif;
--font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
```

---

## Skapa (Do's)

1. Använd mörka bakgrunder med teal-accenter
2. Håll UI rent och minimalistiskt
3. Använd subtila glow-effekter på interaktiva element
4. Skriv direkt och koncist - tränare har ont om tid
5. Visa värde innan du ber om något
6. Använd svenska som default, stöd 9 språk
7. Prioritera mobil-responsivitet
8. Använd hockey-terminologi korrekt (kedjor, backpar, PP, PK)
9. Håll border-radius max 8px
10. Testa alltid i dark mode först

---

## Gör inte (Don'ts)

1. Använd ALDRIG emojis i UI
2. Ingen neon eller för stark kontrast
3. Undvik generiska stockfoton - använd äkta hockey
4. Skriv inte "för alla" - vi är för tränare
5. Använd inte Comic Sans, Papyrus eller liknande
6. Ingen rainbow/gradient-text utom accent-glow
7. Undvik animations längre än 1.5s
8. Säg inte "revolutionerande" eller "AI-powered" i marknadsföring
9. Använd inte ljust tema som default
10. Blanda inte svenska och engelska i samma mening

---

## Logo

**Format:** "LineupDesigner" eller "Lineup**Designer**" med accent på "Designer"

**Tillåtet:**
- Teal accent på "Designer"
- Letter-spacing 0.25-0.3em
- Clash Display Light/Regular
- Monokrom vit version

**Ej tillåtet:**
- Ikon/symbol utan text
- Färgglad gradient
- Skuggor eller 3D-effekter
- Ändra proportioner

---

## Tonalitet

| Gör | Undvik |
|-----|--------|
| "Bygg din lineup på 2 minuter" | "Revolutionera din tränarupplevelse" |
| "Spara tid på laguttagningar" | "AI-driven lineup-optimering" |
| "Gjord av tränare, för tränare" | "Den ultimata lösningen för..." |
| "Fungerar offline" | "Molnbaserad next-gen plattform" |

---

## Spacing

- **Base unit:** 4px
- **Component padding:** 16-24px
- **Section spacing:** 64-128px
- **Card gap:** 16-24px
- **Border radius:** 4-8px (max 8px)

---

*LineupDesigner - Built by coaches, for coaches.*
