import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import type { Movie } from "../types/types"
import { useParams } from "react-router-dom";
import { getMovieImg } from "../util/getMovieImg";
export function MovieDetails(){
    const {movieid} =  useParams();
    const [movie, setMovie] = useState<Movie>()
    
    useEffect(() => {
        get<Movie>("movie/" + movieid)
        .then((data)=>{
            setMovie(data)
        })
    }, [movieid])
    if(!movie){
        return <p>Cargando</p>
    }
    const imageUrl = getMovieImg(movie.poster_path, 600)
  return (
    <>
    <div><img src={imageUrl} alt="" /></div>
    </>
)
}