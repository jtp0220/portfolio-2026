import "../styles/index.css";

import EmailIcon from "../assets/icons/email-icon.svg?react";

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-primary text-text-primary md:scroll-mt-15">
      <div className="m-auto flex max-w-250 flex-col items-center justify-center px-7 py-10">
        <h1 className="text-text-primary mb-10 text-3xl font-bold">Contact</h1>
        <div className="">
          <p className="pb-10 text-center text-lg">If you'd like to get in touch, feel free to email me at: </p>
          <div className="text-text-primary bg-bg-secondary hover:bg-bg-tertiary border-text-secondary flex items-center justify-center gap-5 rounded-2xl border p-5">
            <EmailIcon className="size-9" />
            <a href="mailto:jeremytranperez@gmail.com">
              <span className="text-lg">jeremytranperez@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
