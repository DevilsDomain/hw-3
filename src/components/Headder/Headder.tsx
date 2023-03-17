'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
import '../Headder/headder.css'

type HeadderProps = {
    children: React.ReactNode; //👈 children prop typr
  };
  

function Headder(props : HeadderProps) {
  const router = useRouter();
  return (
    <div>
        <h1 onClick={() => router.push('/')} className="h1">{props.children}</h1>
    </div>
  )
}

export default Headder