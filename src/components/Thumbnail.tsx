import React from 'react'
import Image from 'next/image'

// types
import { Movie } from '@/types'

import { useRecoilState } from 'recoil'
// modal
import { modalState, movieState } from '@/atoms/modalAtom'

interface Props {
    movie: Movie
}

const Thumbnail = ({ movie }: Props) => {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)

  return (
    <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105' onClick={() => {
      setCurrentMovie(movie)
      setShowModal(true)
    }}>
        <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        fill
        alt='Movie Poster'
      />
    </div>
  )
}

export default Thumbnail