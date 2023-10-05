import { Link } from "react-router-dom";

const Signinform = () => {
    const handleSignIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'), form.get('password'));
    }
    return (
        <div className="my-10">
            <h1 className="text-center text-4xl font-myFont font-bold">Login your account</h1>
            <div className="py-10">
                <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Login</button>
                        </div>
                        <p className="mt-6">{`Dont’t Have An Account ?`} <Link to={'/register'} className="text-red-600">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signinform;