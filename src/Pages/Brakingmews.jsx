import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Brakingmews = () => {
    return (
        <div className="flex items-center justify-center max-w-4xl mx-auto border-2 p-2 rounded-md">
            <button className="btn btn-error rounded-none py-0 px-7 text-white">Latest</button>
            <Marquee pauseOnHover={true}>
                <Link className="text-red-500 mr-2" to={'/'}>I can be a React component, multiple React components, or just ...</Link>
                <Link className="text-blue-600 mr-2" to={'/'}>I can be a React component, multiple React components, or just ...</Link>
                <Link className="text-green-400 mr-2" to={'/'}>I can be a React component, multiple React components, or just ...</Link>
            </Marquee>
        </div>
    );
};

export default Brakingmews;