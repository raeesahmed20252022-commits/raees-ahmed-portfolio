# Raees Ahmed - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full Stack Developer with 5+ years of experience in Flutter, React, and AI-powered applications.

## Features

- **Modern React Setup**: Built with Vite for fast development and optimized builds
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Architecture**: Reusable widgets and components for maintainable code
- **Routing**: Client-side routing with React Router
- **Consistent Styling**: Centralized color system and design tokens

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Package Manager**: npm

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Customizable button component
│   ├── Card.jsx        # Card layout component
│   ├── Header.jsx      # Site header with navigation
│   └── Footer.jsx      # Site footer
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About page
│   ├── Projects.jsx    # Projects showcase
│   └── Contact.jsx     # Contact form
├── constants/          # App constants
│   └── AppColors.js    # Color palette and design tokens
├── App.jsx             # Main app component with routing
├── index.css           # Global styles and Tailwind imports
└── main.jsx            # App entry point
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Colors and Theming

The app uses a centralized color system defined in `src/constants/AppColors.js`. To customize the color scheme:

1. Update the color values in `AppColors.js`
2. The colors are automatically applied throughout the application via Tailwind CSS classes

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to `src/App.jsx`
3. Update the navigation in `src/components/Header.jsx`

### Component Development

The project follows a component-based architecture with reusable widgets:

- Keep components focused and single-purpose
- Use the established color system from `AppColors.js`
- Follow the existing naming conventions
- Place reusable components in `src/components/`

## Design Principles

- **Modularity**: Components are designed to be reusable and composable
- **Consistency**: Centralized color system and design tokens
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized builds with Vite and code splitting
- **Responsiveness**: Mobile-first design with Tailwind CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

- **Email**: raeesahmed20252022@gmail.com
- **Phone**: 0317 5639776
- **GitHub**: [raees-ahmed-portfolio](https://github.com/raeesahmed20252022-commits/raees-ahmed-portfolio)
- **LinkedIn**: [linkedin.com/in/raees-ahmed-b32002356](https://www.linkedin.com/in/raees-ahmed-b32002356/)

## 🚀 Live Demo

Visit the live portfolio: [raeesahmed20252022-commits.github.io/raees-ahmed-portfolio](https://raeesahmed20252022-commits.github.io/raees-ahmed-portfolio/)

## License

This project is open source and available under the [MIT License](LICENSE).