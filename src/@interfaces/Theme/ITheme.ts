import IColors from './IColors';
import IFontSizes from './IFontSizes';
import IFontWeights from './IFontWeights';
import IFonts from './IFonts';
import ILineHeights from './ILineHeights';
import IThemeSizes from './ISizes';
import ISpace from './ISpace';

interface ITheme
  extends IColors,
    IFontSizes,
    IFontWeights,
    ILineHeights,
    IFonts,
    IThemeSizes,
    ISpace {}

export default ITheme;
