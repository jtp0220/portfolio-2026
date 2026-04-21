import "/src/styles/index.css";
const images = Object.values(import.meta.glob("/src/assets/gallery/*.{jpg,JPG}", { eager: true })).map((mod: any) => mod.default);

function PhotoFrame({ src }: { src: string }) {
  return (
    <div className="bg-text-primary h-auto w-70 p-2">
      <img src={src} alt="" onContextMenu={(e) => e.preventDefault()} />
    </div>
  );
}

export default function Photography() {
  return (
    <section id="photography" className="bg-bg-secondary text-text-primary md:scroll-mt-15">
      <div className="m-auto flex max-w-250 flex-col items-center justify-center px-7 py-10">
        <h1 className="text-text-primary mb-10 text-3xl font-bold">Photography</h1>
        <div className="flex w-full flex-wrap items-center justify-center gap-10">
          {images.map((src, index) => (
            <PhotoFrame key={index} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}
