import { CONTACT } from "../constants/content";

const Contact = () => {
    
    return (
        <div className="border-b border-neutral-900 pb-20">
            <h1 className="my-10 text-center text-4xl">
                Get in Touch
            </h1>
            <div className="text-center tracking-tighter">
                <div className="my-4"> 
                    <a href="tel:+91-8586997581" className="border-b">
                        {CONTACT.phoneNo}
                    </a>
                </div>
                <a href="mailto:neerajsngwn2017@gmail.com?Subject=Hi Neeraj!" className="border-b">
                    {CONTACT.email}
                </a>
            </div>
        </div>
    );
};
export default Contact;