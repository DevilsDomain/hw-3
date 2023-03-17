'use client';
import styles from './page.module.css';
import useSWR from 'swr';
import { useState, useCallback } from 'react';

interface Pokemon {
  name: string;
  url: string;
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

interface HomeTypes extends React.MouseEvent<HTMLParagraphElement> {
  target: {
    textContent: string;
  };
}

export default function Home() {
  const [pokemon, setPokemon] = useState('');
  const { data, error } = useSWR('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0', fetcher);

  const handleClick = useCallback((event: HomeTypes) => {
    setPokemon(event.target.textContent);
  }, [setPokemon]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = `/${pokemon}`;
  }

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        {data.results.map((pokemon: Pokemon, pokemonIndex: number) => {
          return (
            <p key={pokemonIndex} tabIndex={0} onClick={handleClick}>
              {pokemon.name}
            </p>
          );
        })}
        <input type='submit' value='submit' />
      </form>
    </main>
  );
}
