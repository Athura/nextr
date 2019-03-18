// Main theming -- https://www.colourhunt.com/palette/cjf9fztmifrj501085ounry1s
// Gives our website a friendly beach feel
// Later on we can possibly add theming for times of the year so obviously the provided colors below are for summer/spring

// https://coolors.co/75dddd-508991-172a3a-004346-09bc8a
// Switched to using styled-components-theme library to handle theming. rgb wasn't a recognized definition. Now we will add a ThemeProvider to our index.js to handle the theming from here
const colors = {
  darkpurple: '#454054',
  purple: '#99679E',
  orange: '#FDA381',
  pink: '#F8717D',
  salmon: '#EC8298',
  gray: '#E3D4DC',
  warning: '#DC143C',
  success: '#7FFF00',
  information: '#F0E68C',
  background: '#F8F8F8',

  // container colors http://www.0to255.com/454054
  // bottom is the dark purple above
  top: '#a19cb3',
  middle: '#7d7596',
};

export default colors;
