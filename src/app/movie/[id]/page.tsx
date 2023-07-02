import { type } from "os";
import React from "react";
type Props ={
    params:any
};
export default async function Movie({params}:Props){
    const{id} = params;
    const imagePath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
        { next: { revalidate: 10 } }
      );
      const res = await data.json();
  return (
    <div>
         <h2 className="text-4xl">{res.title}</h2>
         <h2 className="text-4xl">Runtime: {res.runtime}</h2>
         <img src={imagePath + res.backdrop_path}
         width={800}
         height={800}
         alt={res.title}
         />
    </div>
  )
 
//   <div>MovieDetail:{params.id}</div>
}