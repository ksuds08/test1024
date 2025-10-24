// Tailwind CSS Configuration File

/**
 * @type {import('tailwindcss').Config}
 */
const path = require('path');

module.exports = {
  content: [
    // Specify paths to all your template files.
    path.join(__dirname, './src/**/*.{js,jsx,ts,tsx}'),
    path.join(__dirname, './public/index.html'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

/**
 * @description Validates the template file paths efficiently.
 * @param {string[]} paths - Array of file paths to validate.
 * @throws Will throw an error if any path is invalid.
 */
function validatePaths(paths) {
  if (!Array.isArray(paths)) {
    throw new Error('Paths should be an array.');
  }
  paths.forEach(path => {
    if (typeof path !== 'string' || !path.length) {
      throw new Error(`Invalid path: ${path}`);
    }
  });
}

// Validate paths during configuration setup
try {
  validatePaths(module.exports.content);
} catch (error) {
  console.error('Error validating paths:', error);
}