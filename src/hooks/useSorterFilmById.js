import { useMemo } from 'react';

export const useSorterFilmById = (data, IdFilms) => {
  //   console.log(data, IdFilms);

  return useMemo(() => {
    return data?.filter(item => item.apiTitleId === IdFilms);
  }, [data, IdFilms]);
};
