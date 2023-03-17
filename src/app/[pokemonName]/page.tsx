'use client';
import useSWR from 'swr';
import Image from 'next/image';
import 'src/app/[pokemonName]/page.css';



interface Params {
    pokemonName: string;
  }

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function PokemonPage({ params }: { params: Params }) {

  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

    return (
      <main className='main'>
        <div className='container'>
          <div className='name-id'>
            <p className='name'>{params.pokemonName}</p>
            <p className='id'>#{data.id}</p>
          </div>
          <Image src={data.sprites.other['official-artwork'].front_default} alt={`${params.pokemonName} photo`} width={475} height={475} className='image'/>
          <div className='type-title'>
            <p>Type</p>
            <p>{data.types[0].type.name}</p>
          </div>
          <div className='row'>
            <p className='ability'>Ability: {data.abilities[0].ability.name}</p>
            <p className='height-weight'>Height: {data.height}</p>
            <p className='height-weight'>Weight: {data.weight}</p>
            <p className='height-weight'>Base Experience: {data.base_experience}</p>
          </div>
        </div>
      </main>
    )
  }