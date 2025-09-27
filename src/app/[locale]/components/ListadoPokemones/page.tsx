'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const BgColorTypes: Record<string, string> = {
  bug: 'bg-[#a8b820]',
  fire: 'bg-[#f08030]',
  grass: 'bg-[#78c850]',
  water: 'bg-[#6890f0]'
}

const BorderColorTypes: Record<string, string> = {
  bug: 'border-[#a8b820]',
  fire: 'border-[#f08030]',
  grass: 'border-[#78c850]',
  water: 'border-[#6890f0]'
}

export default function Listado() {
  const t = useTranslations('HomePage')
  const [pokemons, setPokemons] = useState<any[]>([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
      .then((r) => r.json())
      .then((data) => {
        const requests = data.results.map((p: any, index: number) =>
          fetch(p.url)
            .then((res) => res.json())
            .then((detail) => ({
              id: index + 1,
              name: p.name,
              type: detail.types[0].type.name
            }))
        )
        return Promise.all(requests)
      })
      .then((detailed) => setPokemons(detailed))
      .catch(console.error)
  }, [])

  return (
    <main className="bg-[#D9E9FE] min-h-screen px-6 py-8">
      <h1 className="text-center font-bold text-[30px] mb-6">{t('title')}</h1>
      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className={`w-full bg-white border-4 ${BorderColorTypes[pokemon.type] || 'border-gray-300'} rounded-xl shadow-lg overflow-hidden flex flex-col`}>
            <Link href={`/Detalle/${pokemon.id}`} className="block">
              <div className="m-4 h-48 bg-gray-200 flex items-center justify-center rounded-md">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} className="h-40 object-contain" />
              </div>
            </Link>
            <div className="px-6 py-3 text-center flex flex-col items-center">
              <p className="font-bold text-xl capitalize">{pokemon.name}</p>
              <p className={`mt-2 px-4 py-2 rounded-full text-white text-md capitalize ${BgColorTypes[pokemon.type] || 'bg-gray-200'}`}>{pokemon.type}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
