import { AiOutlineGoogle, AiOutlineGithub } from 'react-icons/ai';
const Sociallogin = () => {
    return (
        <div className="bg-slate-200 p-4 rounded-md mt-5">
            <h1 className="text-xl font-myFont">Login With</h1>
            <div className='space-y-4 mt-4'>
            <button className="btn btn-neutral btn-block"><AiOutlineGoogle></AiOutlineGoogle> Login With Google</button>
            <button className="btn btn-neutral btn-block"><AiOutlineGithub></AiOutlineGithub> Login With Github</button>
            </div>
        </div>
    );
};

export default Sociallogin;