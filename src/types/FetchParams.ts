export interface FetchParams {
  page: number;
  query?: string;
  filterBy?: 'Character' | 'Episode' | 'Location';
}