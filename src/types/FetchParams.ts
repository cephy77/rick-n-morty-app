export interface FetchParams {
  page?: number;
  query?: string;
  filterBy?: 'Character' | 'Episode' | 'Location';
  id?: number,
}

export interface Queries {
  characters: (params: Omit<FetchParams, 'id'>) => string,
  character: (params: Pick<FetchParams, 'id'>) => string,
}