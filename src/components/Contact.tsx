import "../styles/index.css";

import EmailIcon from "../assets/email-icon.svg?react";

export default function Contact() {
    return (
        <section id="contact" className="bg-bg-primary text-text-primary scroll-mt-15">
            <div className="m-auto flex max-w-250 flex-col items-center justify-center px-7 py-10">
                <h1 className="text-text-primary mb-10 text-3xl font-bold">Contact</h1>

                <div className="text-text-primary bg-bg-secondary flex items-center justify-center gap-5 rounded-2xl p-5">
                    <EmailIcon className="size-9" />
                    <span className="text-lg">jeremytranperez@gmail.com</span>
                </div>
            </div>
        </section>
    );
}
