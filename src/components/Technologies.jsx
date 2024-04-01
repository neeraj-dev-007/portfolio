import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
 

const Technologies = () => {

    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">
                Technologies
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">   
                    <SiTailwindcss className="text-4xl text-cyan-600"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-4xl text-green-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">   
                    <SiExpress className="text-4xl text-white"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-4xl text-cyan-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">   
                    <FaNodeJs className="text-4xl text-green-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">   
                    <GrMysql className="text-4xl text-cyan-600"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">   
                    <FaJava className="text-4xl text-red-600"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">   
                    <BiLogoSpringBoot className="text-4xl text-green-600"/>
                </div>
            </div>
        </div>
    );
};
export default Technologies;