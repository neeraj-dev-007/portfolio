import { CONTACT } from "../constants/content";
import { motion } from "framer-motion";

const Contact = () => {
    
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:0.5}}
            className="my-10 text-center text-4xl">
                Get in Touch
            </motion.h1>
            <motion.div 
             whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className="text-center tracking-tighter">
                <div className="my-4"> 
                    <a href="tel:+91-8586997581" className="border-b">
                        {CONTACT.phoneNo}
                    </a>
                </div>
                <a href="mailto:neerajsngwn2017@gmail.com?Subject=Hi Neeraj!" className="border-b">
                    {CONTACT.email}
                </a>
            </motion.div>
        </div>
    );
};
export default Contact;