'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

type HeadderProps = {
    children: React.ReactNode; //👈 children prop typr
  };

function Headder(props : HeadderProps) {
  const router = useRouter();
  return (
    <div>
        <h4 onClick={() => router.push('/')}>{props.children}</h4>
    </div>
  )
}

export default Headder