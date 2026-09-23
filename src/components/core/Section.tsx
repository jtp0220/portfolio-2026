import { twMerge } from "tailwind-merge";

export default function Section({ id = "", className = "", children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={twMerge("w-full scroll-mt-24 px-6 py-24 md:px-10 md:py-32", className)}>
      <div className="mx-auto flex w-full max-w-6xl">{children}</div>
    </section>
  );
}
