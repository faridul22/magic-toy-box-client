import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";


const Login = () => {
    const { errorMessage, setErrorMessage, signIn, loginWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSingIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        signIn(email, password)
            .then(result => {
                const logged = result.user;
                console.log(logged)
                setErrorMessage("")
                navigate(from, { replace: true });
            })
            .catch(error => {
                setErrorMessage('Email and password does not match')
                console.log(error)
            })
    }


    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setErrorMessage("")
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                setErrorMessage("Google login action failed try again")
            })
    }
    useTitle("Login")
    return (
        <div>
            <div className="hero min-h-screen my-12">
                <div>
                    <h1 className="text-4xl mt-10 text-center font-semibold">Please Login</h1>
                    <div className="hero-content w-3/4 mx-auto md:flex-col lg:flex-row">
                        <div className="text-center">
                            <img src="https://i.ibb.co/jyGSyBv/4794658.jpg" alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleSingIn}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input required type="email" name="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input required type="password" name="password" placeholder="password" className="input input-bordered" />
                                    </div>
                                    <div className="text-center mt-1 text-red-500 form-control">
                                        <span>{errorMessage}</span>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn border-none font-semibold bg-orange-400 hover:bg-orange-500 normal-case text-white px-5 py-3 rounded-lg text-lg">Login</button>
                                    </div>
                                    <label className="label">
                                        <p className="label-text-alt text-center">New to Magic ToyBox? <Link className="link link-hover text-orange-400 font-bold" to='/register'>Register</Link></p>
                                    </label>
                                    <div className="divider">OR</div>
                                </form>
                                <div className="flex items-center text-xl border border-blue-500 text-blue-500 justify-center h-12  rounded-box">
                                    <FaGoogle /> <button onClick={handleGoogleLogin}><span className="ml-3"> Login with Google</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;