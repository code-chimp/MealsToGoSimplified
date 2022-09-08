import React, { createContext, ReactNode, useEffect, useState } from 'react';
import IMapCoords from '../../@interfaces/Geo/IMapCoords';
import { locationRequest, locationTransform } from './location.service';

export interface ILocationContext {
  keyword: string;
  search: (s: string) => void;
  location: IMapCoords | null;
  isLoading: boolean;
  error: any;
}

export const LocationContext = createContext<ILocationContext>({
  keyword: 'San Francisco',
  search: (s: string) => {
    console.log(s);
  },
  location: null,
  isLoading: false,
  error: null,
});

export const LocationContextProvider = ({ children }: { children: ReactNode }) => {
  const [keyword, setKeyword] = useState<string>('San Francisco');
  const [location, setLocation] = useState<IMapCoords | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const onSearch = (searchTerm: string) => {
    setIsLoading(true);
    setKeyword(searchTerm);
  };

  useEffect(() => {
    if (keyword.length) {
      locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then(loc => {
          setLocation(loc);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err);
          setIsLoading(false);
        });
    }
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ keyword, search: onSearch, location, isLoading, error }}>
      {children}
    </LocationContext.Provider>
  );
};
