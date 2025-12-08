# Developer Guide

This guide provides instructions for developers working on the Magic 8 Ball project, including notes on standalone development and integration with the LAB Digital Workshop.

## Project Structure

- `index.html`: The main HTML file containing the structure of the application.
- `style.css`: The primary stylesheet. All styling, including animations, is located here.
- `script.js`: The core JavaScript file that handles all logic, including user interaction, answer generation, and animations.
- `analytics.js`: Placeholder for analytics scripts. The `pages-demo` branch contains the production version of this file.

## Getting Started

1.  Clone the repository.
2.  Open `index.html` in your browser.
3.  For the best development experience, use a live server extension (like VS Code's Live Server) to see changes instantly.

## Code Style

- **CSS**: Use descriptive class names. Animations and transitions should be smooth and performant.
- **JavaScript**: Code should be clean and well-commented. Use ES6+ features where appropriate.

## LAB Digital Workshop Integration

To ensure the Magic 8 Ball integrates seamlessly as an iframe within the main LAB application, follow the `styling_guide.md`.

### 1. Applying the Theme

Copy the CSS variables from `styling_guide.md` into the top of `style.css`. Replace existing hard-coded values (colors, fonts) with the corresponding `var()`:

**Example:**
```css
/* In style.css */
body {
    background-color: var(--background-color);
    color: var(--text-color);
    /* ... etc. */
}
```

### 2. Theme Synchronization

Add the `message` event listener from `styling_guide.md` to `script.js`. This allows the iframe to listen for theme changes from the parent LAB application and apply the `.dark-theme` class to the `<html>` element accordingly.

```javascript
// Add this to script.js
window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'themeChange') {
        const isDark = event.data.theme === 'dark-theme';
        document.documentElement.classList.toggle('dark-theme', isDark);
    }
});
```

## Contributing

Please see the main `README.md` for contribution guidelines. When submitting a pull request, ensure your code is formatted and adheres to the styles mentioned above.