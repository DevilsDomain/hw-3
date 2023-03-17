import React from 'react'
import useSWR from 'swr';
import Image from 'next/image';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function PokeImage({pokemon}) {
  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <Image src={data.sprites.other['official-artwork'].front_default} alt={`${pokemon} photo`} width={100} height={100}/>
    )
}

export default PokeImage