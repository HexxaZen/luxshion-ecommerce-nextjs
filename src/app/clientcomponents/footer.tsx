import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">LuxShion</h3>
                        <p className="text-gray-400 mb-4">Premium fashion that defines your style and personality.</p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebook /></Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram /></Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter /></Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><FaYoutube /></Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="#home" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
                            <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Categories</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Clothing</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Accessories</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Shoes</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Sale</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe to get updates on new arrivals and exclusive offers.</p>
                        <div className="flex">
                            <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded-l-lg bg-gray-700 text-white focus:outline-none" />
                            <button className="bg-white text-gray-800 px-4 py-2 rounded-r-lg hover:bg-gray-200 transition-colors">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400">&copy; 2024 LuxShion. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};