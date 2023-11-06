import { FetchParams } from '../types/FetchParams';

const BASE_URL = 'https://rickandmortyapi.com/graphql';

interface Queries {
  characters: (page: number, query?: string) => string,
  character: (id: number) => string,
}

const queries: Queries = {
  characters(page, query = '') {
    return `{
      characters(page: ${page} ${query && `, filter: {${query}}`}) {
        info {
          count,
          pages,
          next
        }
        results {
          id
          name
          image
          status
          species
          location {
            name
          }
          episode {
            name
          }
        }
      }
    }`
  },
  character(id) {
    return `{
      character (id: ${id}) {
          name
          image
          status
          species
          location {
            name
            dimension
          }
          episode {
            name
          }
      }
    }`
  }
}

async function getRequest(queryType: keyof Queries, page: number, query = '') {
  const response = fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query: queries[queryType](page, query)
    })
  });

  return (await response).json();
}

export const api = {
  async fetchCharacters({ page, query }: FetchParams) {
    return await getRequest('characters', page, query)
  },
  async fetchSingleCharacter(id: number) {
    return await getRequest('character', id);
  }
}