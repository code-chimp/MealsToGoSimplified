import IMapCoords from './IMapCoords';

interface ILocation {
  geometry: {
    location: IMapCoords;
    viewport: {
      northeast: IMapCoords;
      southwest: IMapCoords;
    };
  };
}

export default ILocation;
