import logo from "../assets/NeerajLogo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const NavBar = () => {

    return (
        <nav className="mb-2 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-[150px]" src = {logo} alt="logo"/>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
                <IoMdMail />
            </div>
        </nav>
    );
};

export default NavBar;