import Logo from "../assets/images/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div>
            <header className="my-4">
                <div className="flex items-center justify-center mt-5">
                    <img src={Logo} alt="" />
                </div>
                <p className="font-myFont text-lg font-thin capitalize text-center my-2">Journalism with out fear or favour</p>
                <p className="font-myFont text-xl font-medium capitalize text-center my-2">{moment().format("dddd, MMMM D YYYY")}</p>
            </header>
        </div>
    );
};

export default Header;