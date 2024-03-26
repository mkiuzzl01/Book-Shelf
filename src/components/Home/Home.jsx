import { useLoaderData } from "react-router-dom";
import Books from "../Books/Books";
import Hero from "../Hero/Hero";

const Home = () => {
    const books = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <div className="my-8">
            <Books books={books}></Books>
            </div>
        </div>
    );
};

export default Home;