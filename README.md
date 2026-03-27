# Babato YoungBoys FC - Website

A professional, modern website for Babato YoungBoys FC football club featuring multiple team divisions (U10, U13, U15, Girls), staff directory, news carousel, fixtures schedule, photo gallery, and video highlights.

## Features

- **Multiple Team Pages**: Dedicated pages for U10, U13, U15, and Girls teams with player rosters
- **Staff Directory**: Complete staff information with photo gallery and modal functionality
- **News Carousel**: Auto-rotating news section with latest club announcements
- **Fixtures Schedule**: Upcoming matches and tournament information
- **Photo Gallery**: Comprehensive photo gallery with 40+ images and lightbox modal
- **Video Highlights**: Embedded TikTok video highlights from the club
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop
- **Modern UI**: Professional dark theme with navy and amber color scheme
- **Accessibility**: Semantic HTML5 and keyboard navigation support

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, gradients, animations, Flexbox/Grid
- **JavaScript**: Vanilla JS for interactivity (no frameworks)
- **Fonts**: Google Fonts (Poppins, Oswald)
- **Icons**: Font Awesome 6.4.0

## Project Structure

```
├── index.html              # Homepage with hero, news, fixtures, gallery, videos
├── u10.html               # U10 team page with 12 players
├── u13.html               # U13 team page with 12 players
├── u15.html               # U15 team page with 12 players
├── girls.html             # Girls team page with 12 players
├── staff.html             # Staff directory page
├── gallery.html           # Full photo gallery with all images
├── styles.css             # Main stylesheet
├── animations.css         # Animation styles
├── teams.css              # Team pages specific styles
├── script.js              # Interactive functionality
├── vercel.json            # Vercel deployment configuration
├── package.json           # Project metadata and scripts
└── assets/                # Images and logos
    ├── logo.png
    ├── FFTG.webp
    ├── 250px-Ghana_Football_Association_logo.webp
    ├── united-nations-logo-design-1024x559.webp
    └── [40+ player and event photos]
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Babato YoungBoys FC website"
git branch -M main
git remote add origin https://github.com/yourusername/babato-youngboys-fc.git
git push -u origin main
```

2. Visit [vercel.com](https://vercel.com) and import your GitHub repository
3. Vercel will automatically detect the configuration from `vercel.json`
4. Your site will be live at `your-project.vercel.app`

### Deploy to GitHub Pages

1. Enable GitHub Pages in your repository settings
2. Select "Deploy from a branch"
3. Choose the `main` branch and root directory
4. Your site will be available at `https://yourusername.github.io/babato-youngboys-fc`

### Local Development

Run a local server:
```bash
npm start
# or
python -m http.server 8000
```

Visit `http://localhost:8000` in your browser.

## Customization

### Update Club Information

- Logo: Replace `logo.png` with your club logo
- Colors: Edit CSS variables in `styles.css`
- Teams: Add/remove team pages (u10.html, u13.html, etc.)
- Players: Update player information in team pages
- Staff: Modify staff members in `staff.html`

### Add Images

- Place player photos in the root directory
- Update gallery items in `gallery.html`
- Update team pages with respective player photos

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - See LICENSE file for details

## Contact

For inquiries about the club, visit our website or contact us via TikTok: [@babatoyoungboys_fc](https://www.tiktok.com/@babatoyoungboys_fc)

---

**Last Updated**: March 2026
