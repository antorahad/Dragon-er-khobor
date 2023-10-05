import { Link } from "react-router-dom";

const Categorymenu = ({category}) => {
    const {id, name} = category;
    return (
        <div>
            <Link to={`category/${id}`}><button className="btn btn-block btn-ghost my-2">{name}</button></Link>
        </div>
    );
};

export default Categorymenu;