
const API = "https://api.themoviedb.org/3/";
const KEY = import.meta.env.VITE_API_KEY;

export function get<T = unknown>(path:string): Promise<T>{
    return fetch(API+path,{
        headers:{
            Authorization: "Bearer " + KEY,
            "Content-Type": "application/json"
        }
    }).then((result)=> {
        if(!result.ok){
            throw new Error('la cagaste mano')
        }
        return result.json() as Promise<T>
    });   
}