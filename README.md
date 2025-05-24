# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Project Folder Structure
``` bash
client/
├── src/
│   ├── assets/                  # Static files like images, icons, etc.
│   ├── components/              # Reusable UI components
│   │   ├── CTA.jsx              # Call-to-action section
│   │   ├── Footer.jsx           # Footer section
│   │   ├── Form.jsx             # Form component
│   │   ├── Hero.jsx             # Hero section
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── Process.jsx          # Process steps UI
│   │   ├── SubmissionTable.jsx  # Table to show submissions
│   │   └── Testimonials.jsx     # Testimonials section
│   ├── context/
        ├── SubmissionContext.jsx                 # React Context for state management
│   ├── App.jsx                  # Root component
│   ├── App.css                  # App-specific styles
│   ├── index.css                # Global styles
│   └── main.jsx                 # App entry point
├── public/                      # Public files (optional)
├── .gitignore                   # Git ignore rules
├── package.json                 # Project metadata and dependencies
└── README.md                    # Project documentation

```
