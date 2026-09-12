import logo from "../assets/logo-text.png"
const Nav = () => {
    return (
            <nav className="flex items-center justify-between container mx-auto p-4">
                <div>
                    <img src={logo} alt="DevStack logo" className="w-33"/>
                </div>
                <div className="hidden sm:block">
                    <ul className="flex gap-6">
                        <li className="hover:text-pink-500"><a href="">Home</a></li>
                        <li className="hover:text-pink-500"><a href="">Technologies</a></li>
                        <li className="hover:text-pink-500"><a href="">Projects</a></li>
                        <li className="hover:text-pink-500"><a href="">About</a></li>
                        <li className="hover:text-pink-500"><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="space-x-3 font-semibold">
                    <button className="cursor-pointer">Sign In</button>
                    <button className="bg-pink-500 rounded-full px-4 py-1 text-slate-100 cursor-pointer">Sign Up</button>
                </div>
            </nav>
    );
};

export default Nav;