import { type } from "os";
import Link from "next/link";
import React from "react";
// import Image from "next/Image";
type Props ={
    key: string;
    id: string;
    title: string;
     poster_path: string;
     release_date: string;
};
export default function Movie({title,id,poster_path,release_date}:Props){
    const ImgagePath ="https://image.tmdb.org/t/p/original";
  return (
    <div>
         <b className="text-ellipsis overflow-hidden line-clamp-1">{title}</b>
         <h2>{release_date}</h2>
         <Link href={`/movie/${id}`}>
         <img src={ImgagePath + poster_path}
         width={800}
         height={800}
         alt={title}
         />
         </Link>
    </div>
  )
  
}