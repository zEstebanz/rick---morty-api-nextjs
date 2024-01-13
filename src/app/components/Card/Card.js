"use client"
import Image from 'next/image'
import { useState } from 'react'
import { apiUrl } from '@/app/api/url'
import { useRandomNumber } from '../../../../hooks/useRandomNumber'

// ... (import statements)

export default function Card() {
    const [character, setCharacter] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [characterId, setCharacterId] = useState(useRandomNumber(1, 826))

    const loader = () => {
        return `${apiUrl}/avatar/${characterId}.jpeg`
    }

    const handleClick = async () => {
        try {
            setError(false)
            setIsPending(true)
            setCharacter(null)

            // Obtener un nuevo characterId al hacer clic
            const newCharacterId = useRandomNumber(1, 826)
            setCharacterId(newCharacterId)

            const response = await fetch(`${apiUrl}${newCharacterId}`)
            const jsonResponse = await response.json()

            setIsPending(false)
            setCharacter(jsonResponse)
        } catch (error) {
            setError(error)
            setIsPending(false)
            setCharacter(null)
        }
    }

    return (
        <section className="section-card">
            <button onClick={handleClick} className='button'>Random</button>
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {character && (
                <div className="card-wrapper">
                    <div className="card">
                        <Image
                            loader={loader}
                            src={character.image}
                            alt="Character's image"
                            width="300"
                            height="300"
                        />
                        <div className="card-content text-white">
                            <h2 className="text-xl font-semibold mb-2 pt-2">{character.name}</h2>
                            <p><span>Gender:</span> {character.gender}</p>
                            <p><span>Species: </span>{character.species}</p>
                            <p><span>Status: </span>{character.status}</p>
                            <p><span>ID: </span>{character.id}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
