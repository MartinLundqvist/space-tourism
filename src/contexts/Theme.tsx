const Theme = {
  colors: {
    dark: '#0B0D17',
    blue: '#D0D6F9',
    white: '#FFFFFF',
  },

  dimensions: {},

  // Refers to min-width > X condition
  mediaThresholds: {
    desktop: '768px',
    tablet: '481px',
    mobile: '320px',
  },
};

export type ThemeType = typeof Theme;

export default Theme;
