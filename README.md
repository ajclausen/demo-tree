# Complete Tree Care Website

A modern, responsive website for Complete Tree Care, a professional tree service company based in Indianapolis. Built with React, TypeScript, and Tailwind CSS.

## 🌳 Features

- Modern, responsive design
- Interactive service pages
- Contact form
- Career opportunities page
- Blog section
- Photo gallery
- Emergency service contact information
- Mobile-friendly navigation

## 🚀 Tech Stack

- **Frontend Framework**: React 18.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development Server**: Vite Dev Server
- **Code Quality**: ESLint

## 📁 Project Structure

```
complete-tree-care/
├── public/
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── pages/
│   │   ├── services/
│   │   │   ├── TreeRemoval.tsx
│   │   │   ├── TreeTrimming.tsx
│   │   │   ├── TreeCare.tsx
│   │   │   ├── ResidentialServices.tsx
│   │   │   ├── CommercialServices.tsx
│   │   │   ├── StumpRemoval.tsx
│   │   │   └── StormDamage.tsx
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Gallery.tsx
│   │   ├── Home.tsx
│   │   └── Services.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd complete-tree-care
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Key Components

### Header (`src/components/Header.tsx`)
- Responsive navigation menu
- Services dropdown
- Emergency contact button
- Mobile-friendly hamburger menu

### Footer (`src/components/Footer.tsx`)
- Company information
- Quick links
- Service links
- Contact information
- Social media links

### Pages
- **Home**: Company overview and featured services
- **Services**: Comprehensive list of tree care services
- **About**: Company history and background
- **Contact**: Contact form and company information
- **Career**: Job listings and application form
- **Blog**: Tree care articles and tips
- **Gallery**: Portfolio of completed projects

## 🎨 Styling

The project uses Tailwind CSS for styling with a custom color scheme:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      green: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
    },
  },
},
```

## 📝 Development Guidelines

1. **Component Structure**
   - Use functional components with TypeScript
   - Implement React hooks for state management
   - Keep components focused and maintainable

2. **Styling**
   - Use Tailwind CSS utility classes
   - Follow mobile-first responsive design
   - Maintain consistent spacing and typography

3. **Code Quality**
   - Follow ESLint rules
   - Use TypeScript types/interfaces
   - Write clean, documented code

4. **Performance**
   - Optimize images
   - Implement lazy loading where appropriate
   - Minimize bundle size

## 🔄 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## 📦 Dependencies

```json
{
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.3"
  }
}
```

## 🌐 Browser Support

The website is tested and supported on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔒 Security

- Forms include CSRF protection
- Input validation and sanitization
- Secure contact form submission

## 🚀 Deployment

The website can be deployed to any static hosting service:
1. Run `npm run build`
2. Deploy the `dist` directory
3. Configure redirects for client-side routing

## 📞 Support

For support or questions, contact:
- Email: completetreecare@comcast.net
- Phone: (317) 862-0444

## 📄 License

All rights reserved. Complete Tree Care © 2024