import Header from "./Header";
import Left from "./Left";
import Navbar from "./Navbar";
import Right from "./Right";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-6">
                <div><Left></Left></div>
                <div className="col-span-2"><h1 className="text-6xl font-myFont">Content</h1></div>
                <div className="border"><Right></Right></div>
            </div>
        </div>
    );
};

export default Home;