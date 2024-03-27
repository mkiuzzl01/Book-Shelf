import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Not_Found_Page = () => {
    const error = useRouteError();
    console.error(error);

    return (
    <div className="text-center">
     <div className="mt-32">
     <h1 className="text-3xl font-medium">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="mb-2">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={`/`}><button className="btn">Go to back</button></Link>
     </div>
    </div>
    );
};

export default Not_Found_Page;