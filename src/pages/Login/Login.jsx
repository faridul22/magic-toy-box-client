import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const { errorMessage, setErrorMessage, signIn, loginWithGoogle } = useContext(AuthContext);

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
            })
            .catch(error => {
                console.log(error)
                setErrorMessage("Google login action failed")
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-3/4 flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Please Login!</h1>
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
                                    <button className="btn btn-primary">Login</button>
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
    );
};

export default Login;