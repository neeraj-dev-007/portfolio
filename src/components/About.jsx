import aboutImage from "../assets/NeerajAbout.jpg";
import { ABOUT_TEXT } from "../constants/content";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About 
                <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="w-[400px] rounded-3xl" src={aboutImage} alt="About Me Image" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="max-w-xl py-6 font-light tracking-tighter">{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;