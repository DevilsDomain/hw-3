
interface Params {
    pokemonName: string;
  }

  
export default function PokemonPage({ params }: { params: Params }) {
    return (
      <main>
        <p>Pokemon Name: {params.pokemonName}</p>
      </main>
    )
  }