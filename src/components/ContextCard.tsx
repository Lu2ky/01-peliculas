import { useEffect, useState } from "react"
import type { Movie } from "../types/types"
import { get } from "../data/httpClient"
import { MovieCard } from "./MovieCard"
import "./css/ContextCard.css"

export function ContextCard(){
const [movies, setMovies] = useState<Movie[]>([])
useEffect(() => {
    get<{results: Movie[]}>("discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_keywords=180547")
    .then((data)=>{
        setMovies(data.results)
    })
}, [])
  return (
    <>
        <div className="aura">
            {movies.map((movie:Movie) => {
                return (<MovieCard key={movie.id} render={movie}></MovieCard>)
            })}
        </div>
        
    </>
  )
}