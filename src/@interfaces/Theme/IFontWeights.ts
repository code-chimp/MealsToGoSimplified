type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

interface IFontWeights {
  fontWeights: {
    regular: FontWeight;
    medium: FontWeight;
    bold: FontWeight;
  };
}

export default IFontWeights;
