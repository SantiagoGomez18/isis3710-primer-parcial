import { useTranslations } from 'next-intl';
import React from 'react';

async function fetchPokemonData(id) {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
    }

export default async function Detalle({params}) {
    const t = useTranslations('HomePage');
    const data = await params;

    const pokemonData = await fetchPokemonData(data.id);

    return (
        <div>
            <div>
                <h1>{pokemonData.name}</h1>
                <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />  
            </div>
        </div>
    );
}

