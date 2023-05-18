import { Link } from 'react-router-dom';
import logo from '../../../assets/toyLogo.png'
const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar px-10 bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-bold '><Link>Home</Link></li>
                            <li className='font-bold '><Link>All Toys</Link></li>
                            <li className='font-bold '><Link>My Toys</Link></li>
                            <li className='font-bold '><Link>Add A Toy</Link></li>
                            <li className='font-bold '><Link>Blogs</Link></li>
                        </ul>
                    </div>
                    <img width={40} src={logo} alt="" />
                    <Link className='ml-2 font-extrabold text-2xl' to='/'>Magic ToyBox </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold '><Link>Home</Link></li>
                        <li className='font-bold '><Link>All Toys</Link></li>
                        <li className='font-bold '><Link>My Toys</Link></li>
                        <li className='font-bold '><Link>Add A Toy</Link></li>
                        <li className='font-bold '><Link>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <img width={40} src={logo} alt="" />
                    <a className="btn ml-2">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;