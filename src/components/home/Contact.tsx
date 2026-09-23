import Section from "@/components/core/Section";
import { contactsData } from "@/lib/data/contacts";

function ContactMethod({ label, value, href, icon: Icon }: (typeof contactsData)[number]) {
  const content = (
    <>
      <Icon className="size-9 shrink-0" aria-hidden="true" />
      <span className="flex flex-col text-left">
        <span className="text-text-secondary text-xs font-medium uppercase tracking-wide">{label}</span>
        <span className="text-lg">{value}</span>
      </span>
    </>
  );

  return href ? (
    <a href={href} className="border-line bg-bg-secondary hover:border-accent flex w-fit items-center gap-5 rounded-xl border px-5 py-4 transition-colors">
      {content}
    </a>
  ) : (
    <div className="border-line bg-bg-secondary flex w-fit items-center gap-5 rounded-xl border px-5 py-4">
      {content}
    </div>
  );
}

export default function Contact() {
  return (
    <Section id="contact" className="bg-bg-primary text-text-primary">
      <div className="w-full text-center md:text-left">
        <div className="max-w-3xl pt-4">
          <h1 className="display-heading text-text-primary text-6xl md:text-8xl">
            Have a project
            <br />
            <span className="text-accent">in mind?</span>
          </h1>
        </div>
        <div className="">
          <p className="text-text-secondary pt-10 pb-10 text-lg">If you'd like to get in touch, feel free to email me at:</p>
          <div className="flex flex-col items-center gap-4 md:items-start">
            {contactsData.map((contact) => (
              <ContactMethod key={contact.label} {...contact} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
