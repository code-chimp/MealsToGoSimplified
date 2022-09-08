import IMapCoords from '../../@interfaces/Geo/IMapCoords';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { locationRequest, locationTransform } from './location.service';

export interface ILocationContext {
  keyword: string;
  search: (s: string) => void;
  location: IMapCoords | null;
  isLoading: boolean;
  error: any;
}

export const LocationContext = createContext<ILocationContext>({
  keyword: 'san francisco',
  search: (s: string) => {
    console.log(s);
  },
  location: null,
  isLoading: false,
  error: null,
});

export const LocationContextProvider = ({ children }: { children: ReactNode }) => {
  const [keyword, setKeyword] = useState<string>('san francisco');
  const [location, setLocation] = useState<IMapCoords | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const onSearch = (searchTerm: string) => {
    setIsLoading(true);

    const st = searchTerm.toLowerCase();
    setKeyword(st);

    locationRequest(st)
      .then(locationTransform)
      .then(loc => {
        setLocation(loc);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    onSearch(keyword);
  }, []);

  return (
    <LocationContext.Provider
      value={{ keyword, search: onSearch, location, isLoading, error }}>
      {children}
    </LocationContext.Provider>
  );
};
