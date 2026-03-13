# Ridoy Kumar Roy — Interactive Portfolio

Live Demo: [https://sagorrkr.github.io/portfolio_iOS26/](https://sagorrkr.github.io/portfolio_iOS26/)

## Overview

A personal portfolio website with an iOS-inspired tile layout, WebGL animated background, glassmorphism UI, dark/light mode, and full bilingual (English/Chinese) support. Built entirely with vanilla HTML, CSS, and JavaScript — no frameworks.

## Technical Features

### WebGL Animated Background
- Custom GLSL fragment shader rendered via Three.js
- Mouse-reactive fluid simulation — background flows toward cursor position
- Automatic color palette cycling every 45 seconds
- Click anywhere on the background to trigger an instant color change
- Smooth color interpolation using per-frame lerp on GPU uniforms

### Glassmorphism UI
- Second WebGL renderer layer (`glass-layer`) renders a frosted glass overlay on the portfolio container
- Custom GLSL glass shader with chromatic aberration, noise-based distortion, edge glow, and top-lighting gradient
- Glass layer adapts between dark mode (subtle) and light mode (frosted) via a uniform toggle
- Glass layer hidden on mobile for performance

### iOS-Inspired Tile Layout
- Bento-grid style tile system using CSS Grid (left: 7×11, right: 13×11)
- Left section: profile picture, resume link, name/title, dark/light mode toggle, language toggle, GitHub, email, phone, LinkedIn
- Right section: 6 content tiles (Overview, Experience, Education, Projects & Awards, Skills, Certificates)
- Tile entrance animations with staggered `animationDelay`
- Smooth tile-to-content and content-to-tile transitions with opacity and transform

### Theme Switching (Dark/Light Mode)
- Toggle button in the left tile grid
- CSS variables for all theme-sensitive colours (`--tile-bg-dark/light`, `--tile-hover-dark/light`, etc.)
- Smooth `0.5s ease` CSS transitions on background, colour, and shadow
- WebGL background and glass shader both update on mode switch via `updateBackgroundMode()`

### Bilingual Support (English / Chinese)
- Full translation object in `script.js` covering all UI text, section content, and tile labels
- Toggle button switches between English and Simplified Chinese instantly
- All 6 content sections translated: Overview, Skills, Education, Experience, Certifications, Projects & Awards
- Chinese mode translates tile labels, back button, mode toggle label, and all body content

### Content Sections
- **Overview** — personal bio and research interests
- **Experience** — Digital Ad Ops at ServicEngine Ltd. and Research Assistant at NJUPT
- **Education** — Master's at Hohai University, Bachelor's at NJUPT, secondary education
- **Skills** — ML/AI, programming, databases, Ad tech, Visualisation, tools, OS, languages
- **Certifications** — 8 certificates (Google, Microsoft, Coursera, Udemy) with direct links
- **Projects & Awards** — 6 published research papers with links, scholarships, community award

### Interactive Elements
- Email and phone tiles copy to clipboard on click with a temporary tooltip confirmation
- Resume tile opens Google Docs resume in a new tab
- GitHub and LinkedIn tiles link directly to profiles
- All certification and publication entries are clickable links

### Responsive Design
- Breakpoints at 1200px (tablet) and 768px (mobile)
- Mobile layout: stacks left and right sections vertically, single-column tile grid
- Left section switches to 4-column grid on mobile
- Glass layer disabled on mobile; container backdrop-filter increased to compensate
- `aspect-ratio: 20/11` on desktop, `auto` height on mobile

## Project Structure

```
portfolio_iOS26/
├── index.html       # Structure, tile layout, section containers
├── styles.css       # All styling, CSS variables, dark/light, responsive
├── script.js        # Content data, translations, tile interactions, mode/language toggle
├── webgl.js         # Three.js WebGL background + glass layer shaders
├── self.jpg         # Profile picture (used as background-image in .profile-image)
└── logo.png         # Favicon
```

## Technologies Used

- HTML5
- CSS3 (CSS Variables, Grid, Flexbox, backdrop-filter)
- JavaScript ES6+ (vanilla, no frameworks)
- Three.js r128 (WebGL background and glass layer)
- GLSL (custom fragment shaders)
- GitHub Pages for hosting

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/sagorrkr/portfolio_iOS26.git
```

2. Navigate to the project directory:
```bash
cd portfolio_iOS26
```

3. Open in browser directly or use a local server:
```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome (latest) | ✅ Full |
| Firefox (latest) | ✅ Full |
| Safari (latest) | ✅ Full |
| Edge (latest) | ✅ Full |
| Mobile browsers | ✅ Responsive layout |

> WebGL required for animated background. Falls back gracefully if unavailable.

## License

This project is licensed under the MIT License.

## Contact

- GitHub: [@sagorrkr](https://github.com/sagorrkr)
- LinkedIn: [linkedin.com/in/sagorrkr](https://www.linkedin.com/in/sagorrkr/)
- Email: ridoyrkr@outlook.com
