import ITheme from '../@interfaces/Theme/ITheme';

const theme: ITheme = {
  colors: {
    brand: {
      primary: '#696ac3',
      secondary: '#5d6cc6',
      muted: '#c6daf7',
    },
    ui: {
      primary: '#262626',
      secondary: '#757575',
      tertiary: '#f1f1f1',
      quaternary: '#ffffff',
      disabled: '#dedede',
      error: '#d0421b',
      success: '#138000',
      activeIcon: 'tomato',
      inactiveIcon: 'gray',
    },
    bg: {
      primary: '#ffffff',
      secondary: '#f1f1f1',
    },
    text: {
      primary: '#262626',
      secondary: '#757575',
      disabled: '#9c9c9c',
      inverse: '#ffffff',
      info: '#2182bd',
      error: '#d0421b',
      success: '#138000',
    },
  },
  fontSizes: {
    caption: 12,
    button: 14,
    body: 16,
    title: 20,
    h5: 24,
    h4: 34,
    h3: 45,
    h2: 56,
    h1: 112,
  },
  fontWeights: {
    regular: '400',
    medium: '500',
    bold: '700',
  },
  fonts: {
    body: 'Oswald_400Regular',
    heading: 'Lato_400Regular',
    monospace: 'Oswald_400Regular',
  },
  lineHeights: {
    title: 28,
    copy: 20,
  },
  sizes: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
    xxl: 128,
  },
  space: {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
  },
};

export default theme;
