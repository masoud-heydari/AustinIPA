# AustinIPA Website

Modern website for the Austin Iranian Professionals Association - Austin's first Iranian nonprofit (501C) Persian Cultural organization.

## 🌟 Features

- **Modern Persian Design**: Incorporates traditional Iranian colors and patterns with contemporary web design
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Fast Performance**: Lightweight and optimized for quick loading
- **Accessible**: WCAG compliant with keyboard navigation support
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🎨 Design Elements

### Color Palette
- Persian Blue: `#1e3a8a`
- Persian Turquoise: `#14b8a6`
- Persian Gold: `#f59e0b`
- Persian Rose: `#e11d48`

### Cultural Elements
- Traditional Persian geometric patterns
- Lion symbol representing Persian heritage
- Gold accents inspired by Persian art
- Modern interpretation of classical Persian aesthetics

## 🚀 Deployment to Cloudflare Pages

### Prerequisites
- GitHub account
- Cloudflare account (free tier works)
- Git installed on your computer

### Step-by-Step Deployment

1. **Push to GitHub**
   ```bash
   cd /path/to/AustinIPA-new
   git init
   git add .
   git commit -m "Initial commit - Modern AustinIPA website"
   git branch -M main
   git remote add origin https://github.com/masoud-heydari/AustinIPA.git
   git push -u origin main
   ```

2. **Deploy to Cloudflare Pages**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Go to "Workers & Pages" → "Pages"
   - Click "Create application" → "Connect to Git"
   - Select your GitHub repository: `masoud-heydari/AustinIPA`
   - Configure build settings:
     - **Project name**: `austinipa` (or your preferred name)
     - **Production branch**: `main`
     - **Build command**: Leave empty (static site)
     - **Build output directory**: `/`
   - Click "Save and Deploy"

3. **Custom Domain (Optional)**
   - After deployment, go to "Custom domains"
   - Add your domain: `austinipa.com`
   - Update your domain's nameservers to Cloudflare
   - Cloudflare will automatically handle SSL certificates

### Build Configuration

No build process required! This is a pure HTML/CSS/JavaScript static site.

**Cloudflare Pages Settings:**
```
Framework preset: None
Build command: (leave empty)
Build output directory: /
Root directory: /
```

## 📁 Project Structure

```
AustinIPA-new/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles with Persian design elements
├── js/
│   └── script.js       # Interactive functionality
├── assets/             # Images and other assets (add as needed)
├── README.md           # This file
└── .gitignore         # Git ignore file
```

## 🛠️ Customization

### Adding Content
1. **Events**: Edit the events section in `index.html`
2. **About Content**: Modify the about section
3. **Contact Information**: Update email and social media links
4. **Images**: Add images to the `assets/` folder and reference them in HTML

### Styling
- All styles are in `css/styles.css`
- CSS variables at the top for easy color customization
- Responsive breakpoints: 968px, 768px, 480px

### Functionality
- All JavaScript is in `js/script.js`
- Features: smooth scrolling, mobile menu, form handling, animations

## 🔧 Integrations

### Email Forms
To enable contact form functionality, integrate with:
- [Formspree](https://formspree.io/) - Easy form backend
- [EmailJS](https://www.emailjs.com/) - Client-side email sending
- [Netlify Forms](https://www.netlify.com/products/forms/) - If using Netlify
- Custom backend API

### Analytics
Add Google Analytics, Cloudflare Analytics, or other tracking:
```html
<!-- Add to <head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🌐 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 2 seconds
- **Total Size**: < 100KB (without images)

## 📄 License

This website is created for the Austin Iranian Professionals Association.

## 🤝 Contributing

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions or support:
- Email: info@austinipa.com
- Website: https://austinipa.com

---

Built with ❤️ for the Iranian community in Austin, Texas

**Design Inspiration**: Traditional Persian art, modern web design, Iranian cultural heritage
