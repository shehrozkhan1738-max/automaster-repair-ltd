# Automaster Repair Ltd - Website

This is a premium automotive workshop garage website built with React, Vite, and Tailwind CSS.

## 🚀 How to view this on Chrome (GitHub Pages)

This project is configured for easy deployment to GitHub Pages.

### Option 1: Automatic Deployment (Recommended)

1.  Push this code to a new GitHub repository named `automaster-repair-ltd`.
2.  Go to your repository **Settings** > **Pages**.
3.  Under **Build and deployment** > **Source**, select **GitHub Actions**.
4.  The included workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site whenever you push to the `main` branch.

### 💻 Command Prompt Instructions

To push this code to GitHub for the first time without errors, run these commands in your terminal:

```bash
# Initialize the repository
git init

# Add all files
git add .

# Create the first commit
git commit -m "Initial commit: Automaster Repair Ltd Website"

# Rename branch to main
git branch -M main

# Link to your GitHub repository (Replace <YOUR_USERNAME> with your actual GitHub username)
git remote add origin https://github.com/<YOUR_USERNAME>/automaster-repair-ltd.git

# Push to GitHub
git push -u origin main
```

### Option 2: Manual Build

If you want to build the project locally:

```bash
npm install
npm run build
```

The production-ready files will be in the `dist/` folder.

## 🛠 Features

- **Mechanical Aesthetic**: Dark theme with steel grey gradients and metal sweep effects.
- **Tachometer Loader**: Custom CSS/SVG loading animation.
- **Registration Lookup**: Simulated vehicle detection via registration number.
- **Responsive Design**: Fully optimized for mobile and desktop.
- **Motion**: Smooth animations using `motion/react`.

## 📦 Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Motion
