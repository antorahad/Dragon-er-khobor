import Brakingmews from "./Brakingmews";
import Header from "./Header";
import Left from "./Left";
import Navbar from "./Navbar";
import Right from "./Right";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Brakingmews></Brakingmews>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-6 py-5">
                <div><Left></Left></div>
                <div className="col-span-2"></div>
                <div><Right></Right></div>
            </div>
        </div>
    );
};

export default Home;