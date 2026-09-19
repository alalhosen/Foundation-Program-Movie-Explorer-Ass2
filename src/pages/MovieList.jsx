import { useLoaderData } from "react-router";

const MovieList = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      movie list
      {data.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

// {
//   data.map((movie) => (
//     <div key={movie.id}>
//       <h3>{movie.title}</h3>
//     </div>
//   ));
// }
