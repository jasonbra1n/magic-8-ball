# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2023-10-28

### Added
- **Theme Integration:** Implemented a full light/dark theme system using CSS variables to align with the LAB Digital Workshop styling guide.
- **Theme Synchronization:** The app now listens for `message` events from a parent window to automatically switch themes.
- **Theme Toggle Button:** Added a manual theme toggle button for standalone use, allowing users to switch between light and dark modes directly.

### Changed
- The 8-ball's appearance is now fixed to black, ensuring it remains consistent regardless of the selected theme.

## [1.0.0] - 2023-10-27

### Added
- Initial release of the Magic 8 Ball application.
- HTML structure with SVG for the answer triangle.
- CSS for styling, gradients, and animations (shake and float).
- JavaScript for random answer generation from a list of 20 classic responses.
- Easter egg functionality with a 1/50 chance for a special answer.
- Responsive design for desktop and mobile.
- Vibration effect on mobile devices.
- Interaction via button click or 'Enter' key press.