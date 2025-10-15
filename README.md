# Austin IPA Website

Clean, modern website for the Austin Iranian-American Professional Association.

## Features

- Modern Persian-inspired design with gold accents
- Fully responsive (mobile, tablet, desktop)
- Animated statistics and smooth scrolling
- Contact form with validation
- Zero dependencies - pure HTML/CSS/JS

## Structure

```
├── index.html          # Main website file
├── css/
│   └── styles.css      # All styles
└── js/
    └── script.js       # Interactive features
```

## Local Preview

```bash
python3 -m http.server 8090
# Open http://localhost:8090
```

## Deploy to Cloudflare Pages

1. Go to https://dash.cloudflare.com/
2. Navigate to Workers & Pages → Create
3. Connect to GitHub: `masoud-heydari/AustinIPA`
4. Branch: `main`
5. Build settings: Leave empty (static site)
6. Deploy

Your site will be live at `https://[project-name].pages.dev`

## Technologies

- HTML5
- CSS3 (Grid, Flexbox, CSS Variables)
- Vanilla JavaScript (ES6+)
- Google Fonts (Raleway, Crimson Text)

## License

© 2025 Austin Iranian-American Professional Association
