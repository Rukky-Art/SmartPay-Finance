# SmartPay Finance — React + Tailwind CSS

A full React rebuild of [smartpayfinance.com](https://www.smartpayfinance.com) using:
- **React 18** + **Vite**
- **Tailwind CSS v3** (installed locally, not via CDN)
- **Lucide React** for icons
- **DM Sans** + **Cabinet Grotesk** fonts (Google Fonts)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start dev server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

---

## Project Structure

```
smartpay-finance/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css              ← Tailwind directives + Google Fonts
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── Operations.jsx
        ├── Team.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Sections

| Section     | Description                                         |
|-------------|-----------------------------------------------------|
| Navbar      | Sticky, transparent → white on scroll, mobile menu |
| Hero        | Dark green mesh bg, phone mockup, floating cards    |
| About       | Executive summary, two pillars, highlights          |
| Services    | 6 product/service cards with icons                  |
| Operations  | 3 operation pillars + aspirations banner            |
| Team        | 5 leadership cards with initials avatars            |
| Contact     | Contact info + callback request form                |
| Footer      | Link columns + email subscribe                      |

## Customization

- **Colors**: Edit `tailwind.config.js` → `theme.extend.colors.primary`
- **Fonts**: Change the Google Fonts URL in `src/index.css` and font families in `tailwind.config.js`
- **Content**: All section data lives as arrays inside each component file — easy to update

## Adding Images

Replace avatar initials and gradient placeholders with real images:
```jsx
// In Team.jsx, replace the initials div with:
<img src="/images/team/member.jpg" alt={member.name} className="w-16 h-16 rounded-2xl object-cover" />
```

Place images in the `public/images/` folder.
