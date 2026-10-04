// Shared by index.html and projects.html. Change the palette or fonts here, once.
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        paper: '#FAF8F5',       // warm off-white background
        ink: '#2B2926',         // deep charcoal text
        accent: '#4A5D45',      // muted forest green, used sparingly
        'accent-dark': '#3A4A36',
        line: '#E4DDD1',        // warm divider colour
      },
    },
  },
};
