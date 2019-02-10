// Main theming -- https://www.colourhunt.com/palette/cjf9fztmifrj501085ounry1s
// Gives our website a friendly beach feel
// Later on we can possibly add theming for times of the year so obviously the provided colors below are for summer/spring

// https://coolors.co/75dddd-508991-172a3a-004346-09bc8a
// Switched to using styled-components-theme library to handle theming. rgb wasn't a recognized definition. Now we will add a ThemeProvider to our index.js to handle the theming from here
const colors = {
    lightblue: '#17A4C2',
    midblue: '#135ACE',
    purple: '#A04CF5',
    midnight: '#1A3F5A',
    darkpurple: '#734F9D',
    salmon: '#F6485A',
    darkgrey: '#508991',
    darkblue: '#333DF5',
    darkgreen: '#004346',
    lightgreen: '#09BC8A',
    warning: '#DC143C',
    success: '#7FFF00',
    information: '#F0E68C'
};

// https://blog.visme.co/website-color-schemes/ -- number 25
// const vibrant = {
//     yellow: '#F8E9A1',
//     pink: '#F76C6C',
//     lightblue: '#A8D0E6',
//     lightdark: '#374785',
//     darkblue: '#24305E',
//     warning: '#DC143C',
//     success: '#7FFF00',
//     information: '#F0E68C'
// };

// const common = {
//     warning: '#DC143C',
//     success: '#7FFF00',
//     information: '#F0E68C'
// };

export default colors;