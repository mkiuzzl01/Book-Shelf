import Books from "../Books/Books";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="my-8">
            <Books></Books>
            </div>
        </div>
    );
};

export default Home;