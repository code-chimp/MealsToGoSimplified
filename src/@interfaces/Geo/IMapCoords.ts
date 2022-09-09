import ICoords from './ICoords';

interface IMapCoords extends ICoords {
  viewport: {
    northeast: ICoords;
    southwest: ICoords;
  };
}

export default IMapCoords;
