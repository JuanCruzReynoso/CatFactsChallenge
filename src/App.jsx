import './App.css'
import catLogo from './assets/cat.svg'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
    <article>     
      <h1>CatFacts</h1>
      <p>{fact}</p>
      {imageUrl && <img src={`${imageUrl}`} alt='cat fact image' />}
      <button onClick={handleClick}> 
        <p>Get new fact!</p>
        <img src={catLogo} className="catLogo" alt="Cat logo" />
      </button>
    </article>
  </main>
  )
}