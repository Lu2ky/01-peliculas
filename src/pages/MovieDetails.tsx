import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import type { Movie } from "../types/types"
import { useParams } from "react-router-dom";
import { getMovieBackPoster, getMovieImg } from "../util/getMovieImg";
import "./css/MovieDetails.css"
import {getColor} from "colorthief";
import moment from "moment";

export function MovieDetails(){
    const {movieid} =  useParams();
    const [movie, setMovie] = useState<Movie>()
    const [primaryColor, setPrimaryColor] = useState("rgb(30, 30, 30)");
    
    useEffect(() => {
        get<Movie>("movie/" + movieid)
        .then((data)=>{
            setMovie(data)
        })
    }, [movieid])
    const imageUrl = movie? getMovieImg(movie.poster_path): "";
    useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();

    img.crossOrigin = "anonymous";
    img.src = imageUrl;

    img.onload = async () => {
        const color = await getColor(img);

        if (color) {
            setPrimaryColor(color.css());
        }
    };
}, [imageUrl]);

    if (!movie) {
        return <p>Cargando...</p>;
    }

    const backPoster = getMovieBackPoster(movie.backdrop_path);

    const duration = moment.duration(movie.runtime, 'minutes');
    const hours = Math.floor(duration.asHours());
    const minutes = duration.minutes();
    console.log(movie.original_language)
  return (
    <>
    <div className="movie-details">
        <div
            className="movie-img"
            style={{
                backgroundImage: `url(${backPoster})`,
                "--primary-color": primaryColor
            } as React.CSSProperties}
        >
            <div className="movie-overlay"></div>
            <img src={imageUrl} alt={movie.title} />
            <div className="movie-title">
                <p><strong>{movie.title}</strong> ({movie.release_date.split("-")[0]})</p>
                <br/>
                <p className="details">{movie.release_date} ({movie.origin_country[0]}) · {movie.genres.map((genre,index) =>{
                        return <span key={genre.id}>           
                        {genre.name}
                        {index < movie.genres.length - 1 && " · "}</span>;
                    })} · {hours}h {minutes}m
                </p>
                <p className="tagline">{movie.tagline}</p>
                <div className="movie-overview">
                    <h3>Overview:</h3>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
       
        
    </div>
    </>
)
}