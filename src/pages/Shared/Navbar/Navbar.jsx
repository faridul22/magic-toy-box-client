import { Link } from 'react-router-dom';
import logo from '../../../assets/toyLogo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import ActiveLink from '../../../routes/ActiveRoute/ActiveLink';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className=''>
            <div className="navbar lg:px-10 bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-bold '>
                                <ActiveLink to="/">Home</ActiveLink>
                            </li>
                            <li className='font-bold '>
                                <ActiveLink to="/allToys">All Toys</ActiveLink>
                            </li>
                            <li className='font-bold '>
                                <ActiveLink to="/myToys">My Toys</ActiveLink>
                            </li>
                            <li className='font-bold '>
                                <ActiveLink to="/addAToy">Add A Toy</ActiveLink>
                            </li>
                            <li className='font-bold '>
                                <ActiveLink to="/blogs">Blogs</ActiveLink>
                            </li>
                        </ul>
                    </div>
                    <img width={50} src={logo} alt="" />
                    <Link className='ml-2 font-extrabold sm:text-xs md:text-2xl' to='/'>Magic ToyBox </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold '>
                            <ActiveLink to="/">Home</ActiveLink>
                        </li>
                        <li className='font-bold '>
                            <ActiveLink to="/allToys">All Toys</ActiveLink>
                        </li>
                        <li className='font-bold '>
                            <ActiveLink to="/myToys">My Toys</ActiveLink>
                        </li>
                        <li className='font-bold '>
                            <ActiveLink to="/addAToy">Add A Toy</ActiveLink>
                        </li>
                        <li className='font-bold '>
                            <ActiveLink to="/blogs">Blogs</ActiveLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-zinc-600 ring-offset-base-100 ring-offset-2">
                                    <img className='' title={user?.displayName} src={user?.photoURL} alt="" />
                                </div>
                            </div>


                            <button className='ml-3 font-bold' onClick={handleLogOut}>LogOut</button>
                        </> :
                            <p className='font-bold'><Link to='/login'>Login</Link></p>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;