import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaBeer, FaGoogle } from 'react-icons/fa';
import useTitle from "../../hooks/useTitle";

const Register = () => {
    const { createUser, errorMessage, setErrorMessage, updateUserProfile, loginWithGoogle } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const updateUser = { name: name, photo: photo };
        console.log(name, photo, email, password)
        setErrorMessage("")
        // create account by email and password
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                // update profile
                updateUserProfile(updateUser)
                    .then(result => { })
                    .catch(error => { })
                console.log(createdUser)
                setErrorMessage("")
                navigate(from, { replace: true });
            })
            .catch(error => {
                setErrorMessage('Your password must be 6 characters')
                console.log(error)
            })
    }

    // google login
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
    useTitle("Register")
    return (
        <div>
            <div className="hero min-h-screen my-12">
                <div>
                    <h1 className="text-4xl mt-10 text-center font-semibold">Please Register!</h1>
                    <div className="hero-content w-3/4 mx-auto md:flex-col lg:flex-row">
                        <div className="w-1/2 text-center card-body">
                            <img className="w-full h-" src="https://i.ibb.co/jv34hFG/6300959-1.jpg" alt="" />
                        </div>
                        <div className="card w-full max-w-sm shadow-xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleRegister}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input required type="text" name="name" placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input required type="text" name="photo" placeholder="Photo url" className="input input-bordered" />
                                    </div>
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
                                    <div className="form-control mt-4">
                                        <button className="btn border-none normal-case text-lg bg-orange-400 hover:bg-orange-500 text-white px-5 py-3 rounded-lg font-semibold">Register</button>
                                    </div>

                                    <label className="label">
                                        <p className="label-text-alt text-center">Already have an account? <Link className="link link-hover text-orange-400 font-bold" to='/login'>Login</Link></p>
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

export default Register;