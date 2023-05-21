import logo from '../../../assets/toyLogo.png'
import { FaAddressBook, FaBeer, FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTencentWeibo, FaTwitter, FaVoicemail, FaWeibo } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div className='items-center my-auto'>
                    <img className='mx-auto' src={logo} width={80} alt="" />
                    <p className='text-xl font-bold'>Magic ToyBox Ltd.</p>

                </div>
                <div>

                    <span className="footer-title">Social media</span>
                    <a className="flex items-center link link-hover"><FaFacebook className='mr-2' /> <span>Facebook</span></a>
                    <a className="flex items-center link link-hover"><FaTwitter className='mr-2' /> <span>Twitter</span></a>
                    <a className="flex items-center link link-hover"><FaInstagram className='mr-2' /> <span>Instagram</span></a>
                    <a className="flex items-center link link-hover"><FaLinkedin className='mr-2' /> <span>LinkedIn</span></a>
                </div>
                <div>
                    <span className="footer-title">Contact Us</span>
                    <a className="flex items-center link link-hover">< FaMailBulk className='mr-2' /> <span>sara@gmail.com</span></a>
                    <a className="flex items-center link link-hover">< FaPhone className='mr-2' /> <span>Phone: 00994556764</span></a>
                    <a className="flex items-center link link-hover">< FaTencentWeibo className='mr-2' /> <span>Web: https://magictoybox.com</span></a>
                    <a className="flex items-center link link-hover">< FaAddressBook className='mr-2' /> <span>Our office address<address></address></span></a>
                </div>
                <div>

                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

            </footer>
            <div className="footer footer-center p-4 bg-base-200 text-base-content">
                <p className='text-center'>Copyright © 2023 - All right reserved by Magic ToyBox Ltd</p>
            </div>
        </div>
    );
};

export default Footer;