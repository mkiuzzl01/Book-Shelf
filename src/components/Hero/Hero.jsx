import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero bg-[#1313130D] rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/z2GnKy0/pngwing-1.png"
          className="max-w-sm rounded-lg"
        />
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">Books to freshen</h1>
          <h1 className="text-5xl font-bold">up your bookshelf</h1>
          <div>
          <Link to='/Listed_Books'><button className="btn bg-[#23BE0A] text-white">View The List</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
