import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage:
            "url(https://content.tupaki.com/h-upload/2024/10/18/1500x900_555639-love.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Movie Explorer</h1>
            <p className="mb-5">
              Explore and discover your favorite movies from around the world.
              So, you watch the best movie.
            </p>
            
            <NavLink to="/movie" className="btn btn-primary">Movie Explorer</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
