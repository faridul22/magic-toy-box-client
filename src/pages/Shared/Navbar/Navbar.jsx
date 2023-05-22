import { Link } from 'react-router-dom';
import logo from '../../../assets/toyLogo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import ActiveLink from '../../../routes/ActiveRoute/ActiveLink';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)


    const navItems = <>
        <li className='font-bold p-0 mx-3 '>
            <ActiveLink to="/">Home</ActiveLink>
        </li>
        <li className='font-bold p-0 mx-3 '>
            <ActiveLink to="/allToys">All Toys</ActiveLink>
        </li>
        {user && <>
            <li className='font-bold p-0 mx-3 '>
                <ActiveLink to="/myToys">My Toys</ActiveLink>
            </li>
            <li className='font-bold p-0 mx-3 '>
                <ActiveLink to="/addAToy">Add A Toy</ActiveLink>
            </li>
        </>}
        <li className='font-bold p-0 mx-3 '>
            <ActiveLink to="/blogs">Blogs</ActiveLink>
        </li>
    </>
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className='bg-orange-100'>
            <div className="navbar lg:px-10  container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-compact bg-slate-100 dropdown-content mt-3 p-2 shadow rounded-box w-32">
                            {navItems}
                        </ul>
                    </div>
                    <img width={50} src={logo} alt="" />
                    <Link className='ml-2 font-extrabold sm:text-xs md:text-2xl' to='/'>Magic ToyBox </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal py-2">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                            <button className='mr-3 bg-[#FF900E] text-white px-5 py-3 rounded-lg font-bold' onClick={handleLogOut}>Log Out</button>
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-zinc-600 ring-offset-base-100 ring-offset-2">
                                    <img className='' title={user?.displayName} src={user?.photoURL} alt="" />
                                </div>
                            </div>
                        </> :
                            <p className='bg-orange-400 px-6 py-3 rounded-lg font-bold text-xl text-white'><Link to='/login'>Login</Link></p>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;