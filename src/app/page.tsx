import Image from "next/image";
import React from "react";
import Movie from "./movie";

type Props = {};

export default async function Home({}: Props) {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const result = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}`
  );
  const res = await result.json();
  await delay(1000);

  console.log(res);

  return (
    <div>
      {/* <div>{JSON.stringify(res)}</div> */}
      <div className="grid gap-2 grid-cols-fluid">
        {res.results.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          ></Movie>
        ))}
      </div>
    </div>
  );
}

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}