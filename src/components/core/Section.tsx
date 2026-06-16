import { twMerge } from "tailwind-merge";

export default function Section({ id = "", className = "", children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={twMerge("w-full px-7 py-10", className)}>
      <div className="mx-auto flex w-full max-w-6xl">{children}</div>
    </section>
  );
}
