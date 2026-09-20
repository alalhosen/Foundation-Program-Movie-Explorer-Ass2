import { FaRegCalendarAlt } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { NavLink, useLoaderData } from "react-router";

const MovieList = () => {
  const movie = useLoaderData();
  //   console.log(data);
  return (
    <div>
      <input
        className="m-2 ml-6 bg-base-200 border p-2 w-[20%] rounded-lg mt-10"
        placeholder="Search Movie"
        type="search"
        name=""
        id=""
      />
      <div className="grid grid-cols-3 gap-5 p-5">
        {movie.map((movie) => (
          <div className="border p-5 rounded-lg" key={movie.id}>
            <img className="w-full" src={movie.image.medium} alt={movie.name} />
            <h3 className="text-xl font-bold mt-2 flex justify-center">
              {movie.name}
            </h3>
            <h2>{movie.language}</h2>
            <p>{movie.status}</p>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <FcRating />
                <p>Rating: {movie.rating.average}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCalendarAlt />
              <p>{movie.premiered}</p>
              </div>
            </div>
            <NavLink>
              <button>See Details</button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
