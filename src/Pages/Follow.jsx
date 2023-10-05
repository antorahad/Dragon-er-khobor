import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
const Follow = () => {
    return (
        <div className="bg-slate-200 p-4 rounded-md mt-5">
            <h1 className="text-xl font-myFont">Follow US</h1>
            <div className='space-y-4 mt-4'>
                <a href="#" className="flex items-center btn btn-ghost btn-outline btn-block">
                    <AiFillFacebook></AiFillFacebook>
                    Facebook</a>
                <a href="#" className="flex items-center btn btn-ghost btn-outline btn-block">
                    <AiFillTwitterCircle></AiFillTwitterCircle>
                    Twitter</a>
                <a href="#" className="flex items-center btn btn-ghost btn-outline btn-block">
                    <AiFillInstagram></AiFillInstagram>
                    Instagram</a>
            </div>
        </div>
    );
};

export default Follow;