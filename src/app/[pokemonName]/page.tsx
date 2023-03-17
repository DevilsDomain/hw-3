'use client';
import useSWR from 'swr';
import Image from 'next/image';
import './page.module.css';


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
        <p>Pokemon Name: {params.pokemonName}</p>
        <p>#{data.id}</p>
        <Image src={data.sprites.other['official-artwork'].front_default} alt={`${params.pokemonName} photo`} width={500} height={500}/>
        <p>Type: {data.types[0].type.name}</p>
        <p>Ability: {data.abilities[0].ability.name}</p>
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
        <p>Base Experience: {data.base_experience}</p>
      </main>
    )
  }