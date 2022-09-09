interface IColors {
  colors: {
    bg: {
      primary: string;
      secondary: string;
    };
    brand: {
      primary: string;
      secondary: string;
      muted: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      inverse: string;
      info: string;
      error: string;
      success: string;
    };
    ui: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      disabled: string;
      error: string;
      success: string;
      activeIcon: string;
      inactiveIcon: string;
    };
  };
}

export default IColors;
