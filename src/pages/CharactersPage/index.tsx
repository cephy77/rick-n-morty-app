import { useParams } from 'react-router-dom'

export const CharactersPage = () => {
  const { characterId } = useParams();
  return (
    <div>
      <h2>{characterId}</h2>
    </div>
  )
}