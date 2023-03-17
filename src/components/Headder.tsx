'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
import { Press_Start_2P } from 'next/font/google'

type HeadderProps = {
    children: React.ReactNode; //👈 children prop typr
  };

  const pokemon = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
  })
  

function Headder(props : HeadderProps) {
  const router = useRouter();
  return (
    <div>
        <h1 onClick={() => router.push('/')} className={pokemon.className}>{props.children}</h1>
    </div>
  )
}

export default Headder