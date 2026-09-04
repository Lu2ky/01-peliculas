import placeholder from "../img/images.jpg"

export function getMovieImg(path: string){
  if(!path){
    return "";
  }
  return path?'https://image.tmdb.org/t/p/w300_and_h450_face' + path :  placeholder;
}
export function getMovieBackPoster(path: string){
  console.log(path)
  return path?'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces' + path :  placeholder;
}

//img className="movie-image" src={"https://image.tmdb.org/t/p/w600_and_h900_face" + render.poster_path} width="230px" height="345px" alt={render.title} />