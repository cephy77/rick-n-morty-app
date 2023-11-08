import { FetchParams, Queries } from '../types/FetchParams';

const BASE_URL = 'https://rickandmortyapi.com/graphql';

const queries: Queries = {
  characters({ page, query = '' }) {
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
  character({ id }) {
    return `{
      character (id: ${id}) {
          id
          name
          image
          gender
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

async function getRequest(queryType: keyof Queries, params: FetchParams) {
  const response = fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query: queries[queryType](params)
    })
  });
  return (await response).json();
}

export const api = {
  async fetchCharacters(params: Omit<FetchParams, 'id'>) {
    return await getRequest('characters', params)
  },
  async fetchSingleCharacter(params: Pick<FetchParams, 'id'>) {
    return await getRequest('character', params);
  }
}