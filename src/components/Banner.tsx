import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// types
import { Movie } from '@/types'

// constants
import { baseUrl } from '@/constants/movie'

interface Props {
    netflixOriginals: Movie[]
}

const Banner = ({ netflixOriginals }: Props) => {

    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    }, [netflixOriginals])

    console.log('movie', movie)

  return (
    <div>
        <div className='absolute top-0 left-0 h-[95vh] w-screen'>
            <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path }`} alt='Moive' fill style={{objectFit:"cover"}} />
        </div>
    </div>
  )
}

export default Banner