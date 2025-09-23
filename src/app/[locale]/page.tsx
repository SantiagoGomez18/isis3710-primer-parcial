'use client'
import { link } from 'fs';
import {useTranslations} from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

export default function Home() {
  const t = useTranslations('HomePage');
  const [pokemons, setPokemons] = useState([]);
  fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
    .then(response => response.json())
    .then(data => setPokemons(data.results));




  return (
     <main className='bg-[#D9E9FE] min-h-screen'>
        <div className = 'flex flex-col items-center py-2'>
          <h1 className = 'font-bold p-3 text-[25px]'>{t('title')}</h1>
        </div>
        <div className = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center ml-15 mr-15 '>
          {pokemons.map((pokemon, index) => (
            <div key={index} className = 'bg-white border-2 border-green-500 w-100 h-70 items-center justify-center'>
                <Link href={`/Detalle/${index}`} className = 'cursor-pointer'>
                  <div className = 'justify-center items-center flex'>
                      <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`} height={200} width={200} className = 'bg-gray-300 ml-2 mr-2 mb-2 m-2 justify-center items-center'/>
                  </div>
                </Link>
            <div>
                  <p className = 'font-bold flex justify-center '>{pokemon.name}</p>
            </div>
            </div>
          ))}
        </div>
     </main>
  );
}

