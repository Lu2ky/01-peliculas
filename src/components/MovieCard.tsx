import "./css/MovieCard.css"
import { Link } from "react-router-dom";
import type { Movie } from "../types/types"


interface MovieCardProps{
  render: Movie;
}

export function MovieCard({render}: MovieCardProps){
  return (
    <>
    <div className="main-container">
        <Link to={"/movies/"+ render.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img className="movie-image" src={"https://image.tmdb.org/t/p/w600_and_h900_face" + render.poster_path} width="230px" height="345px" alt={render.title} />
            <p>{render.title}</p>
        </Link>
    </div>
    </>
  )
}