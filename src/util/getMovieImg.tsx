import placeholder from "../img/images.jpg"

export function getMovieImg(path: string, width:number){
  return path?'https://image.tmdb.org/t/p/w' + width +'_and_h900_face' + path :  placeholder;
}

//img className="movie-image" src={"https://image.tmdb.org/t/p/w600_and_h900_face" + render.poster_path} width="230px" height="345px" alt={render.title} />