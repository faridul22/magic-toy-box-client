import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaBeer, FaGoogle } from 'react-icons/fa';

const Register = () => {
    const { createUser, errorMessage, setErrorMessage, updateUserProfile, loginWithGoogle } = useContext(AuthContext)

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
            })
            .catch(error => {
                setErrorMessage('Your password must be 6 catchers')
                console.log(error)
            })
    }

    // google login
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Please Register!</h1>
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="text-center mt-2 text-red-500 form-control">
                                    <span>{errorMessage}</span>
                                </div>
                                <div className="form-control mt-2">
                                    <button className="btn normal-case btn-primary">Register</button>
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
    );
};

export default Register;