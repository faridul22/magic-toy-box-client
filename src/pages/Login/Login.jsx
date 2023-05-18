import { Link } from "react-router-dom";


const Login = () => {

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-3/4 flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Please Login!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <label className="label">
                                    <p className="label-text-alt text-center">New to Magic ToyBox? <Link className="link link-hover text-orange-400 font-bold" to='/register'>Register</Link></p>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;