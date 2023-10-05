import qzone1 from '../assets/images/qZone1.png'
import qzone2 from '../assets/images/qZone2.png'
import qzone3 from '../assets/images/qZone3.png'

const Qzone = () => {
    return (
        <div className="bg-slate-200 p-4 rounded-md mt-5">
        <h1 className="text-xl font-myFont">Qzone</h1>
        <div className='space-y-4 mt-4'>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
        </div>
    </div>
    );
};

export default Qzone;