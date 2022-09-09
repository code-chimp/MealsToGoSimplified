import ICoords from './ICoords';

interface ILocation {
  geometry: {
    location: ICoords;
    viewport: {
      northeast: ICoords;
      southwest: ICoords;
    };
  };
}

export default ILocation;
