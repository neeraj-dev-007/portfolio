import { HERO_CONTENT } from "../constants/content";
import profilePic from "../assets/NeerajProfile.jpg";

const Hero = () => {

    return (
        <div className="border-b border-neutral-900 lg:mb-[20]">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="px-10 flex flex-col items-center lg:items-start">
                        <h1 className="pb-10 text-3xl font-thin tracking-tight lg:mt-16 lg:text-5xl">
                            Neeraj Sangwan
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl
                        tracking-tight text-transparent">
                            Software Engineer
                        </span>
                        <p className="max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center ">
                        <img className="w-[400px] rounded-3xl" src={profilePic} alt="Profile Picture" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;