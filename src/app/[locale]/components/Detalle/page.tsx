'use client'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

// Colores de fondo para los chips
const BgColorTypes: Record<string, string> = {
  bug: 'bg-[#a8b820]',
  dark: 'bg-[#705848]',
  dragon: 'bg-[#7038f8]',
  electric: 'bg-[#f8d030]',
  fairy: 'bg-[#f0a6f7]',
  fighting: 'bg-[#c03028]',
  fire: 'bg-[#f08030]',
  flying: 'bg-[#a890f0]',
  ghost: 'bg-[#705898]',
  grass: 'bg-[#78c850]',
  ground: 'bg-[#e0c068]',
  ice: 'bg-[#98d8d8]',
  normal: 'bg-[#a8a878]',
  poison: 'bg-[#a040a0]',
  psychic: 'bg-[#f85888]',
  rock: 'bg-[#b8a038]',
  water: 'bg-[#6890f0]',
}

// Colores de borde para el marco
const BorderColorTypes: Record<string, string> = {
  bug: 'border-[#a8b820]',
  dark: 'border-[#705848]',
  dragon: 'border-[#7038f8]',
  electric: 'border-[#f8d030]',
  fairy: 'border-[#f0a6f7]',
  fighting: 'border-[#c03028]',
  fire: 'border-[#f08030]',
  flying: 'border-[#a890f0]',
  ghost: 'border-[#705898]',
  grass: 'border-[#78c850]',
  ground: 'border-[#e0c068]',
  ice: 'border-[#98d8d8]',
  normal: 'border-[#a8a878]',
  poison: 'border-[#a040a0]',
  psychic: 'border-[#f85888]',
  rock: 'border-[#b8a038]',
  water: 'border-[#6890f0]',
}

export default function Detalle() {
  const t = useTranslations('HomePage')
  const { id } = useParams()
  const [pokemon, setPokemon] = useState<any>(null)

  useEffect(() => {
    if (!id) return
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((r) => r.json())
      .then(setPokemon)
      .catch(console.error)
  }, [id])

  if (!pokemon) return <p className="text-center mt-10">Cargando…</p>

  const nameCap = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
  const heightCm = pokemon.height * 10
  const weightKg = (pokemon.weight / 10).toFixed(0)
  const types: string[] = pokemon.types.map((t: any) => t.type.name)
  const mainType = types[0]
  const borderColor = BorderColorTypes[mainType] || 'border-gray-300'

  return (
    <div className="min-h-screen bg-[#D9E9FE] py-8">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-6">
        {nameCap} - {t('detalle')}
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[70vh]">
        <div className={`border-4 ${borderColor} rounded-xl shadow-md bg-white flex items-center justify-center p-6`} >
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} className="max-h-[420px] w-auto object-contain" />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <p className="mb-2">
            <span className="font-semibold text-[20px]">{t('Altura')}:</span>{' '}
            {heightCm} cm
          </p>
          <p className="mb-2">
            <span className="font-semibold text-[20px]">{t('Peso')}:</span>{' '}
            {weightKg} kg
          </p>
          <p className="font-semibold mt-4 mb-2 text-[20px]">{t('Habilidades')}:</p>
          <ul className="list-disc list-inside space-y-1">
            {pokemon.abilities.map((a: any) => (
              <li key={a.ability.name} className="capitalize">
                {a.ability.name}
              </li>
            ))}
          </ul>
          <p className="font-semibold mt-4 mb-2 text-[20px]">{t('Tipos')}:</p>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <span key={type} className={`px-3 py-1 rounded-full text-white text-sm capitalize ${ BgColorTypes[type] || 'bg-gray-400'}`}>
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
