import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';

const Main = () => {
    // get movies from api
    const [movies, setMovies] = useState([])
    // randomly choose which movie to get data from
    const movie = movies[Math.floor(Math.random() * movies.length)]
    // get data for movies from api
    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    },[])
    console.log(movie)

  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div></div>
            {/* src=backdrop path */}
            <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="{movie?.title}" />
        </div>

    </div>
  )
}

export default Main