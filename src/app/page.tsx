'use client';
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function Home() {
  const { data, error } = useSWR('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0', fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <main className={styles.main}>
      <p>hello</p>
      {data.results.map((pokemon, pokemonIndex) => {
        return(
          <p key={pokemonIndex}>{pokemon.name}</p>
        );
      })}
    </main>
  )
}
