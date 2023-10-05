import { useEffect } from "react";
import { useState } from "react";
import Categorymenu from "./Categorymenu";

const Left = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('../../public/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="bg-slate-200 p-5 rounded-md mt-[20px]">
            <h1 className="text-xl font-myFont">All Categories</h1>
            {
                categories.map(category => <Categorymenu key={category.id} category={category}></Categorymenu>)
            }
        </div>
    );
};

export default Left;