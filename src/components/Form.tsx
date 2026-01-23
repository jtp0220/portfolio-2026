import "../styles/index.css";

export default function Form() {
    return (
        <form action="" className="flex w-full max-w-100 flex-col gap-3">
            <label>Name:</label>
            <input type="text" placeholder="Your name" className="bg-bg-secondary rounded-md border px-2 py-1" />
            <label>Email:</label>
            <input type="text" placeholder="Your Email" className="bg-bg-secondary rounded-md border px-2 py-1" />
            <label>Message:</label>
            <input type="text" placeholder="Your Message" className="bg-bg-secondary h-50 rounded-md border px-2 py-1 text-wrap" />
        </form>
    );
}
